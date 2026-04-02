import { StyledButton } from '@/components/common/CommonStyle';
import {
  ButtonWrapper,
  FormInput,
  FormInputTitle,
  FormSelect,
  FormSplit,
  FormTextArea,
  FormWrapper,
  FormWrapperStyle,
  SubmitButton,
} from './ContactDetailStyle';
import { useState } from 'react';

const ContactForm = () => {
  const [selectedValue, setSelectedValue] = useState('');

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };
  return (
    <FormWrapperStyle>
      <form>
        {/* <div>
          <FormInputTitle>
            {' '}
            Subject <span style={{ color: '#e84d35' }}>*</span>{' '}
          </FormInputTitle>
          <FormSelect
            value={selectedValue}
            onChange={handleSelectChange}
            aria-placeholder='Choose your Subject'
            required
          >
            <option disabled value=''>
              Choose your Subject
            </option>
            <option>List Product</option>
            <option>Business Solution</option>
          </FormSelect>
        </div> */}

        <FormSplit>
          <div>
            <FormInputTitle>
              {' '}
              Name <span style={{ color: '#e84d35' }}>*</span>
            </FormInputTitle>
            <FormInput placeholder='Your Name...' required />
          </div>
          <div>
            <FormInputTitle>
              {' '}
              Email Address <span style={{ color: '#e84d35' }}>*</span>{' '}
            </FormInputTitle>
            <FormInput placeholder='Your Email...' required />
          </div>
        </FormSplit>

        <FormSplit>
          <div>
            <FormInputTitle>
              {' '}
              Company <span style={{ color: '#e84d35' }}>*</span>
            </FormInputTitle>
            <FormInput placeholder='Your Company Name...' required />
          </div>

          <div>
            <FormInputTitle>
              {' '}
              Phone Number <span style={{ color: '#e84d35' }}>*</span>
            </FormInputTitle>
            <FormInput placeholder='Your Phone Number...' required />
          </div>
        </FormSplit>

        <>
          <FormWrapper>
            <FormInputTitle>
              Message <span style={{ color: '#e84d35' }}>*</span>
            </FormInputTitle>
            <FormTextArea
              placeholder='Your Message...'
              required
              rows={4}
              cols={50}
            ></FormTextArea>
          </FormWrapper>
        </>

        <ButtonWrapper>
          <SubmitButton>Submit</SubmitButton>
        </ButtonWrapper>
      </form>
    </FormWrapperStyle>
  );
};

export default ContactForm;
