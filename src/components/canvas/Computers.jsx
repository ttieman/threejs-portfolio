import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import { CanvasLoader } from "../Loader";


const Computers = ({ isMobile }) => {
  const computer = useGLTF('./desktop_pc/scene.gltf')
  return (
    <mesh> {/* everything should remain within a mesh tag */}
      <hemisphereLight intensity={0.15} // adds lighting the the mesh
        groundColor="black" />
      <pointLight //adds directional light to the scene
        intensity={1}  />{/* this determines the intensity of the light */}
        <spotLight //adds directional light to the scene
        position={[-20, 50, 10]} // this is the position of the light
        angle={0.12} // this is the angle of the light
        penumbra={1} // this is the penumbra of the light
        intensity={1} // this is the intensity of the light
        castShadow // this is the shadow cast by the light
        shadow-mapSize-width={1024} // this is the width of the shadow
        />
      <primitive //imports the mesh
        object={computer.scene} //selects the object wanting to be rendered 
        scale={isMobile ? .28 : 0.55} //scales the object
        position={isMobile ? [0,-2,-.5] : [0, -3.3, -1]} // this is the position of the object
        rotation={[-.01, -.2, -.1]} // this is the rotation of the object
        /> 
    </mesh>
  )
}

const ComputersCanvas = () => {

  //add a listener for changes in the window size
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {{
    const mediaQuery = window.matchMedia('(max-width: 600px)');
    // set the initial value of isMobile state variable
    setIsMobile(mediaQuery.matches);
    //define a callback function to set the isMobile state variable
    const handleResize = (event) => {
      setIsMobile(event.matches);
    }
    //add the callback function to the media query listener
    mediaQuery.addEventListener('change', handleResize);
    return () => mediaQuery.removeEventListener('change', handleResize);
  }
}, []);
  return (
    <Canvas
      frameloop='demand' //animation frames 
      shadows  // implements shadows 
      camera={{ position: [20, 3, 5], fov: 25 }} /* imports camera and camera settings*/
      gl={{ preserveDrawingBuffer: true }} // ensures proper rendering of the model
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false}  // effects the canvas controls
          maxPolarAngle={Math.PI / 2} // adds limitaions for the polar angles 
          minPolarAngle={Math.PI / 2}
        />
        <Computers 
        isMobile={isMobile}
        />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default ComputersCanvas