import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';
import React from 'react';
import { StyledText } from './styled';

type RotationBoxProps = {
  name: string;
  finishedRunnerList: string[] | undefined;
  setFinishedRunnerList: React.Dispatch<
    React.SetStateAction<string[] | undefined>
  >;
};

export const RotationBox: React.VFC<RotationBoxProps> = ({
  name,
  finishedRunnerList,
  setFinishedRunnerList,
}): JSX.Element => {
  const meshRef = React.useRef<Mesh>(null);

  const [rotationSpeed, setRotationSpeed] = React.useState(
    Math.random() * 2 + 8
  );

  const [isFinished, setIsFinished] = React.useState<boolean>(false);

  const decelerationSpeed = Math.random() * 0.001 + 0.003;

  useFrame((state) => {
    if (isFinished) return;
    if (rotationSpeed < 5) {
      finishedRunnerList
        ? setFinishedRunnerList([...finishedRunnerList, name])
        : setFinishedRunnerList([name]);
      setIsFinished(true);
    }
    setRotationSpeed((current) => current - decelerationSpeed);
    const elapsedTime = state.clock.getElapsedTime();
    const radius = 10;
    const angle = elapsedTime * rotationSpeed;

    if (!meshRef.current) return;
    meshRef.current.position.x = Math.cos(angle) * radius;
    meshRef.current.position.z = Math.sin(angle) * radius;
    meshRef.current.rotation.z = -5;
  });

  return (
    <mesh ref={meshRef}>
      <boxBufferGeometry />
      <meshStandardMaterial />
      <StyledText center distanceFactor={8}>
        {name}
      </StyledText>
    </mesh>
  );
};
