import styled from 'styled-components';

export const StyledNameListWrap = styled.div`
  position: absolute;
  z-index: 100;
  top: 5%;
  right: 5%;
  opacity: 0.7;
  background: #343a40;
  padding: 5px;
`;

export const StyledNameList = styled.p`
  color: #0eff0e;
  font-size: 10px;
  z-index: 200;

  :hover {
    cursor: pointer;
  }
`;
