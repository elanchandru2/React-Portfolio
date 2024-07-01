import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { useSpring, animated } from 'react-spring';
import { Element } from 'react-scroll';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPhp, FaDatabase } from 'react-icons/fa';

import myImage from '../assets/Chandru.png';

const AboutMeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
  margin: 50px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
    align-items: flex-start;
    margin: 100px;
  }
`;

const ContentWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
    align-items: flex-start;
  }
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 20px;
`;

const Content = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  text-align: justify;
`;

const SkillsHeading = styled.h3`
  font-size: 1.8rem;
  font-weight: 500;
  margin-top: 20px;
`;

const SkillsIcons = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  margin-top: 10px;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const Icon = styled.a`
  font-size: 2rem;
  transition: all 0.3s ease;
  color: inherit;
  position: relative;

  &:hover {
    transform: scale(1.2);
    color: #fff;
    border-radius: 50%;
  }

  &:hover::before {
    content: attr(title);
    position: absolute;
    top: -30px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #000;
    color: #fff;
    padding: 5px 10px;
    border-radius: 5px;
    font-size: 0.6rem;
    white-space: nowrap;
    animation: ${addSAnimation} 0.3s ease forwards;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const iconsStyle = {
  html: { color: '#DD4B25' },
  css: { color: '#254BDF' },
  javascript: { color: '#F7E025' },
  react: { color: '#85DCFA' },
  php: { color: '#080808' },
  mysql: { color: '#E46C00' },
};

const Image = styled.img`
  width: 400px;
  height: 400px;
  object-fit: cover;
  background: #208b71;
  border-radius: 50%;
  align-self: center;
  margin-top: 20px;
  box-shadow: inset 17px 17px 34px #1b7660, inset -17px -17px 34px #25a082;

  @media (min-width: 768px) {
    align-self: flex-end;
    margin-top: 0;
  }
`;

const floatAnimation1 = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
`;

const floatAnimation2 = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-15px);
  }
  100% {
    transform: translateY(0);
  }
`;

const floatAnimation3 = keyframes`
  0% {
    transform: translateY(10);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0);
  }
`;

const floatAnimation4 = keyframes`
  0% {
    transform: translateY(15);
  }
  50% {
    transform: translateY(-25px);
  }
  100% {
    transform: translateY(0);
  }
`;

const floatAnimation5 = keyframes`
  0% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-30px);
  }
  100% {
    transform: translateY(0) rotate(360deg);
  }
`;

const floatAnimation6 = keyframes`
  0% {
    transform: translateY(10);
  }
  50% {
    transform: translateY(-25px);
  }
  100% {
    transform: translateY(0);
  }
`;

const IconsWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;

const neonGlowAnimation = keyframes`
  0% {
    opacity: 0.6;
    text-shadow: 0 0 10px rgba(221, 75, 37, 0.8);
  }
  50% {
    opacity: 1;
    text-shadow: 0 0 20px rgba(221, 75, 37, 0.8);
  }
  100% {
    opacity: 0.6;
    text-shadow: 0 0 10px rgba(221, 75, 37, 0.8);
  }
`;

const AnimatedIcon = styled(animated.div)`
  font-size: 2.5rem;
  margin: 10px;
  cursor: pointer;
  color: #000;
  transition: color 0.3s;

  &:hover {
    color: #0077b5;
    animation: ${neonGlowAnimation} 1s ease-in-out infinite;
  }

  &:nth-child(1) {
    animation: ${floatAnimation1} 3s ease-in-out infinite;
  }

  &:nth-child(2) {
    animation: ${floatAnimation2} 3s ease-in-out infinite;
  }

  &:nth-child(3) {
    animation: ${floatAnimation3} 3s ease-in-out infinite;
  }

  &:nth-child(4) {
    animation: ${floatAnimation4} 3s ease-in-out infinite;
  }

  &:nth-child(5) {
    animation: ${floatAnimation5} 3s ease-in-out infinite;
  }

  &:nth-child(6) {
    animation: ${floatAnimation6} 3s ease-in-out infinite;
  }
`;

const AboutMe = () => {
  const [isVisible, setIsVisible] = useState(false);

  const slideIn = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateX(0)' : 'translateX(-1000px)',
  });

  useEffect(() => {
    const handleScroll = () => {
      const aboutMeSection = document.getElementById('about');
      if (aboutMeSection) {
        const top = aboutMeSection.getBoundingClientRect().top;
        setIsVisible(top < window.innerHeight - 200);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Element name="about">
      <AboutMeContainer id="about">
        <ContentWrapper>
          <animated.div style={slideIn}>
            <Title>About Me</Title>
            <Content>
              Hello, I'm Chandru, a dedicated developer specializing in React, PHP, and SQL, with a strong foundation in UI/UX design using Figma. I thrive on crafting intuitive interfaces and scalable solutions that elevate user experiences. Whether it's architecting databases, optimizing backend processes, or refining front-end interactions, I am passionate about every aspect of the development lifecycle.
              <br /><br />
              My journey in software engineering has equipped me with the skills to tackle intricate problems and innovate with technology. From conceptualization to deployment, I take pride in transforming ideas into robust, user-centric applications. Let's collaborate and create something exceptional together!
            </Content>
            <SkillsHeading>Here are my main skills:</SkillsHeading>
            <SkillsIcons>
              <Icon href="#" title="HTML5" style={iconsStyle.html}>
                <FaHtml5 />
              </Icon>
              <Icon href="#" title="CSS3" style={iconsStyle.css}>
                <FaCss3Alt />
              </Icon>
              <Icon href="#" title="JavaScript" style={iconsStyle.javascript}>
                <FaJs />
              </Icon>
              <Icon href="#" title="React" style={iconsStyle.react}>
                <FaReact />
              </Icon>
              <Icon href="#" title="PHP" style={iconsStyle.php}>
                <FaPhp />
              </Icon>
              <Icon href="#" title="MySQL" style={iconsStyle.mysql}>
                <FaDatabase />
              </Icon>
            </SkillsIcons>
          </animated.div>
        </ContentWrapper>
        <animated.div style={slideIn}>
          <Image src={myImage} alt="Chandru's Photo" />
          <IconsWrapper>
            <AnimatedIcon style={{ position: 'absolute', top: '30%', left: '80%', color: '#DD4B25'}} as={FaHtml5} />
            <AnimatedIcon style={{ position: 'absolute', top: '60%', left: '75%', color: '#254BDF'}} as={FaCss3Alt} />
            <AnimatedIcon style={{ position: 'absolute', top: '10%', left: '20%', color: '#E46C00'}} as={FaDatabase} />
            <AnimatedIcon style={{ position: 'absolute', top: '50%', left: '20%', color: '#F7E025'}} as={FaJs} />
            <AnimatedIcon style={{ position: 'absolute', top: '30%', left: '5%', color: '#85DCFA'}} as={FaReact} />
            <AnimatedIcon style={{ position: 'absolute', top: '6%', left: '50%', color: '#080808'}} as={FaPhp} />
          </IconsWrapper>
        </animated.div>
      </AboutMeContainer>
    </Element>
  );
};

export default AboutMe;
