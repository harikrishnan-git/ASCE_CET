import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";

export default function Earth() {
  const earthRef = useRef();
  const { mouse, viewport } = useThree();

  const texture = useTexture("src/assets/earth.jpg");

  // Radius relative to screen width
  const radius = Math.min(viewport.width, viewport.height) * 0.45;

  // Rotation target
  const target = useRef({ x: 0, y: 0 });
  const lastTouch = useRef({ x: 0, y: 0 });
  const touching = useRef(false);

  useFrame(() => {
    if (!earthRef.current) return;

    if (!touching.current) {
      target.current.y = mouse.x * Math.PI;
      target.current.x = mouse.y * Math.PI * 0.3;
    }

    earthRef.current.rotation.y = THREE.MathUtils.lerp(
      earthRef.current.rotation.y,
      target.current.y,
      0.08
    );

    earthRef.current.rotation.x = THREE.MathUtils.lerp(
      earthRef.current.rotation.x,
      target.current.x,
      0.08
    );

    earthRef.current.rotation.y += 0.0015;
  });

  const onTouchStart = (e) => {
    touching.current = true;
    lastTouch.current.x = e.touches[0].clientX;
    lastTouch.current.y = e.touches[0].clientY;
  };

  const onTouchMove = (e) => {
    const dx = e.touches[0].clientX - lastTouch.current.x;
    const dy = e.touches[0].clientY - lastTouch.current.y;

    target.current.y += dx * 0.005;
    target.current.x += dy * 0.005;

    lastTouch.current.x = e.touches[0].clientX;
    lastTouch.current.y = e.touches[0].clientY;
  };

  const onTouchEnd = () => {
    touching.current = false;
  };

  return (
    <mesh
      ref={earthRef}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <sphereGeometry args={[radius, 64, 64]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
}
