import React from 'react';
import { useStoreState } from '../../../context';
import { StyledTextarea } from './styled';

export const TitleTextArea: React.VFC = () => {
  const { nameList, setNameList } = useStoreState();
  const [currentValue, setCurrentValue] = React.useState<string>();
  return (
    <StyledTextarea
      value={currentValue}
      placeholder={'ENTER NAME $'}
      onChange={(e) => setCurrentValue(e.target.value.replace(/\n/g, ''))}
      onKeyPress={(e) => {
        if (e.key !== 'Enter') return;
        if (!currentValue) return;
        if (!nameList) {
          setNameList([currentValue.replace(/\n/g, '')]);
          setCurrentValue('');
        } else {
          setNameList([...nameList, currentValue.replace(/\n/g, '')]);
          setCurrentValue('');
        }
      }}
    />
  );
};
