import { useState, useEffect } from "react";
import {
  ContactContainer,
  InputGroup,
  InputField,
  TextArea,
  ContactSubmitBtn,
} from "../styles/Contact.styled";

export default function Contact() {
  const [contactInputs, setContactInputs] = useState({
    firstname: "",
    lastname: "",
    email: "",
    message: "",
  });
  const [contactErrors, setContactErrors] = useState({});
  const [contactSubmit, setContactSubmit] = useState(false);
  const [successSubmit, setSuccessSubmit] = useState(false);

  const validateForm = (inputValues) => {
    let errors = {};

    if (!inputValues.firstname.trim()) {
      errors.firstname = "First name cannot be empty";
    }

    if (!inputValues.lastname.trim()) {
      errors.lastname = "Last name cannot be empty";
    }

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!inputValues.email.trim()) {
      errors.email = "Email cannot be empty";
    } else if (!emailRegex.test(inputValues.email)) {
      errors.email = "Please use valid email";
    }

    if (!inputValues.message.trim()) {
      errors.message = "Message cannot be empty";
    } else if (inputValues.message.length < 10) {
      errors.email = "Message must contain at least 15 characters";
    }

    return errors;
  };

  const handleChange = (e) => {
    setContactInputs({ ...contactInputs, [e.target.name]: e.target.value });
  };

  const clearFields = () => {
    setContactInputs({
      firstname: "",
      lastname: "",
      email: "",
      message: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm(contactInputs);
    setContactErrors(errors);
    if (Object.keys(errors).length === 0) {
      setContactSubmit(true);
    }
  };

  useEffect(() => {
    const finishSubmit = () => {
      console.log(contactInputs);
      setSuccessSubmit(true);
      clearFields();
    };
    if (contactSubmit) {
      finishSubmit();
    }
  }, [contactSubmit, contactInputs]);

  return (
    <ContactContainer onSubmit={handleSubmit}>
      <InputGroup>
        <InputField
          type="text"
          name="firstname"
          placeholder="First name*"
          onChange={handleChange}
          value={contactInputs.firstname}
        />
      </InputGroup>
      <InputGroup>
        <InputField
          type="text"
          name="lastname"
          placeholder="Last name*"
          onChange={handleChange}
          value={contactInputs.lastname}
        />
      </InputGroup>
      <InputGroup>
        <InputField
          type="text"
          name="email"
          placeholder="Email*"
          onChange={handleChange}
          value={contactInputs.email}
        />
      </InputGroup>
      <InputGroup>
        <TextArea
          name="message"
          rows="12"
          placeholder="Message*"
          onChange={handleChange}
          value={contactInputs.message}
        />
      </InputGroup>
      <ContactSubmitBtn type="submit">Submit</ContactSubmitBtn>
      {Object.keys(contactErrors).length > 0 && (
        <ul className="errorList">
          {Object.values(contactErrors).map((error, index) => (
            <li key={index}>{error}</li>
          ))}
        </ul>
      )}
      {successSubmit && (
        <span className="successSubmit">Thank you for your message</span>
      )}
    </ContactContainer>
  );
}
