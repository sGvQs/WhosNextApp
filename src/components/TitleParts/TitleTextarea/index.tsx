import React from 'react';
import { useStoreState } from '../../../context';
import { StyledTextarea } from './styled';

export const TitleTextArea: React.VFC = () => {
  const { nameList, setNameList } = useStoreState();
  const [currentValue, setCurrentValue] = React.useState<string>();

  const onKeyPress = () => {
    setNameList(nameListSetter());
    setCurrentValue('');
  };

  const nameListSetter = () => {
    if (!nameList) {
      switch (currentValue) {
        case 'kermit-dev':
          return kermit;
        case 'rosita-dev':
          return rosita;
        case undefined:
          return;
        default:
          return [currentValue.replace(/\n/g, '')];
      }
    } else {
      switch (currentValue) {
        case 'kermit-dev':
          return [...nameList, ...kermit];
        case 'rosita-dev':
          return [...nameList, ...rosita];
        case undefined:
          return;
        default:
          return [...nameList, currentValue.replace(/\n/g, '')];
      }
    }
  };

  const kermit = ['goto', 'saito', 'nakatsuka', 'nishihara', 'hirai'];
  const rosita = ['sato', 'watanabe', 'kuwata', 'goshima', 'kaino'];

  return (
    <StyledTextarea
      value={currentValue}
      placeholder={'ENTER NAME $'}
      onChange={(e) => setCurrentValue(e.target.value.replace(/\n/g, ''))}
      onKeyPress={(e) => {
        if (e.key !== 'Enter') return;
        onKeyPress();
      }}
    />
  );
};
