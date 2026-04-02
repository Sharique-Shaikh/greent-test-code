import React from 'react';
import {
  NavBarContainer,
  NavIcon,
  NavItem,
  NavList,
  NavLink,
  ActiveIndicator,
  ContactLink,
} from './NavBarStyle';

import { BsSun, BsSunFill } from 'react-icons/bs';
import { usePathname } from 'next/navigation';

export default function NavBar({ sideMenu, setSideMenu }) {
  const pathname = usePathname();
  // console.log(pathname, 'pathname');
  return (
    <NavBarContainer>
      <NavList sideMenu={sideMenu}>
        <NavItem onClick={() => setSideMenu(false)}>
          <NavLink href='/solutions'>Solutions</NavLink>
          {pathname === '/solutions/' && <ActiveIndicator />}
        </NavItem>
        <NavItem onClick={() => setSideMenu(false)}>
          <NavLink href='/crm-and-loyalty'>CRM & Loyalty</NavLink>
          {pathname === '/crm-and-loyalty/' && <ActiveIndicator />}
        </NavItem>
        {/* <NavItem onClick={() => setSideMenu(false)}>
          <NavLink href='/for-products'>For Products</NavLink>
          {pathname === '/for-products/' && <ActiveIndicator />}
        </NavItem> */}
        <NavItem onClick={() => setSideMenu(false)}>
          <NavLink href='/about-us'>About Us</NavLink>
          {pathname === '/about-us/' && <ActiveIndicator />}
        </NavItem>

        {/* <NavItem onClick={() => setSideMenu(false)}>
          <NavLink href='/our-team'>Resources</NavLink>
          {pathname === '/our-team' && <ActiveIndicator />}
        </NavItem> */}

        <NavItem onClick={() => setSideMenu(false)}>
          <ContactLink href='/contact-us'>Contact Us</ContactLink>
        </NavItem>
      </NavList>
    </NavBarContainer>
  );
}
