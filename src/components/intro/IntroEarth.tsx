import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, useGLTF } from '@react-three/drei';
import styled from 'styled-components';

const Earth = (): JSX.Element => {
  const earth = useGLTF('./models/earth.glb');

  return <primitive object={earth.scene} position-y={-2} scale={2} />;
};

const CanvasContainer = styled.div`
  height: 500px;
`;

function IntroEarth(): JSX.Element {
  return (
    <CanvasContainer>
      <Canvas
        camera={{
          position: [2, 1.6, 4.2],
        }}
      >
        <Stars />
        <OrbitControls rotateSpeed={0.5} />
        <directionalLight position={[2, 0, 2]} />
        <ambientLight color={'#FFF'} intensity={0.3} />
        <Earth />
      </Canvas>
    </CanvasContainer>
  );
}

export default IntroEarth;