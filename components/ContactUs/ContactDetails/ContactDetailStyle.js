import { device } from '@/styles/theme';
import styled from 'styled-components';

export const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  text-align: center;
  row-gap: 1rem;
  margin-top: 3rem;

  @media ${device.tablet} {
    grid-template-columns: repeat(2, 1fr);
    // align-items: center;

    column-gap: 9.6rem;
    text-align: left;
  }
`;

export const Title = styled.h3`
  line-height: 1.5;
  font-weight: 500;
  margin-bottom: 0.85rem;
  color: ${(props) => props.theme.MikadoGreen};
`;

export const IconWrapper = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 50px;
  border: 1px solid #000;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContactInfo = styled.div`
  margin-top: 1.8rem;
`;
export const ContactInfoFlex = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2.5rem;
  gap: 1.3rem;

  a {
    /* margin-left: 1.3rem; */
    font-size: 1.6rem;
    cursor: pointer;
  }
`;

// Form style

export const FormWrapperStyle = styled.div`
    padding: 2rem 3rem;
    border-radius: 1rem;
    width: 100%;
    background-color: #f0f5f0;

`;
export const FormInputTitle = styled.h3`
  font-weight: 600;
  font-size: 1.4rem;
  padding-top: 0.8rem;
`;

export const FormInput = styled.input`
  padding: 1rem 1.6rem;
  border: 1px solid #1b1c1e;
  margin-top: 0.8rem;
  border-radius: 1rem;
`;

export const FormSelect = styled.select`
  padding: 1rem 1rem;
  width: 100%;
  border: 1px solid #1b1c1e;
  margin-top: 0.8rem;
  border-radius: 0.8rem;
`;

export const FormTextArea = styled.input`
  padding: 1rem 1.6rem;
  border: 1px solid #1b1c1e;
  margin-top: 0.8rem;
  width: 100%;
  border-radius: 1rem;
  height: 100px;
`;

export const FormSplit = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2rem;
  margin-top: 1rem;

  input {
    width: 100%;
  }

  @media ${device.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const FormWrapper = styled.div`
  margin-top: 1rem;
`;

export const SubmitButton = styled.button`
  background-color: #000;
  color: #fff;
  font-weight: 600;
  font-size: 1.2rem;
  padding: 1rem 2rem;
  text-align: center;
  transition: 0.3s;
  outline: none;
  border: none;
  cursor: pointer;
  border-radius: 1.2rem;

  &:hover {
    background-color: transparent;
    color: #000;
    border: 1px solid #000;
  }

  @media ${device.tablet} {
    font-size: 1.6rem;
    padding: 1.3rem 2.4rem;
  }
`;

export const ButtonWrapper = styled.div`
  padding-top: 3rem;
  display: flex;
  justify-content: end;
`;
