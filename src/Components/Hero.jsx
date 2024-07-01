import React from "react";
import styled, { keyframes } from "styled-components";
import TextTransition, { presets } from "react-text-transition";
import {
  FaInstagram,
  FaWhatsapp,
  FaLinkedin,
  FaGithub,
  FaTelegram,
} from "react-icons/fa";
import heroImage from "../assets/hero.png"; // Assuming hero.png is in the same directory as this component

const TEXTS = ["React ", "PHP ", "MySQL "];

const addSAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(100%);
  }
  to {
    opacity: 1;
    transform: translateY(0%);
  }
`;

const waveAnimation = keyframes`
  0%, 100% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(8px) rotate(10deg);
  }
  50% {
    transform: translateX(-8px) rotate(-10deg);
  }
  75% {
    transform: translateX(8px) rotate(10deg);
  }
`;

const fadeInAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const AnimatedHi = styled.span`
  display: inline-block;
  position: relative;
  animation: ${waveAnimation} 1s infinite;
  font-size: 35px;
`;

const AnimatedS = styled.span`
  display: inline-block;
  position: relative;
  animation: ${addSAnimation} 0.3s ease forwards;
`;

const CenteredContent = styled.div`
  display: flex;
  justify-content: space-between; /* Adjust to space the content and image */
  align-items: center;
  min-height: 75vh; /* Adjust this as per your layout needs */
  padding: 0 20px; /* Adds padding horizontally */

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const InnerContainer = styled.div`
  text-align: left; /* Ensures content is aligned left */
  margin: 20px; /* Adds margin around the content */
        margin-block-start: 190px;
            margin-inline-start: 90px;



  @media (max-width: 768px) {
    text-align: center;
    margin: 10px;
            margin-block-start: 150px;

  }
`;

const Title = styled.h1`
  font-size: 2.5rem; /* Adjust font size as needed */
  font-weight: 600; /* Adjust font weight for emphasis */

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.h2`
  font-size: 1.5rem; /* Adjust font size as needed */
  font-weight: 400; /* Adjust font weight for emphasis */

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const Name = styled.span`
  font-size: 3rem; /* Adjust font size for the name Chandru */
  font-weight: 700; /* Adjust font weight for emphasis */

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroImage = styled.img`
  max-width: 50%; /* Ensure the image doesn't exceed its container width */
  height: auto; /* Maintain aspect ratio */
  animation: ${fadeInAnimation} 1s ease; /* Apply fade-in animation */
      margin-block-start: 190px;


  @media (max-width: 768px) {
    max-width: 80%;
    margin-top: 20px;
    
  }
