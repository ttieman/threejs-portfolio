import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import { CanvasLoader } from "../Loader";


const Computers = () => {
  const computer = useGLTF('./desktop_pc/scene.gltf')
  return (
    <mesh> {/* everything should remain within a mesh tag */}
      <hemisphereLight intensity={0.15} // adds lighting the the mesh
        groundColor="black" />
      <pointLight //adds directional light to the scene
        intensity={1} />
      <primitive //imports the mesh
        object={computer.scene} //selects the object wanting to be rendered 
        scale={0.55} //scales the object
        position={[0, -3.3, -1]}
        /> 
    </mesh>
  )
}

const ComputersCanvas = () => {
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
        <Computers />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default ComputersCanvas