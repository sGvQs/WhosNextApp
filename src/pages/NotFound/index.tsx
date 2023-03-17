import { StyledCanvasContainer } from './styled';
import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import { TypedText } from '../../components/common/TypedText';
import { SideButton } from '../../components/common/SideButton';
import { useNavigate } from 'react-router-dom';

export const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <StyledCanvasContainer>
          <Canvas camera={{ position: [0, 0, 5] }}>
            <Stars />
          </Canvas>
        </StyledCanvasContainer>
        <TypedText text={'404: NOT FOUND'} loop={false} />
        <SideButton text={'◀︎ Back'} onClick={() => navigate('/')} />
      </div>
    </div>
  );
};
