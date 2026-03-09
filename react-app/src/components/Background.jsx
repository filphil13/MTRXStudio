import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';

// Camera variables
const CAMERA_FOV = 75;
const CAMERA_NEAR = 0.1;
const CAMERA_FAR = 1000;
const CAMERA_START_X = 0;
const CAMERA_START_Y = -0.5;
const CAMERA_START_Z = 5;
const CAMERA_LOOK_AT_X = 0;
const CAMERA_LOOK_AT_Y = CAMERA_START_Y;
const CAMERA_LOOK_AT_Z = 0;

// Renderer variables
const RENDERER_ANTIALIAS = true;
const RENDERER_MAX_PIXEL_RATIO = 2;

// Model variables
const MODEL_PATH = '/Logo.obj';
const MODEL_POSITION_X = 0.0;
const MODEL_POSITION_Y = 0.0;
const MODEL_POSITION_Z = 0.0;
const MODEL_COLOR = 0xffffff;
const MODEL_INITIAL_TILT_X = 0.5;
const MODEL_INITIAL_TILT_Z = 0.4;
const MODEL_SPIN_SPEED_Y = 0.0075;

// Scroll variables
const SCROLL_DISTANCE_FACTOR = 0.05;
const SCROLL_SMOOTHING = 0.08;

// Canvas variables
const CANVAS_ID = 'background';
const CANVAS_CLASS_NAME = 'fixed top-0 left-0 w-full h-full';

function getViewportSize() {
  return {
    width: window.innerWidth,
    height: window.innerHeight,
  };
}

function createCamera() {
  const { width, height } = getViewportSize();
  const camera = new THREE.PerspectiveCamera(
    CAMERA_FOV,
    width / height,
    CAMERA_NEAR,
    CAMERA_FAR
  );

  camera.position.set(CAMERA_START_X, CAMERA_START_Y, CAMERA_START_Z);
  camera.lookAt(CAMERA_LOOK_AT_X, CAMERA_LOOK_AT_Y, CAMERA_LOOK_AT_Z);
  return camera;
}

function createRenderer(canvas) {
  const { width, height } = getViewportSize();
  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: RENDERER_ANTIALIAS,
  });

  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, RENDERER_MAX_PIXEL_RATIO));
  return renderer;
}

function applyMaterialToMeshChildren(object, material) {
  object.traverse((child) => {
    if (child.isMesh) {
      child.material = material;
    }
  });
}

function loadObjectModel(scene, material, onLoaded) {
  const loader = new OBJLoader();

  loader.load(
    MODEL_PATH,
    (object) => {
      applyMaterialToMeshChildren(object, material);
      object.position.set(MODEL_POSITION_X, MODEL_POSITION_Y, MODEL_POSITION_Z);
      object.rotation.x += MODEL_INITIAL_TILT_X;
      object.rotation.z += MODEL_INITIAL_TILT_Z;
      scene.add(object);
      onLoaded(object);
    },
    undefined,
    (err) => {
      console.error('Failed to load OBJ:', err);
    }
  );
}

function updateCameraAndRendererSize(camera, renderer) {
  const { width, height } = getViewportSize();
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  renderer.setSize(width, height);
}

function getScrollTargetY() {
  return CAMERA_START_Y - window.scrollY * SCROLL_DISTANCE_FACTOR;
}``

function Background() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const scene = new THREE.Scene();
    const camera = createCamera();
    const renderer = createRenderer(canvas);
    const objMaterial = new THREE.MeshBasicMaterial({ color: MODEL_COLOR });
    let obj = null;
    let targetCameraY = camera.position.y;

    loadObjectModel(scene, objMaterial, (loadedObject) => {
      obj = loadedObject;
    });

    const onResize = () => {
      updateCameraAndRendererSize(camera, renderer);
    };

    const onScroll = () => {
      targetCameraY = getScrollTargetY();
    };

    window.addEventListener('resize', onResize);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    let frameId = 0;
    const animate = () => {
      camera.position.y = THREE.MathUtils.lerp(
        camera.position.y,
        targetCameraY,
        SCROLL_SMOOTHING
      );

      if (obj) {
        obj.rotateY(MODEL_SPIN_SPEED_Y);
      }

      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('scroll', onScroll);
      objMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id={CANVAS_ID}
      className={CANVAS_CLASS_NAME}
    />
  );
}

export default Background;