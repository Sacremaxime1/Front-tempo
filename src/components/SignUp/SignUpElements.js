import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  height: 900px;
  position: relative;
  justify-content: center;
  align-items: center;
  z-index: 1;
  overflow: hidden;
  background-image: url(${(props) => props.img});
`;

export const FormWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 400px) {
    height: 80%;
  }
`;

export const Icon = styled(Link)`
  margin-bottom: 32px;
  margin-top: -32px;
  text-align: center;
  text-decoration: none;
  color: #fff;
  font-weight: 700;
  font-size: 32px;

  @media screen and (max-width: 480px) {
    margin-left: 16px;
    margin-top: 8px;
  }
`;

export const FormContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`;

export const Form = styled.form`
  background: #010101;
  max-width: 400px;
  height: auto;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 80px 32px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

  @media screen and (max-width: 400px) {
    padding: 32px 32px;
  }
`;

export const FormH1 = styled.h1`
  margin-bottom: 40px;
  color: #fff;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
`;

export const FormLabel = styled.label`
  margin-bottom: 8px;
  font-size: 14px;
  color: #fff;
`;

export const FormInput = styled.input`
  padding: 16px 16px;
  margin-bottom: 32px;
  border: none;
  border-radius: 4px;
`;

export const FormButton = styled.input`
  background: #01bf71;
  padding: 16px 0;
  border: none;
  border-radius: 4px;
  margin-top: 4px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
`;

export const Text = styled.span`
  text-align: center;
  margin-top: 30px;
  color: #fff;
  font-size: 14px;
`;

export const TextLink = styled(Link)`
  color: #fff;
  font-size: 14px;
  margin-left: 7px;

  &:hover {
    color: #01bf71;
    transition: 200ms ease-in;
  }
`;

export const Error = styled.div`
  text-align: center;
  color: #c70039;
  font-size: 14px;
  margin-top: -14px;
  margin-bottom: 14px;
`;
