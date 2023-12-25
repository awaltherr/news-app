import styled from "styled-components";

const inputStyle = `
  width: 100%;
  padding: 10px;
  border: 1px solid #ffffff;
  outline: none;
  background: #ffffff;
  font-size: 15px;
`;

export const ContactContainer = styled.form`
  padding-top: 200px;
  width: 90%;
  max-width: 600px;
  margin: 0 auto;
  display: block;
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
  color: #000000;
  border: none;
`;

export const ErrorList = styled.ul`
  list-style: none;
  margin-top: 30px;
  padding: 10px;
  width: 100%;
`;

export const ErrorMessage = styled.li`
  margin-bottom: 10px;
  padding: 5px;
  color: #ffffff;
  background-color: #ff0000;
`;

export const SuccessMessage = styled.span`
  margin-top: 30px;
  display: block;
  width: 100%;
  padding: 5px;
  color: #ffffff;
  background-color: #008000;
  text-align: center;
`;
