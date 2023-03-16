import { StyledCanvasContainer, StyledSwitchButton } from './styled';
import { Canvas } from '@react-three/fiber';
import React from 'react';
import { useStoreState } from '../../context';
import { SideButton } from '../../components/common/SideButton';
import { useNavigate } from 'react-router-dom';
import { TypedText } from '../../components/common/TypedText';
import { RouletteMesh } from '../../components/RouletteParts/RouletteMesh';
import { useResultSentences } from '../../hooks/useResultSentences';

export const Roulette = () => {
  const [isRank, setIsRank] = React.useState<boolean>(false);
  const [finishedRunnerList, setFinishedRunnerList] = React.useState<
    string[] | undefined
  >();
  const [resultSentence, setResultSentence] = React.useState<
    string | undefined
  >();
  const { nameList } = useStoreState();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!finishedRunnerList) return;
    if (nameList?.length !== finishedRunnerList?.length) return;
    setResultSentence(useResultSentences(finishedRunnerList, isRank));
  }, [finishedRunnerList]);

  return (
    <StyledCanvasContainer>
      <Canvas camera={{ position: [0, 0, 15] }}>
        <RouletteMesh
          nameList={nameList}
          finishedRunnerList={finishedRunnerList}
          setFinishedRunnerList={setFinishedRunnerList}
        />
      </Canvas>
      {nameList ? (
        <TypedText
          text={resultSentence ? resultSentence : 'Currently measuring...'}
          loop={false}
        />
      ) : (
        <TypedText text={'ERROR: THERE IS NO PLAYER'} loop={false} />
      )}
      <SideButton text={'BACK TO TITLE'} onClick={() => navigate('/')} />
      {!resultSentence && (
        <StyledSwitchButton
          onClick={() => {
            setIsRank(!isRank);
          }}
        >
          {isRank ? 'Rank' : 'Team'}
        </StyledSwitchButton>
      )}
    </StyledCanvasContainer>
  );
};
