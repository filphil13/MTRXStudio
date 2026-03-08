import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';

const CONFIG = {
  camera: {
    fov: 75,
    near: 0.1,
    far: 1000,
    position: { x: 0, y: 0, z: 5 },
    lookAt: { x: 0, y: 0, z: 0 },
  },
  renderer: {
    antialias: true,
    maxPixelRatio: 2,
  },
  model: {
    path: '/Logo.obj',
    color: 0xffffff,
    initialTilt: { x: 0.2, z: 0.2 },
    spinSpeedY: 0.005,
  },
  scroll: {
    distanceFactor: 0.05,
    smoothing: 0.08,
  },
  canvas: {
    id: 'background',
    className: 'fixed top-0 left-0 w-full h-full',
  },
};

function getViewportSize() {
  return {
    width: window.innerWidth,
    height: window.innerHeight,
  };
}

function createCamera() {
  const { width, height } = getViewportSize();
  const camera = new THREE.PerspectiveCamera(
    CONFIG.camera.fov,
    width / height,
    CONFIG.camera.near,
    CONFIG.camera.far
  );

  camera.position.set(
    CONFIG.camera.position.x,
    CONFIG.camera.position.y,
    CONFIG.camera.position.z
  );
  camera.lookAt(CONFIG.camera.lookAt.x, CONFIG.camera.lookAt.y, CONFIG.camera.lookAt.z);
  return camera;
}

function createRenderer(canvas) {
  const { width, height } = getViewportSize();
  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: CONFIG.renderer.antialias,
  });

  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, CONFIG.renderer.maxPixelRatio));
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
    CONFIG.model.path,
    (object) => {
      applyMaterialToMeshChildren(object, material);
      object.rotation.x += CONFIG.model.initialTilt.x;
      object.rotation.z += CONFIG.model.initialTilt.z;
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
  return CONFIG.camera.position.y - window.scrollY * CONFIG.scroll.distanceFactor;
}

function Background() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const scene = new THREE.Scene();
    const camera = createCamera();
    const renderer = createRenderer(canvas);
    const objMaterial = new THREE.MeshBasicMaterial({ color: CONFIG.model.color });
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
        CONFIG.scroll.smoothing
      );
      camera.lookAt(CONFIG.camera.lookAt.x, CONFIG.camera.lookAt.y, CONFIG.camera.lookAt.z);

      if (obj) {
        obj.rotateY(CONFIG.model.spinSpeedY);
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
      id={CONFIG.canvas.id}
      className={CONFIG.canvas.className}
    />
  );
}

export default Background;