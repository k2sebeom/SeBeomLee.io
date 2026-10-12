import React, { useMemo, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import {
  Environment,
  Float,
  Lightformer,
  PerformanceMonitor,
  Sparkles,
} from '@react-three/drei';
import * as THREE from 'three';

type ShapeKind =
  | 'torusKnot'
  | 'icosahedron'
  | 'octahedron'
  | 'torus'
  | 'sphere'
  | 'dodecahedron';

interface ShapeConfig {
  kind: ShapeKind;
  // x is a fraction of half the viewport width, so layouts adapt to aspect ratio
  x: number;
  y: number;
  z: number;
  scale: number;
  tint: string;
  // How fast the shape drifts upward relative to page scroll
  parallax: number;
  mobile: boolean;
}

const SHAPES: ShapeConfig[] = [
  {
    kind: 'torusKnot',
    x: 0.55,
    y: 0.2,
    z: 0,
    scale: 1.25,
    tint: '#d9fff0',
    parallax: 1,
    mobile: true,
  },
  {
    kind: 'icosahedron',
    x: -0.75,
    y: 2.4,
    z: -2,
    scale: 0.9,
    tint: '#e0fbff',
    parallax: 1.4,
    mobile: true,
  },
  {
    kind: 'octahedron',
    x: 0.95,
    y: -2.8,
    z: -1,
    scale: 0.7,
    tint: '#efe6ff',
    parallax: 1.8,
    mobile: false,
  },
  {
    kind: 'torus',
    x: -0.4,
    y: -3.4,
    z: 1,
    scale: 0.75,
    tint: '#d9fff0',
    parallax: 1.2,
    mobile: true,
  },
  {
    kind: 'sphere',
    x: 0.2,
    y: 3.8,
    z: -3,
    scale: 0.55,
    tint: '#e0fbff',
    parallax: 2.2,
    mobile: false,
  },
  {
    kind: 'dodecahedron',
    x: -0.95,
    y: -0.6,
    z: -4,
    scale: 0.8,
    tint: '#efe6ff',
    parallax: 0.8,
    mobile: false,
  },
];

// Vertical span shapes wrap through, so they keep flowing past for the whole page
const WRAP = 16;

const Geometry: React.FC<{ kind: ShapeKind }> = ({ kind }) => {
  switch (kind) {
    case 'torusKnot':
      return <torusKnotGeometry args={[1, 0.34, 220, 36]} />;
    case 'icosahedron':
      return <icosahedronGeometry args={[1, 0]} />;
    case 'octahedron':
      return <octahedronGeometry args={[1, 0]} />;
    case 'torus':
      return <torusGeometry args={[0.9, 0.36, 48, 120]} />;
    case 'sphere':
      return <sphereGeometry args={[1, 64, 64]} />;
    case 'dodecahedron':
      return <dodecahedronGeometry args={[1, 0]} />;
  }
};

const GlassShape: React.FC<{ config: ShapeConfig; animate: boolean }> = ({
  config,
  animate,
}) => {
  const ref = useRef<THREE.Group>(null);
  const { viewport } = useThree();

  useFrame((state, delta) => {
    const g = ref.current;
    if (!g) return;
    const scrollWorld = (window.scrollY / window.innerHeight) * 4;
    const raw = config.y + scrollWorld * config.parallax;
    g.position.y =
      THREE.MathUtils.euclideanModulo(raw + WRAP / 2, WRAP) - WRAP / 2;
    g.position.x = (config.x * viewport.width) / 2;
    if (animate) {
      g.rotation.x += delta * 0.12 * config.parallax;
      g.rotation.y += delta * 0.18;
      // Shapes lean toward the cursor
      g.rotation.z = THREE.MathUtils.lerp(
        g.rotation.z,
        state.pointer.x * 0.35,
        0.05
      );
    }
  });

  const scale = config.scale * Math.min(1, viewport.width / 9);

  return (
    <group ref={ref} position={[0, config.y, config.z]}>
      <Float
        enabled={animate}
        speed={1.4}
        rotationIntensity={0.4}
        floatIntensity={0.8}
      >
        <mesh scale={scale}>
          <Geometry kind={config.kind} />
          <meshPhysicalMaterial
            color={config.tint}
            transmission={1}
            thickness={1.4}
            roughness={0.06}
            ior={1.45}
            dispersion={6}
            iridescence={0.7}
            iridescenceIOR={1.3}
            clearcoat={1}
            clearcoatRoughness={0.05}
            envMapIntensity={1.2}
          />
        </mesh>
      </Float>
    </group>
  );
};

const backdropVertex = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const backdropFragment = /* glsl */ `
  uniform float uTime;
  uniform float uScroll;
  uniform float uAspect;
  varying vec2 vUv;

  float glow(vec2 uv, vec2 center, float radius) {
    float d = distance(uv, center);
    return pow(smoothstep(radius, 0.0, d), 1.6);
  }

  void main() {
    vec2 uv = vec2(vUv.x * uAspect, vUv.y);
    float t = uTime * 0.12;
    float s = uScroll;
    vec2 c1 = vec2((0.78 + 0.08 * sin(t)) * uAspect, 0.62 + 0.1 * cos(t * 1.3) - s * 0.15);
    vec2 c2 = vec2((0.18 + 0.1 * cos(t * 0.8)) * uAspect, 0.35 + 0.12 * sin(t) + s * 0.1);
    vec2 c3 = vec2((0.5 + 0.2 * sin(t * 0.6 + s * 2.0)) * uAspect, 0.08 + 0.1 * sin(t * 1.1));
    vec3 color = vec3(0.02, 0.031, 0.039);
    color += vec3(0.09, 0.64, 0.29) * glow(uv, c1, 0.55) * 0.55;
    color += vec3(0.03, 0.57, 0.70) * glow(uv, c2, 0.5) * 0.5;
    color += vec3(0.49, 0.23, 0.93) * glow(uv, c3, 0.45) * 0.4;
    gl_FragColor = vec4(color, 1.0);
  }
`;

// Opaque animated gradient behind the glass. It must be opaque, since
// transmission only refracts opaque objects.
const Backdrop: React.FC = () => {
  const { camera, size } = useThree();
  const viewport = useThree(state => state.viewport);
  const depth = -10;
  const { width, height } = viewport.getCurrentViewport(camera, [0, 0, depth]);
  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uScroll: { value: 0 },
      uAspect: { value: 1 },
    }),
    []
  );

  useFrame((_, delta) => {
    uniforms.uTime.value += delta;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    uniforms.uScroll.value = max > 0 ? window.scrollY / max : 0;
    uniforms.uAspect.value = size.width / size.height;
  });

  return (
    <mesh position={[0, 0, depth]} scale={[width * 1.3, height * 1.3, 1]}>
      <planeGeometry />
      <shaderMaterial
        vertexShader={backdropVertex}
        fragmentShader={backdropFragment}
        uniforms={uniforms}
        depthWrite={false}
      />
    </mesh>
  );
};

