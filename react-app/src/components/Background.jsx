import { useEffect, useRef } from "react";
import * as THREE from "three";
import { FontLoader } from "three/addons/loaders/FontLoader.js";
import { TextGeometry } from "three/addons/geometries/TextGeometry.js";

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
const SCENE_BACKGROUND_COLOR = 0x07010f;

//LOGO MESH VARIABLES
const MODEL_POSITION_X = 0.0;
const MODEL_POSITION_Y = 0.0;
const MODEL_POSITION_Z = 0.0;
const MODEL_INITIAL_TILT_X = 0.0;
const MODEL_INITIAL_TILT_Y = 0.0;
const MODEL_INITIAL_TILT_Z = 0.0;
const MODEL_SEGMENTS = 32;

const MODEL_COLOR = 0xffffff;
const RING_TEXT_COLOR = 0xffffff;

const MODEL_SPIN_SPEED_Y = 0.0035;
const RING_SPIN_SPEED_Y = -0.005;

const RING_TEXT_LABEL = "MTRX";
const RING_TEXT_RADIUS = 4.5;
const RING_TEXT_COUNT = 12;
const RING_TEXT_SIZE = 0.5;
const RING_TEXT_DEPTH = 0.01;
const RING_TEXT_FONT_URL = "/fonts/Kode_Mono_Regular.json";
const RING_TILT = 0.2; // radians, tilt of the ring on the X axis

//Star Variables
const STAR_COUNT = 500;
const STAR_SIZE = 0.1;
const STAR_COLOR = 0xffffff;
const STAR_SPREAD_RADIUS = 300;
const STAR_SEGMENTS = 8; // Lower segments for a more stylized, low-poly look

//Side Wall Variables
const WALL1_POSITION_X = 5;
const WALL1_POSITION_Y = -80;
const WALL1_POSITION_Z = 5;
const WALL1_ROTATION_Y = 3.14 / 2; // Rotate 90 degrees to face inward

const WALL2_POSITION_X = -5;
const WALL2_POSITION_Y = -80;
const WALL2_POSITION_Z = 5;
const WALL2_ROTATION_Y = 3.14 / 2; // Rotate 90 degrees to face inward

const WALL_SIZE_X = 3;
const WALL_SIZE_Y = 200;
const WALL_SEGMENTS = 200;
const WALL_COLOR = 0xffffff;
const WALL_GRADIENT_LEFT_COLOR = "#FF2EDB";
const WALL_GRADIENT_RIGHT_COLOR = "#07010f";

// Random Spike Variables
const SPIKE_MAX_OFFSET = 2.5; // Max inward/outward displacement
const SPIKE_CHANGE_PROBABILITY = 0.008; // Chance a vertex picks a new target per update
const SPIKE_ACTIVE_PROBABILITY = 0.2; // Chance the new target is an active spike
const SPIKE_UPDATE_INTERVAL = 0.00001; // Seconds between random target updates
const SPIKE_DAMPING = 7; // Lower is smoother, higher is snappier

// Scroll variables
const SCROLL_DISTANCE_FACTOR = 0.015;
const SCROLL_SMOOTHING = 0.08;

// Canvas variables
const CANVAS_ID = "background";
const CANVAS_CLASS_NAME = "fixed inset-0 block h-dvh w-screen pointer-events-none z-0";

// Responsive breakpoints
const SMALL_PHONE_BREAKPOINT = 430;
const MOBILE_BREAKPOINT = 640;
const TABLET_BREAKPOINT = 1024;

