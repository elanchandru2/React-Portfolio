import React, { useState } from 'react';
import styled from 'styled-components';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import sucessGif from "../assets/success.gif"; // Adjust the path as per your actual folder structure

const ContactSection = styled.section`
  text-align: center;
  padding: 2rem;
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const ContactHeading = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const ContactSubContent = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ContactButton = styled.a`
  display: inline-block;
  padding: 1.5rem;
  font-size: 1.2rem;
  text-decoration: none;
  color: ${props => props.color};
  background-color: transparent;
  border: 2px solid black;
  border-radius: 10px;
  transition: background-color 0.3s ease, color 0.3s ease, border-radius 0.3s ease;
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    margin-right: 1rem;
    font-size: 2rem;
  }
  &:hover {
    background-color: black;
    color: white;
    border-radius: 20px;
  }
  @media (max-width: 768px) {
    width: 80%;
    margin-bottom: 1rem;
  }
`;

const ContactForm = styled.form`
  margin-top: 2rem;
`;

const FormHeading = styled.p`
  font-weight: bold;
`;

const FormInput = styled.input`
  width: 50%;
  padding: 0.8rem;
  margin-top: 0.5rem;
  font-size: 1rem;
  border: 2px solid black;
  border-radius: 5px;
  color: black;
  font-weight: bold;
  &::placeholder {
    color: black;
    font-weight: bold;
  }
  @media (max-width: 768px) {
    width: 80%;
  }
`;

const FormTextarea = styled.textarea`
  width: 50%;
  padding: 0.8rem;
  margin-top: 0.5rem;
  font-size: 1rem;
  border: 2px solid black;
  border-radius: 5px;
  color: black;
  font-weight: bold;
  resize: vertical;
  min-height: 150px;
  &::placeholder {
    color: black;
    font-weight: bold;
  }
  @media (max-width: 768px) {
    width: 80%;
  }
`;

const SubmitButton = styled.button`
  margin-top: 1rem;
  padding: 0.8rem 2rem;
  font-size: 1.2rem;
  color: white;
  background-color: black;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease, border-radius 0.3s ease;

  &:hover {
    background-color: #444;
    border-radius: 10px;
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const MySwal = withReactContent(Swal);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "78ad7c90-e7c5-4991-b446-a61c5ada20b2");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      MySwal.fire({
        title: 'Success!',
        text: 'Your message has been sent successfully.',
        imageUrl: sucessGif, // Use the imported GIF here
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Success Image',
      });
    } else {
      MySwal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong! Please try again.',
      });
    }
  };

  return (
    <ContactSection id='contact'>
      <ContactHeading>Contact</ContactHeading>
      <ContactSubContent>
        Ready to begin your project? Contact me now for a free consultation.
      </ContactSubContent>
      <ButtonContainer>
        <ContactButton href="mailto:elanchandru2@gmail.com" color="black">
          <AiOutlineMail />
          Email: elanchandru2@gmail.com
        </ContactButton>
        <ContactButton href="tel:+918778622935" color="black">
          <AiOutlinePhone />
          Call: (+91) 8778622935
        </ContactButton>
      </ButtonContainer>
      <ContactForm onSubmit={onSubmit}>
        <FormHeading>Feel free to reach out via the form below:</FormHeading>
        <FormInput
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <FormInput
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        /> 
        <FormTextarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        /> <br />
           <div class="h-captcha" data-captcha="true" data-theme="dark" data-onload="myFunction"></div>
        <SubmitButton type="submit">Submit</SubmitButton>
      </ContactForm>
    </ContactSection>
  );
};

export default Contact;
