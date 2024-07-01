import React, { useState } from 'react';
import styled, { ThemeProvider, keyframes } from 'styled-components';
import { Outlet, Link } from "react-router-dom";
import "./About_me"
import "./Project"
import "./Contact"
import "./Hero"

const lightTheme = {
  background: '#fff',
  color: '#000'
};

const darkTheme = {
  background: '#000',
  color: '#fff'
};

const NavbarContainer = styled.nav`
  position: fixed; /* Make the navbar fixed */
  top: 0; /* Position at the top */
  left: 0;
  right: 0;
  z-index: 1000; /* Ensure it's above other content */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
  width: 100%; /* Occupy full width */

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 0.5rem;
  }
`;

const Logo = styled.div`
  font-size: 2.5rem;
  font-weight: bold;

  @media screen and (max-width: 768px) {
    margin-bottom: 0.5rem;
  }
`;

const hoverAnimation = keyframes`
  from {
    transform: scale(1);
    color: inherit;
  }
  to {
    transform: scale(1.1);
    color: red;
  }
`;

const fadeInAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideInAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  animation: ${({ isOpen }) => (isOpen ? fadeInAnimation : 'none')} 0.5s forwards;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    width: 100%;
    margin-top: 1rem;
    animation: ${({ isOpen }) => (isOpen ? slideInAnimation : 'none')} 0.5s forwards;
  }

  a {
    margin: 0 1rem;
    color: ${({ theme }) => theme.color};
    text-decoration: none;
    transition: transform 0.3s, color 0.3s;

    &:hover {
      animation: ${hoverAnimation} 0.3s forwards;
    }

    @media screen and (max-width: 768px) {
      margin: 0.5rem;
    }
  }
`;

const ToggleSwitch = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
  margin-left: 1rem;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${({ theme }) => theme.color};
    transition: 0.4s;
    border-radius: 34px;

    &::before {
      position: absolute;
      content: "";
      height: 26px;
      width: 26px;
      left: 4px;
      bottom: 4px;
      background-color: ${({ theme }) => theme.background};
      transition: 0.4s;
      border-radius: 50%;
    }
  }

  input:checked + span {
    background-color: ${({ theme }) => theme.color};
  }

  input:checked + span::before {
    transform: translateX(26px);
  }

  @media screen and (max-width: 768px) {
    margin-left: 0;
    margin-top: 0.5rem;
  }
`;

const MenuIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    cursor: pointer;
    font-size: 2rem;
    transition: transform 0.3s;

    &:hover {
      animation: ${hoverAnimation} 0.3s forwards;
    }

    ${({ isOpen }) =>
      isOpen &&
      `
      transform: rotate(90deg);
    `}
  }
`;

const Navbar = () => {
  const [theme, setTheme] = useState(lightTheme);
  const [isOpen, setIsOpen] = useState(false);

  const toggleTheme = () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <ThemeProvider theme={theme}>
      <NavbarContainer>
        <Logo>
          {"<Chandru/>"}
        </Logo>
        <MenuIcon isOpen={isOpen} onClick={toggleMenu}>
          ☰
        </MenuIcon>
        <NavLinks isOpen={isOpen}>
          <a href="/">Home</a>
          <a href="#about">About Me</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contacts</a>
        </NavLinks>
        <ToggleSwitch>
          <input type="checkbox" onChange={toggleTheme} />
          <span />
        </ToggleSwitch>
      </NavbarContainer>
    </ThemeProvider>
  );
};

export default Navbar;
