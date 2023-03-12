import styled from 'styled-components';

export const StyledTextarea = styled.textarea`
  position: absolute;
  resize: none;
  width: 300px;
  height: 20vh;
  z-index: 2000;
  bottom: 0%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.7;
  background: #343a40;
  color: #0eff0e;
  padding: 10px;
  border: 0;

  ::placeholder {
    color: #0eff0e;
  }

  :focus {
    color: #0eff0e;
    background: #343a40;
    border: 0;
    outline: none;
  }
`;
