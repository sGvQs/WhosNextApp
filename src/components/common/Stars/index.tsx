import { useFrame } from '@react-three/fiber';
import React from 'react';
import * as random from 'maath/random/dist/maath-random.cjs';
import { Points, PointMaterial } from '@react-three/drei';

export const MovingStars = (props: any) => {
  const ref = React.useRef<any>();
  const [sphere] = React.useState(() =>
    random.inSphere(new Float32Array(5000), { radius: 1.5 })
  );
  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });
  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        positions={sphere}
        stride={3}
        frustumCulled={false}
        {...props}
      >
        <PointMaterial
          transparent
          color="#ffa0e0"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};
