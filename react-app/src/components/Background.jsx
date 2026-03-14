import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { FontLoader } from 'three/addons/loaders/FontLoader.js';
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';

// Camera variables
const CAMERA_FOV = 60;
const CAMERA_NEAR = 0.1;
const CAMERA_FAR = 1000;
const CAMERA_START_X = 0;
const CAMERA_START_Y = -0.5;
const CAMERA_START_Z = 10;
const CAMERA_LOOK_AT_X = 0;
const CAMERA_LOOK_AT_Y = CAMERA_START_Y;
const CAMERA_LOOK_AT_Z = 0;

// Renderer variables
const RENDERER_ANTIALIAS = true;
const RENDERER_MAX_PIXEL_RATIO = 2;

//LOGO MESH VARIABLES
const MODEL_POSITION_X = 0.0;
const MODEL_POSITION_Y = 0.0;
const MODEL_POSITION_Z = 0.0;
const MODEL_INITIAL_TILT_X = 0.0;
const MODEL_INITIAL_TILT_Y = 0.0;
const MODEL_INITIAL_TILT_Z = 0.0;

const MODEL_COLOR = 0xffffff;
const RING_TEXT_COLOR = 0xffffff;

const MODEL_SPIN_SPEED_Y = 0.0075;
const RING_SPIN_SPEED_Y = -0.012;

const RING_TEXT_LABEL = 'MTRX';
const RING_TEXT_RADIUS = 4.5;
const RING_TEXT_COUNT = 12;
const RING_TEXT_SIZE = 0.5;
const RING_TEXT_DEPTH = 0.01;

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


function updateCameraAndRendererSize(camera, renderer) {
  const { width, height } = getViewportSize();
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  renderer.setSize(width, height);
}

function getScrollTargetY() {
  return CAMERA_START_Y - window.scrollY * SCROLL_DISTANCE_FACTOR;
}

function Background() {
  const canvasRef = useRef(null);

  useEffect(() => {
	const canvas = canvasRef.current;
	if (!canvas) return;

	const scene = new THREE.Scene();
	const camera = createCamera();
	const renderer = createRenderer(canvas);
	const group = new THREE.Group();
	scene.add(group);
	let targetCameraY = camera.position.y;

	////////////////
	// Globe
	////////////////

	const globe = new THREE.Mesh(
	  new THREE.SphereGeometry(3,32,32),
	  new THREE.MeshBasicMaterial({ wireframe:true, color: MODEL_COLOR })
	);
	group.add(globe);

	////////////////
	// Single Ring (invisible)
	////////////////

	const ring = new THREE.Group();
	ring.rotation.x = 0.3; // tilt of the ring
	group.add(ring);



	////////////////
	// MTRX Text Band
	////////////////

	const loader = new FontLoader();
	loader.load(
		'https://threejs.org/examples/fonts/helvetiker_regular.typeface.json',
		(font) => {
			const material = new THREE.MeshBasicMaterial({ color: RING_TEXT_COLOR });
			const gap = (2 * Math.PI) / RING_TEXT_COUNT;

			for (let i = 0; i < RING_TEXT_COUNT; i += 1) {
				const angle = i * gap;

				const geo = new TextGeometry(RING_TEXT_LABEL, {
					font,
					size: RING_TEXT_SIZE,
					// In current three versions, TextGeometry uses `depth` (not `height`).
					depth: RING_TEXT_DEPTH,
				});
				geo.center();

				const mesh = new THREE.Mesh(geo, material);

				// Position along the ring
				mesh.position.x = Math.cos(angle) * RING_TEXT_RADIUS;
				mesh.position.z = Math.sin(angle) * RING_TEXT_RADIUS;
				mesh.position.y = 0;

				// Face outward
				mesh.lookAt(0, 0, 0);
				mesh.rotation.y += Math.PI;

				ring.add(mesh);
			}
		}
	);

	group.scale.set(0.5, 0.5, 0.5);
	group.position.set(MODEL_POSITION_X, MODEL_POSITION_Y, MODEL_POSITION_Z);
	group.rotation.set(MODEL_INITIAL_TILT_X, MODEL_INITIAL_TILT_Y, MODEL_INITIAL_TILT_Z);



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

	  if (globe && ring) {
		globe.rotateY(MODEL_SPIN_SPEED_Y);
		ring.rotateY(RING_SPIN_SPEED_Y); // rotate the band in opposite direction and faster
	  }
	  

	  renderer.render(scene, camera);
	  frameId = requestAnimationFrame(animate);
	};

	animate();

	return () => {
	  cancelAnimationFrame(frameId);
	  window.removeEventListener('resize', onResize);
	  window.removeEventListener('scroll', onScroll);
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