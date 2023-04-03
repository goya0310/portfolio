import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";
import { moon, normal } from "../../assets";
import { MeshStandardMaterial, SphereGeometry, TextureLoader } from "three";

const Moon = ({ isMobile }) => {
  const moonTexture = useLoader(TextureLoader, moon);
  const normalTexture = useLoader(TextureLoader, normal);

  const mesh = useRef();

  return (
    <mesh ref={mesh} scale={isMobile ? 0.85 : 0.6} position-y={0} rotation-y={0}>
      <sphereGeometry attach="geometry" args={[3, 32, 32]} />
      <meshStandardMaterial
        attach="material"
        map={moonTexture}
        normalMap={normalTexture}
      />
    </mesh>
  );
};

const MoonCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

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
        <Moon isMobile={isMobile} />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default MoonCanvas;
