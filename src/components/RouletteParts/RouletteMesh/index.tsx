import { OrbitControls, Stars } from '@react-three/drei';
import { RotationBox } from '../../common/RotationBox';

type RouletteMeshProps = {
  nameList: string[] | undefined;
  finishedRunnerList: string[] | undefined;
  setFinishedRunnerList: React.Dispatch<
    React.SetStateAction<string[] | undefined>
  >;
};

export const RouletteMesh: React.VFC<RouletteMeshProps> = ({
  nameList,
  finishedRunnerList,
  setFinishedRunnerList,
}) => {
  return (
    <>
      <OrbitControls enableZoom={false} />
      <>
        {nameList &&
          nameList.map((name, index) => {
            return (
              <RotationBox
                key={'key: ' + index + name}
                name={name}
                finishedRunnerList={finishedRunnerList}
                setFinishedRunnerList={setFinishedRunnerList}
              />
            );
          })}
      </>
      <Stars />
      <ambientLight intensity={0.1} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[0, 10, -10]} />
    </>
  );
};
