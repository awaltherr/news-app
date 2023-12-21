import styled from "styled-components";

const inputStyle = `
  width: 100%;
  padding: 10px;
  border: 1px solid white;
  outline: none;
  background: white;
  font-size: 15px;
`;

export const ContactContainer = styled.form`
  padding-top: 200px;
  width: 90%;
  max-width: 600px;
  margin: 0 auto;
`;

export const InputGroup = styled.div`
  margin-bottom: 30px;
`;

export const InputField = styled.input`
  ${inputStyle}
`;

export const TextArea = styled.textarea`
  ${inputStyle}
`;

export const ContactSubmitBtn = styled.button`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 10px;
  outline: none;
  width: 40%;
  cursor: pointer;
  background-color: #c3e2c2;
  color: black;
  border: none;
`;
