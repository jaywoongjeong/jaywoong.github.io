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
    
    // 렌더러의 픽셀 비율 설정 (별도로 설정)
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(300, 300);
    mountRef.current.appendChild(renderer.domElement);

    // Hexagon geometry
    const hexagonShape = new THREE.Shape();
    const size = 1;
    for (let i = 0; i < 6; i++) {
      const angle = (i * Math.PI) / 3;
      const x = size * Math.cos(angle);
      const y = size * Math.sin(angle);
      if (i === 0) hexagonShape.moveTo(x, y);
      else hexagonShape.lineTo(x, y);
    }
    hexagonShape.lineTo(size, 0);

    const hexagonGeometry = new THREE.ExtrudeGeometry(hexagonShape, {
      depth: 0.1,
      bevelEnabled: false
    });
    
    // Ball geometry - 더 작고 매끄럽게
    const ballGeometry = new THREE.SphereGeometry(0.2, 32, 32);
    
    // Materials - 색상 수정
    const hexagonMaterial = new THREE.MeshBasicMaterial({ 
      color: 0x2196f3,  // 파란색 계열
      wireframe: true,
      transparent: true,
      opacity: 0.7
    });
    const ballMaterial = new THREE.MeshBasicMaterial({ 
      color: 0xff4081  // 분홍색 계열
    });

    const hexagon = new THREE.Mesh(hexagonGeometry, hexagonMaterial);
    const ball = new THREE.Mesh(ballGeometry, ballMaterial);

    scene.add(hexagon);
    scene.add(ball);

    camera.position.z = 5;

    // 더 부드러운 애니메이션
    const animate = () => {
      requestAnimationFrame(animate);

      hexagon.rotation.z += 0.005; // 회전 속도 감소
      
      // 더 부드러운 볼 움직임
      const time = Date.now() * 0.0005; // 속도 감소
      ball.position.x = Math.cos(time) * 0.5;
      ball.position.y = Math.sin(time) * 0.5;

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