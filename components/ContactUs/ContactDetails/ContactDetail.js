import { Section, Container } from '@/components/common/CommonStyle';
import Image from 'next/image';
import {
  ContactInfo,
  ContactInfoFlex,
  IconWrapper,
  Title,
} from './ContactDetailStyle';
import Location from '../../../public/assets/icons/location.svg';
import Mail from '../../../public/assets/icons/mail.svg';
import Phone from '../../../public/assets/icons/phone.svg';

const ContactDetail = () => {
  return (
    <>
      <div>
        <Title>Get in touch</Title>

        <p>
          Whether you have questions about our products or services, seek
          assistance with an issue.
        </p>

        <ContactInfo>
          {/* <ContactInfoFlex>
            <IconWrapper>
              <Image src={Mail} height={25} width={25} />
            </IconWrapper>

            <a>
              Bizzhub (Aspire), 1st floor Sony World Signal, 100 Feet Rd,
              Koramangala, Bengaluru, Karnataka - 560095
            </a>
          </ContactInfoFlex> */}

          <ContactInfoFlex>
            <IconWrapper>
              <Image src={Location} height={25} width={25} />
            </IconWrapper>
            <div>
                <a href='javascript:void(0);'> 
                <strong>Singapore Office: </strong><br />
                A3, Shenton Wy, #19-02, Shenton House, Singapore - 068805
              </a>
            </div>
          </ContactInfoFlex>
          <ContactInfoFlex>
            <IconWrapper>
              <Image src={Location} height={25} width={25} />
            </IconWrapper>
            <div>
                <a href='javascript:void(0);'>
                <strong>Malaysia Office: </strong><br />
                B135, Megan Avenue II, 12, Jalan Yap Kwan Seng, 50450 Kuala Lumpur W.P. Kuala Lumpur Malaysia
                </a>
            </div>
          </ContactInfoFlex>

          <ContactInfoFlex>
            <IconWrapper>
              <Image src={Mail} height={25} width={25} />
            </IconWrapper>

            <a href='mailto:sales@thegreentern.com'>sales@thegreentern.com</a>
          </ContactInfoFlex>

          <ContactInfoFlex>
            <IconWrapper>
              <Image src={Phone} height={25} width={25} />
            </IconWrapper>

            <a href='tel:++65 9050 2059'>+65 9050 2059</a>
          </ContactInfoFlex>
        </ContactInfo>
      </div>
    </>
  );
};

export default ContactDetail;
