"use client";

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const HexagonAnimation = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true
    });
    
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(300, 300);
    mountRef.current.appendChild(renderer.domElement);

    // Icosahedron geometry
    const geometry = new THREE.IcosahedronGeometry(1, 0);
    const material = new THREE.MeshBasicMaterial({ 
      color: 0x2196f3,
      wireframe: true,
      transparent: true,
      opacity: 0.7
    });

    const icosahedron = new THREE.Mesh(geometry, material);
    scene.add(icosahedron);

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);

      // X축과 Y축 모두에 대해 회전
      icosahedron.rotation.x += 0.003;
      icosahedron.rotation.y += 0.003;

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      mountRef.current?.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={mountRef} 
      className="w-[300px] h-[300px] mx-auto hover:scale-105 transition-transform duration-300"
    />
  );
}; 