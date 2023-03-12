import { useFrame } from '@react-three/fiber';
import React from 'react';
import { Mesh } from 'three';
import { useSpring, config, animated } from '@react-spring/three';
import { StyledText } from './styled';

type BoxProps = {
  sizeX: number;
  sizeY: number;
  sizeZ: number;
  positionX: number;
  positionY: number;
  positionZ: number;
  verticalRotation: number;
  asideRotation: number;
  text: string;
  color: string;
  distanceFactor: number;
  onClick: () => void;
};

export const Box: React.VFC<BoxProps> = ({
  sizeX,
  sizeY,
  sizeZ,
  positionX,
  positionY,
  positionZ,
  verticalRotation,
  asideRotation,
  text,
  color,
  distanceFactor,
  onClick,
}) => {
  const [isHover, setIsHover] = React.useState<boolean>(false);
  const { scale } = useSpring({
    scale: isHover ? 2 : 1,
    config: config.slow,
  });
  const cubeRef = React.useRef<Mesh>(null);
  useFrame(() => {
    const cube = cubeRef.current;
    if (!cube) return;
    cube.rotation.x += verticalRotation;
    cube.rotation.y += asideRotation;
  });

  return (
    <animated.mesh
      ref={cubeRef}
      position={[positionX, positionY, positionZ]}
      onPointerEnter={() => setIsHover(true)}
      onPointerLeave={() => setIsHover(false)}
      scale={scale}
      onClick={onClick}
    >
      <boxGeometry args={[sizeX, sizeY, sizeZ]} />
      <meshStandardMaterial color={color} roughness={0} />
      <StyledText center distanceFactor={distanceFactor}>
        {text}
      </StyledText>
    </animated.mesh>
  );
};