function getResponsiveSceneSettings(width) {
	if (width <= SMALL_PHONE_BREAKPOINT) {
		return {
			cameraFov: 78,
			cameraY: -1,
			cameraZ: 8,
			groupScale: 0.44,
			wallX: 1.5,
			wallY: -68,
			pixelRatioCap: 1.3,
			starCount: 180,
		};
	}

	if (width < MOBILE_BREAKPOINT) {
		return {
			cameraFov: 74,
			cameraY: -0.15,
			cameraZ: 12.7,
			groupScale: 0.42,
			wallX: 4,
			wallY: -72,
			pixelRatioCap: 1.5,
			starCount: 240,
		};
	}

	if (width < TABLET_BREAKPOINT) {
		return {
			cameraFov: 66,
			cameraY: -0.4,
			cameraZ: 11.5,
			groupScale: 0.46,
			wallX: 2.5,
			wallY: -76,
			pixelRatioCap: 1.75,
			starCount: 360,
		};
	}

	return {
		cameraFov: CAMERA_FOV,
		cameraY: CAMERA_START_Y,
		cameraZ: CAMERA_START_Z,
		groupScale: 0.5,
		wallX: WALL1_POSITION_X,
		wallY: WALL1_POSITION_Y,
		pixelRatioCap: RENDERER_MAX_PIXEL_RATIO,
		starCount: STAR_COUNT,
	};
}

function getRendererPixelRatio(width) {
	return Math.min(
		window.devicePixelRatio,
		getResponsiveSceneSettings(width).pixelRatioCap,
	);
}

function getViewportSize() {
	const viewport = window.visualViewport;
	const width = Math.ceil(
		Math.max(
			window.innerWidth,
			viewport?.width ?? 0,
			document.documentElement.clientWidth,
		),
	);
	const height = Math.ceil(
		Math.max(
			window.innerHeight,
			viewport?.height ?? 0,
			document.documentElement.clientHeight,
		),
	);

	return {
		width: Math.max(1, width),
		height: Math.max(1, height),
	};
}

function createCamera() {
	const { width, height } = getViewportSize();
	const settings = getResponsiveSceneSettings(width);
	const camera = new THREE.PerspectiveCamera(
		settings.cameraFov,
		width / height,
		CAMERA_NEAR,
		CAMERA_FAR,
	);

	camera.position.set(CAMERA_START_X, settings.cameraY, settings.cameraZ);
	camera.lookAt(CAMERA_LOOK_AT_X, settings.cameraY, CAMERA_LOOK_AT_Z);
	return camera;
}

function createRenderer(canvas) {
	const { width, height } = getViewportSize();
	const renderer = new THREE.WebGLRenderer({
		canvas,
		antialias: RENDERER_ANTIALIAS,
	});

	renderer.setSize(width, height, false);
	renderer.setPixelRatio(getRendererPixelRatio(width));
	return renderer;
}

function updateCameraAndRendererSize(camera, renderer) {
	const { width, height } = getViewportSize();
	const settings = getResponsiveSceneSettings(width);

	camera.aspect = width / height;
	camera.fov = settings.cameraFov;
	camera.updateProjectionMatrix();
	renderer.setSize(width, height, false);
	renderer.setPixelRatio(getRendererPixelRatio(width));

	return settings;
}

function getScrollTargetY(baseCameraY) {
	return baseCameraY - window.scrollY * SCROLL_DISTANCE_FACTOR;
}

function applyResponsiveLayout(camera, group, wall1, wall2, settings) {
	group.scale.set(settings.groupScale, settings.groupScale, settings.groupScale);
	wall1.position.set(settings.wallX, settings.wallY, WALL1_POSITION_Z);
	wall2.position.set(-settings.wallX, settings.wallY, WALL2_POSITION_Z);
	camera.position.z = settings.cameraZ;
}

function applyLeftToRightGradient(geometry) {
	const positions = geometry.attributes.position;
	const colors = new Float32Array(positions.count * 3);
	const leftColor = new THREE.Color(WALL_GRADIENT_LEFT_COLOR);
	const rightColor = new THREE.Color(WALL_GRADIENT_RIGHT_COLOR);
	const mixedColor = new THREE.Color();

	for (let i = 0; i < positions.count; i += 1) {
		const x = positions.getX(i);
		const t = THREE.MathUtils.inverseLerp(
			-WALL_SIZE_X / 2,
			WALL_SIZE_X / 2,
			x,
		);
		mixedColor.lerpColors(leftColor, rightColor, t);

		const colorIndex = i * 3;
		colors[colorIndex] = mixedColor.r;
		colors[colorIndex + 1] = mixedColor.g;
		colors[colorIndex + 2] = mixedColor.b;
	}

	geometry.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));
}

