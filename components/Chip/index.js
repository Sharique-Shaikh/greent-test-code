import { ChipContainer, ChipTitle } from './ChipStyle';

const Chip = ({ title = 'Technology', width = '12rem' }) => {
  return (
    <ChipContainer width={width}>
      <ChipTitle>{title}</ChipTitle>
    </ChipContainer>
  );
};

export default Chip;
