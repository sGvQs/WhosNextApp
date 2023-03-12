import { StyledNameList, StyledNameListWrap } from './styled';
import React from 'react';
import { useStoreState } from '../../../context';

export const TitleNameLists: React.VFC = () => {
  const { nameList, setNameList } = useStoreState();
  return (
    <>
      {nameList && (
        <StyledNameListWrap>
          <>
            {nameList.map((name, index) => {
              return (
                <StyledNameList
                  key={'key:' + name + index}
                  onClick={() => {
                    setNameList(
                      nameList.length === 1
                        ? undefined
                        : nameList.filter(
                            (filteredName) => filteredName !== name
                          )
                    );
                  }}
                >
                  {name}
                </StyledNameList>
              );
            })}
          </>
        </StyledNameListWrap>
      )}
    </>
  );
};
