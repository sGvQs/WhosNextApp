import { Typography } from '../Typography';
import { StyledButton } from './styled';

type SideButtonProps = {
  text: string;
  onClick: () => void;
};

export const SideButton: React.VFC<SideButtonProps> = ({ text, onClick }) => {
  return (
    <StyledButton onClick={onClick}>
      <Typography text={text} />
    </StyledButton>
  );
};
