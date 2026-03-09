import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';

function Background() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const loader = new OBJLoader();
    const objMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
    let obj = null;

    loader.load(
      '/Logo.obj',
      (object) => {
        object.traverse((child) => {
          if (child.isMesh) {
            child.material = objMaterial;
          }
        });

        object.rotation.x += 0.20;
        object.rotation.z += 0.20;
        obj = object;
        scene.add(object);
      },
      undefined,
      (err) => {
        console.error('Failed to load OBJ:', err);
      }
    );

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', onResize);

    let frameId = 0;
    const animate = () => {
      if (obj) {
        // Spin around local Y so the initial tilt stays intact.
        obj.rotateY(0.005);
      }

      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('resize', onResize);
      objMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="background"
      className="fixed top-0 left-0 w-full h-full"
    />
  );
}

export default Background;