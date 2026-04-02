import { Container } from '../common/CommonStyle';
import React, { useState } from 'react';
import {
  FlexContainer,
  Hamburger,
  HeaderContainer,
  HeaderTitle,
  Wrapper,
} from './HeaderStyle';
import { IconContext } from 'react-icons';
import { GiHamburgerMenu } from 'react-icons/gi';
import NavBar from '../NavBar';
import Image from 'next/image';
import Logo from '../../public/assets/images/GreenTernNew.svg';
import { NavItem, NavLink } from '../NavBar/NavBarStyle';
import { ContactLink } from './HeaderStyle';
import { useRouter } from 'next/navigation';

export default function Header({ theme }) {
  const [sideMenu, setSideMenu] = useState(false);

  return (
    <Wrapper>
      <Container>
        <HeaderContainer>
          <HeaderTitle href='/'>
            <Image src={Logo} height={180} width={180} alt='logo' />
          </HeaderTitle>

          <FlexContainer>
            <div>
              <NavBar
                theme={theme}
                sideMenu={sideMenu}
                setSideMenu={setSideMenu}
              />
            </div>

            <NavItem onClick={() => setSideMenu(false)}>
              <ContactLink href='/contact-us'>Contact Us</ContactLink>
            </NavItem>
          </FlexContainer>

          <IconContext.Provider value={{ color: '#fff', size: '30px' }}>
            <Hamburger onClick={() => setSideMenu(!sideMenu)}>
              <GiHamburgerMenu />
            </Hamburger>
          </IconContext.Provider>
        </HeaderContainer>
      </Container>
    </Wrapper>
  );
}
