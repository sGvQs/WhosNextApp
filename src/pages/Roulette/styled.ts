import styled from 'styled-components';

export const StyledCanvasContainer = styled.div`
  height: 100vh;
  width: 100vw;
  position: fixed;
`;

export const StyledBackButton = styled.h1`
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-family: 'Franklin Gothic Medium', Arial, sans-serif;
  font-size: 55px;
  letter-spacing: 1px;
`;

export const StyledSwitchButton = styled.button`
  position: absolute;
  z-index: 100;
  top: 3%;
  right: 3%;
  opacity: 0.7;
  background: #343a40;
  padding: 5px;
  color: #0eff0e;
  font-weight: bold;
  :hover {
    cursor: pointer;
  }
`;
