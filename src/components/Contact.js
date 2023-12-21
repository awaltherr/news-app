import {
  ContactContainer,
  InputGroup,
  InputField,
  TextArea,
  ContactSubmitBtn,
} from "../styles/Contact.styled";

export default function Contact() {
  return (
    <ContactContainer>
      <InputGroup>
        <InputField type="text" id="name" placeholder="Name" required />
      </InputGroup>
      <InputGroup>
        <InputField type="text" id="number" placeholder="Phone" required />
      </InputGroup>
      <InputGroup>
        <InputField type="text" id="email" placeholder="Email" required />
      </InputGroup>
      <InputGroup>
        <TextArea id="message" rows="12" placeholder="Message" />
      </InputGroup>
      <ContactSubmitBtn type="submit">Submit</ContactSubmitBtn>
    </ContactContainer>
  );
}
