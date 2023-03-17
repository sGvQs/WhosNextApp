import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import Typed from 'typed.js';

const StyledContainer = styled.div`
  min-width: 300px;
  display: flex;
  flex-grow: 1;
  position: absolute;
  font-size: 16px;
  font-weight: bold;
  opacity: 0.7;
  background: #343a40;
  color: #0eff0e;
  top: 20%;
  left: 50%;
  transform: translate(-50%, 0);
  padding: 10px;
  font-family: 'Franklin Gothic Medium', Arial, sans-serif;
`;

type TypedText = {
  text: string;
  loop: boolean;
};

export const TypedText: React.VFC<TypedText> = ({ text, loop }) => {
  const typeTarget = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (typeTarget.current) {
      const typed = new Typed(typeTarget.current, {
        strings: [text],
        typeSpeed: 20,
        backSpeed: 3,
        loop: loop,
      });

      return () => {
        typed.destroy();
      };
    }
  }, [text]);

  return (
    <StyledContainer>
      <span ref={typeTarget} />
    </StyledContainer>
  );
};
