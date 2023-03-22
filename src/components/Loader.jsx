import { Html, useProgress } from "@react-three/drei";

export const CanvasLoader = () => { // this is the loader for the canvas
  const { progress } = useProgress(); // this is the progress of the loader
  return (
    <Html // this is the html tag for the loader
      as='div'
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        marginTop: 250,
      }}
    >
      <span className='canvas-loader'></span> 
      <p
        style={{
          fontSize: 14,
          color: "#F1F1F1",
          fontWeight: 800,
          marginTop: 40,
        }}
      >
        {progress.toFixed(2)}%
      </p>
    </Html>
  );
};

export default CanvasLoader;