const CameraRig: React.FC<{ animate: boolean }> = ({ animate }) => {
  useFrame(state => {
    if (!animate) return;
    const { camera, pointer } = state;
    camera.position.x = THREE.MathUtils.lerp(
      camera.position.x,
      pointer.x * 0.8,
      0.04
    );
    camera.position.y = THREE.MathUtils.lerp(
      camera.position.y,
      pointer.y * 0.5,
      0.04
    );
    camera.lookAt(0, 0, 0);
  });
  return null;
};

const GlassScene: React.FC = () => {
  const reducedMotion = useMemo(
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    []
  );
  const isMobile = window.innerWidth < 768;
  const shapes = isMobile ? SHAPES.filter(s => s.mobile) : SHAPES;
  const [dpr, setDpr] = React.useState(1.5);

  return (
    <Canvas
      // Canvas sets inline position: relative, so fixed positioning must be inline too
      style={{ position: 'fixed', inset: 0, zIndex: -1, pointerEvents: 'none' }}
      dpr={dpr}
      camera={{ position: [0, 0, 12], fov: 35 }}
      gl={{ antialias: true, powerPreference: 'high-performance' }}
      eventSource={document.getElementById('root')!}
      eventPrefix="client"
    >
      <PerformanceMonitor
        onDecline={() => setDpr(1)}
        onIncline={() => setDpr(1.5)}
      />
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} />

      <Backdrop />
      {shapes.map((s, i) => (
        <GlassShape key={i} config={s} animate={!reducedMotion} />
      ))}
      {!isMobile && (
        <Sparkles
          count={70}
          scale={[16, 10, 6]}
          size={2.2}
          speed={0.3}
          opacity={0.5}
          color="#86efac"
        />
      )}

      <Environment resolution={256}>
        <Lightformer
          form="rect"
          intensity={6}
          color="#ffffff"
          position={[0, 5, -5]}
          scale={[10, 2, 1]}
        />
        <Lightformer
          form="rect"
          intensity={4}
          color="#4ade80"
          position={[-6, 0, 2]}
          rotation-y={Math.PI / 2}
          scale={[8, 3, 1]}
        />
        <Lightformer
          form="rect"
          intensity={4}
          color="#22d3ee"
          position={[6, -1, 2]}
          rotation-y={-Math.PI / 2}
          scale={[8, 3, 1]}
        />
        <Lightformer
          form="ring"
          intensity={4}
          color="#a78bfa"
          position={[0, -4, 4]}
          scale={3}
        />
      </Environment>

      <CameraRig animate={!reducedMotion} />
    </Canvas>
  );
};

export default GlassScene;
