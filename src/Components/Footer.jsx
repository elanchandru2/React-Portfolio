import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaTelegramPlane, FaWhatsapp, FaLinkedin, FaGithub, FaReact } from 'react-icons/fa';

// Define the rotate animation
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #282c34;
  color: white;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const LeftSection = styled.div`
  font-size: 1rem;
  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;

const CenterSection = styled.div`
  display: flex;
  align-items: center;
  font-size: 1rem;
  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
  svg {
    margin-left: 0.5rem;
    font-size: 1.5rem;
    animation: ${rotate} 5s linear infinite; /* Apply the rotate animation */
  }
`;

const IconContainer = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const Icon = styled.a`
  color: white;
  font-size: 1.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: #61dafb; /* React logo color */
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <LeftSection>
        www.Chandru.com
      </LeftSection>
      <CenterSection>
        Website made with <FaReact />
      </CenterSection>
      <IconContainer>
        <Icon href="http://t.me/Beekeeperchandru" target="_blank" rel="noopener noreferrer">
          <FaTelegramPlane />
        </Icon>
        <Icon href="https://wa.me/+918778622935" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp />
        </Icon>
        <Icon href="https://www.linkedin.com/in/chandru-e-113b8b2a2/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </Icon>
        <Icon href="https://github.com/elanchandru2" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </Icon>
      </IconContainer>
    </FooterContainer>
  );
};

export default Footer;
