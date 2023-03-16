import React from 'react';
import { useStoreState } from '../../../context';
import { StyledTextarea } from './styled';

export const TitleTextArea: React.VFC = () => {
  const { nameList, setNameList } = useStoreState();
  const [currentValue, setCurrentValue] = React.useState<string>();

  const onKeyPress = () => {
    if (!currentValue) return;
    if (!nameList) {
      setNameList([currentValue.replace(/\n/g, '')]);
      setCurrentValue('');
    } else {
      setNameList([...nameList, currentValue.replace(/\n/g, '')]);
      setCurrentValue('');
    }
  };

  const kermit = ['goto', 'saito', 'nakatsuka', 'nishihara', 'hirai'];
  const rosita = ['sato', 'watanabe', 'kuwata', 'goshima', 'kaino'];

  React.useEffect(() => {
    if (currentValue !== 'kermit-dev') return;
    if (!nameList) {
      setNameList(kermit);
      setCurrentValue('');
    } else {
      setNameList([...nameList, ...kermit]);
      setCurrentValue('');
    }
  }, [currentValue]);

  React.useEffect(() => {
    if (currentValue !== 'rosita-dev') return;
    if (!nameList) {
      setNameList(rosita);
      setCurrentValue('');
    } else {
      setNameList([...nameList, ...rosita]);
      setCurrentValue('');
    }
  }, [currentValue]);

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
