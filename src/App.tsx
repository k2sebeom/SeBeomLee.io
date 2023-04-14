import React from 'react';
import Header from './components/layouts/Header';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, useGLTF } from '@react-three/drei';

const Earth = (): JSX.Element => {
  const earth = useGLTF('./models/earth.glb');

  return <primitive object={earth.scene} />;
};

function App(): JSX.Element {
  return (
    <div>
      <Header />
      <Canvas
        style={{
          height: 500,
        }}
        camera={{}}
      >
        <Stars />
        <OrbitControls rotateSpeed={0.5} />
        <directionalLight position={[2, 0, 2]} />
        <ambientLight color={'#FFF'} intensity={0.3} />
        <Earth />
      </Canvas>
    </div>
  );
}

export default App;