function Background({ id = CANVAS_ID, className = "" }) {
	const canvasRef = useRef(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;

		const scene = new THREE.Scene();
		scene.background = new THREE.Color(SCENE_BACKGROUND_COLOR);
		const camera = createCamera();
		const renderer = createRenderer(canvas);
		const group = new THREE.Group();
		scene.add(group);
		let baseCameraY = camera.position.y;
		let targetCameraY = camera.position.y;

		////////////////
		// Globe
		////////////////

		const globeGeometry = new THREE.SphereGeometry(
			3,
			MODEL_SEGMENTS,
			MODEL_SEGMENTS / 2,
		);
		const globe = new THREE.LineSegments(
			new THREE.EdgesGeometry(globeGeometry, 1),
			new THREE.LineBasicMaterial({
				color: MODEL_COLOR,
			}),
		);
		group.add(globe);

		////////////////
		// Single Ring (invisible)
		////////////////

		const ring = new THREE.Group();
		ring.rotation.x = RING_TILT; // tilt of the ring
		group.add(ring);

		////////////////
		// MTRX Text Band
		////////////////

		const loader = new FontLoader();
		loader.load(RING_TEXT_FONT_URL, (font) => {
			const material = new THREE.MeshBasicMaterial({
				color: RING_TEXT_COLOR,
			});
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
		});

		////////////////
		// Stars
		////////////////
		const addStar = () => {
			const geometry = new THREE.SphereGeometry(
				STAR_SIZE,
				STAR_SEGMENTS,
				STAR_SEGMENTS / 2,
			);
			const material = new THREE.MeshBasicMaterial({
				color: STAR_COLOR,
				blending: THREE.AdditiveBlending, // Makes the star appear to glow
				wireframe: true, // Adds a wireframe for a more stylized look
			});
			const star = new THREE.Mesh(geometry, material);

			const [x, y, z] = Array(3)
				.fill()
				.map(() => THREE.MathUtils.randFloatSpread(STAR_SPREAD_RADIUS));
			star.position.set(x, y, z);
			scene.add(star);
		};

		////////////////
		// Side Walls
		////////////////
		const wall1Geometry = new THREE.PlaneGeometry(
			WALL_SIZE_X,
			WALL_SIZE_Y,
			WALL_SEGMENTS / 30,
			WALL_SEGMENTS,
		);
		const wall2Geometry = wall1Geometry.clone();
		applyLeftToRightGradient(wall1Geometry);
		applyLeftToRightGradient(wall2Geometry);
		const material = new THREE.MeshBasicMaterial({
			wireframe: true,
			side: THREE.DoubleSide,
			color: WALL_COLOR,
			vertexColors: true,
		});
		const wall1 = new THREE.Mesh(wall1Geometry, material);
		scene.add(wall1);
		const wall2 = new THREE.Mesh(wall2Geometry, material);
		scene.add(wall2);
		const wallSpikeTargets = [
			new Float32Array(wall1.geometry.attributes.position.count),
			new Float32Array(wall2.geometry.attributes.position.count),
		];
		let lastSpikeUpdate = 0;
		let lastFrameTime = performance.now() * 0.001;

		const initialSettings = getResponsiveSceneSettings(getViewportSize().width);
		applyResponsiveLayout(camera, group, wall1, wall2, initialSettings);
		baseCameraY = initialSettings.cameraY;
		targetCameraY = baseCameraY;

		group.position.set(
			MODEL_POSITION_X,
			MODEL_POSITION_Y,
			MODEL_POSITION_Z,
		);
		group.rotation.set(
			MODEL_INITIAL_TILT_X,
			MODEL_INITIAL_TILT_Y,
			MODEL_INITIAL_TILT_Z,
		);

		Array(initialSettings.starCount).fill().forEach(addStar);

		wall1.rotation.y = WALL1_ROTATION_Y;
		wall2.rotation.y = WALL2_ROTATION_Y;

		const onResize = () => {
			const settings = updateCameraAndRendererSize(camera, renderer);
			applyResponsiveLayout(camera, group, wall1, wall2, settings);
			baseCameraY = settings.cameraY;
			targetCameraY = getScrollTargetY(baseCameraY);
		};

		const onScroll = () => {
			targetCameraY = getScrollTargetY(baseCameraY);
		};

		const visualViewport = window.visualViewport;
		window.addEventListener("resize", onResize);
		window.addEventListener("orientationchange", onResize);
		visualViewport?.addEventListener("resize", onResize);
		visualViewport?.addEventListener("scroll", onResize);
		window.addEventListener("scroll", onScroll, { passive: true });
		onResize();
		onScroll();

		////////////////
		// ANIMATION
		////////////////
		let frameId = 0;
		const animate = () => {
			camera.position.y = THREE.MathUtils.lerp(
				camera.position.y,
				targetCameraY,
				SCROLL_SMOOTHING,
			);

			if (globe && ring) {
				globe.rotateY(MODEL_SPIN_SPEED_Y);
				ring.rotateY(RING_SPIN_SPEED_Y); // rotate the band in opposite direction and faster
			}

			// Random spike displacement along local Z (maps to world X after the 90deg Y rotation)
			const now = performance.now() * 0.001;
			const deltaTime = Math.min(0.05, now - lastFrameTime);
			lastFrameTime = now;
			const t = now;
			if (t - lastSpikeUpdate >= SPIKE_UPDATE_INTERVAL) {
				wallSpikeTargets.forEach((targets) => {
					for (let i = 0; i < targets.length; i += 1) {
						if (Math.random() < SPIKE_CHANGE_PROBABILITY) {
							if (Math.random() < SPIKE_ACTIVE_PROBABILITY) {
								const direction = Math.random() < 0.5 ? -1 : 1;
								const nextTarget =
									direction *
									(0.15 + Math.random() * SPIKE_MAX_OFFSET);
								targets[i] = THREE.MathUtils.lerp(
									targets[i],
									nextTarget,
									0.35,
								);
							} else {
								targets[i] = THREE.MathUtils.lerp(
									targets[i],
									0,
									0.6,
								);
							}
						}
					}
				});
				lastSpikeUpdate = t;
			}

			[wall1, wall2].forEach((wall, wallIndex) => {
				const pos = wall.geometry.attributes.position;
				const positions = pos.array;
				const targets = wallSpikeTargets[wallIndex];

				for (let i = 0; i < pos.count; i += 1) {
					const zIndex = i * 3 + 2;
					positions[zIndex] = THREE.MathUtils.damp(
						positions[zIndex],
						targets[i],
						SPIKE_DAMPING,
						deltaTime,
					);
				}

				pos.needsUpdate = true;
			});

			renderer.render(scene, camera);
			frameId = requestAnimationFrame(animate);
		};

		animate();

		return () => {
			cancelAnimationFrame(frameId);
			window.removeEventListener("resize", onResize);
			window.removeEventListener("orientationchange", onResize);
			visualViewport?.removeEventListener("resize", onResize);
			visualViewport?.removeEventListener("scroll", onResize);
			window.removeEventListener("scroll", onScroll);
			renderer.dispose();
		};
	}, []);

	return (
		<canvas
			ref={canvasRef}
			id={id}
			className={`${CANVAS_CLASS_NAME} ${className}`.trim()}
		/>
	);
}

export default Background;
