import React from 'react';
import styled from 'styled-components';
import ScrollAnimation from 'react-animate-on-scroll';
import { FaGithub } from 'react-icons/fa';

const ProjectsHeading = styled.h2`
  font-size: 2.5rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: 30px;
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 50px;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Card = styled.div`
  width: 500px;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out, background-color 0.3s;
  position: relative;
  height: 400px;

  &:hover {
    transform: translateY(-5px);
    background-color: red;
    color: white;
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;

    svg {
      width: 50px;
      height: 50px;
      margin-right: 10px;
    }

    .project-links {
      display: flex;
      align-items: center;
    }

    .project-links a {
      margin-right: 10px;
    }
  }

  .body {
    h3 {
      font-size: 1.8rem;
      margin-bottom: 10px;
    }

    p {
      font-size: 1.2rem;
      line-height: 1.6;
    }
  }

  footer {
    margin-top: 10px;

    .tech-list {
      display: flex;
      list-style-type: none;
      padding: 0;
      margin: 0;

      li {
        margin-right: 10px;
        font-size: 1.2rem;
      }
    }
  }

  .github-icon {
    position: absolute;
    top: 10px;
    right: 10px;
  }

  @media (max-width: 768px) {
    width: 90%;
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 10px;
    height: auto;

    header {
      flex-direction: column;
      align-items: flex-start;
      svg {
        width: 40px;
        height: 40px;
        margin-bottom: 10px;
      }
    }

    .body {
      h3 {
        font-size: 1.5rem;
      }

      p {
        font-size: 1rem;
      }
    }
  }
`;

const ProjectCards = () => {
  return (
    <>
      <ProjectsHeading id='projects' style={{marginBlockStart:"250px"}}>My Projects</ProjectsHeading>
      <CardContainer>
        <ScrollAnimation animateIn="flipInX">
          <Card className="project" >
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://github.com/elanchandru2/CRM-software-Task_managment_system-" target="_blank" rel="noreferrer">
                  <FaGithub size={30} title="GitHub" className="github-icon" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>CRM-software-Task_managment_system-</h3>
              <p>
                Researched and developed a CRM software using PHP for the application logic, SQL for the database, and SMTP for the mail functionality. The CRM likely includes features such as customer relationship management, data storage and retrieval, email communication integration, and possibly user authentication and authorization mechanisms.
              </p>
            </div>
          </Card>
        </ScrollAnimation>

        {/* Second Project Card */}
        <ScrollAnimation animateIn="flipInX">
          <Card className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://github.com/elanchandru2/TechTrooper" target="_blank" rel="noreferrer">
                  <FaGithub size={30} title="GitHub" className="github-icon" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>TechTrooper (React And API)</h3>
              <p>
                Built a React-based ecommerce site with API integration for seamless functionality and a dynamic user experience. The site includes essential ecommerce functionalities such as product browsing, cart management, secure payment processing, and order tracking.
              </p>
            </div>
          </Card>
        </ScrollAnimation>

        {/* Third Project Card */}
        <ScrollAnimation animateIn="flipInY" animateOut='flipOutY'>
          <Card className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://github.com/elanchandru2/Portfolio" target="_blank" rel="noreferrer">
                  <FaGithub size={30} title="GitHub" className="github-icon" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Portfolio</h3>
              <p>
                Personal portfolio is built using HTML, Tailwind CSS, JavaScript, jQuery, and Bootstrap. It likely showcases skills and projects with a modern and responsive design. Features may include interactive elements, such as animations or scroll effects, to enhance user engagement. The portfolio may also include a contact form for easy communication and sections detailing Chandru's experience, projects, and skills.
              </p>
            </div>
          </Card>
        </ScrollAnimation>
      </CardContainer>
    </>
  );
};

export default ProjectCards;
