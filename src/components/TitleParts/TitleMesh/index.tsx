import { useNavigate } from 'react-router-dom';
import { Box } from '../../common/Box';
import { useWidthSize } from '../../../hooks/useWindowSize';

export const TitleMesh = () => {
  const width = useWidthSize();
  const navigate = useNavigate();
  return (
    <>
      <Box
        sizeX={1}
        sizeY={1}
        sizeZ={1}
        positionX={width > 500 ? 2 : 1.5}
        positionY={0}
        positionZ={-3}
        verticalRotation={0.01}
        asideRotation={0}
        text={'Roulette'}
        color={'green'}
        distanceFactor={width > 500 ? 10 : 7}
        onClick={() => navigate('/roulette')}
      />
      <Box
        color={'pink'}
        sizeX={1}
        sizeY={1}
        sizeZ={1}
        positionX={width > 500 ? -2 : -1.5}
        positionY={0}
        positionZ={-3}
        verticalRotation={0.01}
        asideRotation={0}
        text={'Amida Lottery'}
        distanceFactor={width > 500 ? 10 : 7}
        onClick={() => navigate('/amidaLottery')}
      />
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[0, 10, -10]} />
    </>
  );
};
