import { StyledTypography } from './styled';

type TypographyProps = {
  text: string;
  onClick?: () => void;
};

export const Typography: React.VFC<TypographyProps> = ({ text, onClick }) => {
  return <StyledTypography onClick={onClick}>{text}</StyledTypography>;
};
