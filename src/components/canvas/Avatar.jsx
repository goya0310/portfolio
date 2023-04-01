import {
  OrbitControls,
  Sphere,
  MeshDistortMaterial,
  Stars,
} from "@react-three/drei";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";
import { TextureLoader, Vector3 } from "three";
import CanvasLoader from "../Loader";

const Avatar = ({ isMobile }) => {
  const avatarTexture = useLoader(TextureLoader, "diego.jpg");
  const avatarTextureActive = useLoader(TextureLoader, "diegoActive.jpg");

  const mesh = useRef();

  useFrame(() => {
    mesh.current.rotation.y += 0.001;
    mesh.current.rotation.x += 0.002;
  });

  const [active, setActive] = useState(false);

  return (
    <mesh
      ref={mesh}
      onClick={(e) => {
        setActive(!active);
      }}
      scale={active ? (isMobile ? 0.9 : 1) * 1.05 : isMobile ? 0.9 : 1}
      position={isMobile ? [-0.5, -.7, 0] : [0.5, -0.5, 1]}
      castShadow
      receiveShadow
    >
      <boxGeometry
        attach="geometry"
        args={[1.5, 1.5, 1.5]}
        color="0x800080"
      />
      <meshStandardMaterial
        attach="material"
        map={active ? avatarTextureActive : avatarTexture}
        color="#fff8eb"
      />
    </mesh>
  );
};

const OddSphere = ({ isMobile }) => {
  return (
    <mesh position={isMobile ? [2, 0, -2] : [5, 1.5, -2]}>
      <Sphere args={[1, 100, 200]} scale={0.5}>
        <MeshDistortMaterial
          color="#00B2FF"
          attach="material"
          distort={0.5}
          speed={2}
        />
      </Sphere>
    </mesh>
  );
};

const Astronaut = ({ isMobile }) => {
  const astronaut = useLoader(TextureLoader, "astronautFloating.png");

  return (
    <mesh position={isMobile ? [1.5, 0, -1.4] : [4.5, 1.5, -1.4]}>
      <planeBufferGeometry attach="geometry" args={[1, 1]} color="0x800080" />
      <meshBasicMaterial
        attach="material"
        map={astronaut}
        transparent
        color="#fff8eb"
      />
    </mesh>
  );
};

const Rocket = ({ isMobile }) => {
  const rocket = useLoader(TextureLoader, "rocket.png");
  const meshRef = useRef();
  const [position, setPosition] = useState(new Vector3(-5, -3, 0));

  useFrame(() => {
    setPosition((prevPosition) => prevPosition.add(new Vector3(0.02, 0.02, 0)));
    meshRef.current.position.copy(position);
  });

  return (
    <mesh ref={meshRef} scale={isMobile ? 0.6 : 0.7}>
      <planeBufferGeometry attach="geometry" args={[1, 1]} color="0x800080" />
      <meshBasicMaterial
        attach="material"
        map={rocket}
        transparent
        color="#fff8eb"
      />
    </mesh>
  );
};

const AvatarLoader = () => {
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
    <Canvas colorManagment>
      <Suspense fallback={<CanvasLoader />}>
        <ambientLight intensity={0.25} />
        <directionalLight
          position={[0, 0, 0.05]}
          intensity={0.5}
          angle={0.15}
        />
        <OrbitControls enableZoom={false} />
        <Avatar isMobile={isMobile} />
         {/* {!isMobile && (
          <> */}
            <Astronaut isMobile={isMobile} />
            <OddSphere isMobile={isMobile} />
            <Rocket isMobile={isMobile} />
          {/* </>
        )}  */}
       <Stars
          radius={100} // Radius of the inner sphere (default=100)
          depth={50} // Depth of area where stars should fit (default=50)
          count={1000} // Amount of stars (default=5000)
          factor={4} // Size factor (default=4)
          saturation={0} // Saturation 0-1 (default=0)
          fade={true} // Faded dots (default=false)
          position={[0, 0, -50]}
        />
      </Suspense>
    </Canvas>
  );
};

export default AvatarLoader;