`;

const ContactButton = styled.button`
  -webkit-tap-highlight-color: transparent;
  -webkit-appearance: button;
  background-color: #000;
  background-image: none;
  color: #fff;
  cursor: pointer;
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
    Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif,
    Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
  font-size: 100%;
  font-weight: 900;
  line-height: 1.5;
  margin: 0;
  -webkit-mask-image: -webkit-radial-gradient(#000, #fff);
  padding: 0;
  border: none;
  border-radius: 50px;
  position: relative;
  text-transform: uppercase;
  overflow: hidden;
  padding: 1rem 2rem;

  &:disabled {
    cursor: default;
  }

  &:hover:before {
    --progress: 0%;
  }

  &:before {
    --progress: 100%;
    background: #fff;
    -webkit-clip-path: polygon(
      100% 0,
      var(--progress) var(--progress),
      0 100%,
      100% 100%
    );
    clip-path: polygon(
      100% 0,
      var(--progress) var(--progress),
      0 100%,
      100% 100%
    );
    content: "";
    inset: 0;
    position: absolute;
    transition: -webkit-clip-path 0.2s ease;
    transition: clip-path 0.2s ease;
    transition: clip-path 0.2s ease, -webkit-clip-path 0.2s ease;
  }

  .text-container {
    display: block;
    overflow: hidden;
    position: relative;
  }

  .text {
    display: block;
    font-weight: 900;
    mix-blend-mode: difference;
    position: relative;
  }

  &:hover .text {
    -webkit-animation: move-up-alternate 0.3s ease forwards;
    animation: move-up-alternate 0.3s ease forwards;
  }

  @-webkit-keyframes move-up-alternate {
    0% {
      transform: translateY(0);
    }

    50% {
      transform: translateY(80%);
    }

    51% {
      transform: translateY(-80%);
    }

    to {
      transform: translateY(0);
    }
  }

  @keyframes move-up-alternate {
    0% {
      transform: translateY(0);
    }

    50% {
      transform: translateY(80%);
    }

    51% {
      transform: translateY(-80%);
    }

    to {
      transform: translateY(0);
    }
  }
`;

const IconContainer = styled.div`
  display: flex;
  gap: 20px; /* Space between icons */
  margin-top: 20px; /* Space between button and icons */
  justify-content: flex-start;

  @media (max-width: 768px) {
    gap: 10px;
    justify-content: center;
  }
`;

const Icon = styled.a`
  font-size: 2rem; /* Icon size */
  transition: all 0.3s ease;
  color: inherit; /* Inherit color from parent */
  position: relative; /* Ensure positioning context */

  &:hover {
    transform: scale(1.2); /* Enlarge icon on hover */
    color: #fff; /* Change text color to white */
    border-radius: 50%; /* Rounded border */
  }

  &:hover::before {
    content: attr(title); /* Display text from title attribute */
    position: absolute;
    top: -30px; /* Adjust distance from icon */
    left: 50%; /* Center align text */
    transform: translateX(-50%); /* Center horizontally */
    background-color: #000; /* Background color */
    color: #fff; /* Text color */
    padding: 5px 10px; /* Padding for spacing */
    border-radius: 5px; /* Rounded corners */
    font-size: 0.6rem; /* Adjust font size */
    white-space: nowrap; /* Prevent wrapping */
    opacity: 0; /* Start with opacity 0 */
    animation: fadeIn 0.3s forwards; /* Animation to fade in */
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  /* Keyframes for fade-in animation */
  @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }
`;


const InstagramIcon = styled(FaInstagram)`
  color: #e4405f; /* Instagram color */
`;

const WhatsappIcon = styled(FaWhatsapp)`
  color: #25d366; /* WhatsApp color */
`;

const LinkedinIcon = styled(FaLinkedin)`
  color: #0077b5; /* LinkedIn color */
`;

const GithubIcon = styled(FaGithub)`
  color: #333; /* GitHub color */
`;

const TelegramIcon = styled(FaTelegram)`
  color: #5eb5f7; /* Telegram color */
`;

const App = () => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((index) => (index + 1) % TEXTS.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <CenteredContent>
      <InnerContainer>
        <Subtitle>
          Hi<AnimatedHi>👋</AnimatedHi> I'm
        </Subtitle>
        <Title>
          <Name>Chandru</Name>
        </Title>
        <Title>
          <TextTransition springConfig={presets.wobbly}>
            {TEXTS[index]}
            <AnimatedS>Developer</AnimatedS>
          </TextTransition>
        </Title>
        <ContactButton>
          <span className="text-container">
            <a
              style={{ textDecoration: "none", color: "white" }}
              href="#contact"
              className="text"
            >
              Contact
            </a>
          </span>
        </ContactButton>
        <IconContainer>
          <Icon
            href="https://telegram.org"
            target="_blank"
            rel="noopener noreferrer"
            title="Telegram"
          >
            <TelegramIcon />
          </Icon>
          <Icon
            href="https://wa.me/+918778622935"
            target="_blank"
            rel="noopener noreferrer"
            title="WhatsApp"
          >
            <WhatsappIcon />
          </Icon>
          <Icon
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
          >
            <LinkedinIcon />
          </Icon>
          <Icon
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
          >
            <GithubIcon />
          </Icon>
        </IconContainer>
      </InnerContainer>
      <HeroImage src={heroImage} alt="Hero" />
    </CenteredContent>
  );
};

export default App;
