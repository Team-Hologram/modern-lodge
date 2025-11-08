"use client";

import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Mesh } from "three";

const Mountain = () => {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, -2, 0]} rotation={[0, 0, 0]}>
      <coneGeometry args={[3, 5, 32]} />
      <meshStandardMaterial color="#4a4a4a" roughness={0.8} metalness={0.2} />
    </mesh>
  );
};

export default Mountain;