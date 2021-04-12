import styled from "styled-components";

export const Container = styled.div`
  min-height: 692px;
  height: 900px;
  position: relative;
  justify-content: center;
  align-items: center;
  z-index: 1;
  overflow: hidden;
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-position: 50% 70%;
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

export const FormContent = styled.div`
  background: #fff;
  height: auto;
  z-index: 1;
  display: grid;
  min-width: 350px;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr auto;
  grid-template-areas: "image_area password";
  margin: 0 auto;
  padding: 40px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

  @media screen and (max-width: 840px) {
    //padding: 32px 32px;
    max-width: 500px;
    min-height: 460px;
    grid-template-rows: 1fr auto;
    grid-template-columns: 1fr;
    grid-template-areas: "image_area" "password";
  }
`;

export const FormImage = styled.form`
  grid-area: image_area;
  display: grid;
  justify-content: center;
  align-items: center;
`;

export const ArrowBtn = styled.button`
  text-align: center;
  width: 25px;
  padding: 0 auto;
  font-weight: 700;
  font-size: 18px;
  transform: translate(200px);
  background: #01bf71;
  border: none;
  border-radius: 4px;
  color: #fff;
`;

export const Logo = styled.img`
  margin: 20px auto;
  height: 200px;
  width: 200px;
  border-radius: 50%;

  &:hover {
    opacity: 0.8;
    transition: opacity 0.2s ease-out;
  }
`;

export const LabelImage = styled.label`
  margin: 0 auto;
`;

export const InputImage = styled.input`
  visibility: hidden;
  width: 0;
  height: 0;
`;

export const SubmitImage = styled.input`
  margin: 0 auto;
  background: #01bf71;
  padding: 5px 5px;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 15px;
  cursor: pointer;
`;

export const Pseudo = styled.div`
  margin: 10px auto;
  font-size: 28px;
  font-weight: 700;
`;

export const Email = styled.div`
  margin: 0 auto;
  font-size: 20px;
`;

export const FormPassword = styled.form`
  margin-left: 60px;
  grid-area: password;
  display: grid;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 840px) {
    margin-left: 0;
    margin-top: 60px;
  }
`;

export const FormLabel = styled.label`
  margin-bottom: 8px;
  font-size: 14px;
  //color: #fff;
`;

export const FormInput = styled.input`
  padding: 16px 16px;
  margin-bottom: 32px;
  //border: none;
  border-radius: 4px;
`;

export const FormButton = styled.input`
  background: #01bf71;
  padding: 16px 0;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 15px;
  cursor: pointer;
`;

export const Error = styled.div`
  text-align: center;
  color: #c70039;
  font-size: 14px;
  margin-top: -14px;
  margin-bottom: 14px;
`;

export const FormPasswordEmpty = styled.div`
  grid-area: password;
  height: 380px;
  width: 0;

  @media screen and (max-width: 840px) {
    height: 0;
    width: 252px;
  }
`;
