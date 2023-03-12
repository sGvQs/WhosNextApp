import { StyledCanvasContainer, StyledTitle } from './styled';
import { Canvas } from '@react-three/fiber';
import { TitleMesh } from '../../components/TitleParts/TitleMesh';
import { Stars } from '@react-three/drei';
import { TitleTextArea } from '../../components/TitleParts/TitleTextarea';
import { TitleNameLists } from '../../components/TitleParts/TitleNameLists';
import { useStoreState } from '../../context';

export const Title = () => {
  const { nameList } = useStoreState();
  return (
    <div>
      <div>
        {nameList && <TitleNameLists />}
        <TitleTextArea />
        <StyledTitle>Task Navigator</StyledTitle>
        <StyledCanvasContainer>
          <Canvas camera={{ position: [0, 0, 5] }}>
            <TitleMesh />
            <Stars />
          </Canvas>
        </StyledCanvasContainer>
      </div>
    </div>
  );
};
