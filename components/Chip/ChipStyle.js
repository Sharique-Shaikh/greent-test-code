import styled from 'styled-components';

export const ChipContainer = styled.button`
  width: ${(props) => props.width};
  height: 4rem;
  border-radius: 6rem;
  padding: 0.8rem 1rem;
  background-color: #007f6224;
  border: none;
`;

export const ChipTitle = styled.h3`
  font-size: 1.6rem;
  font-weight: 700;
  color: ${(props) => props.theme.MikadoGreen};
`;
