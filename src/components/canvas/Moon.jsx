import React, { Suspense, useRef } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";
import { moon, normal } from "../../assets";
import { MeshStandardMaterial, SphereGeometry, TextureLoader } from "three";

const Moon = () => {
  const moonTexture = useLoader(TextureLoader, moon);
  const normalTexture = useLoader(TextureLoader, normal);

  const mesh = useRef();

  return  <mesh ref={mesh} scale={.6} position-y={0} rotation-y={0}>
    <sphereGeometry attach="geometry" args={[3, 32, 32]} />
    <meshStandardMaterial attach="material" map={moonTexture} normalMap={normalTexture} />
  </mesh>;
};

const MoonCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <ambientLight />
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Moon />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default MoonCanvas;
