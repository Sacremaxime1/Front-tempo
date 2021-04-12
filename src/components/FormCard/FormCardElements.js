import styled from "styled-components";
//import { Link } from "react-router-dom";

export const Container = styled.div`
  height: auto;
  position: relative;
  justify-content: center;
  align-items: center;
  z-index: 1;
  overflow: hidden;
  background: #939393;
  padding: 2% 20%;

  @media screen and (max-width: 1500px) {
    padding: 3% 15%;
  }

  @media screen and (max-width: 1050px) {
    padding: 3% 6%;
  }

  @media screen and (max-width: 800px) {
    padding: 3% 4%;
  }
`;

export const FormContainer = styled.div`
  background: #fff;
  border-radius: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 0.2fr 1.8fr;
  gap: 10px 10px;
  grid-template-areas:
    "Titre Titre"
    "Upload Info";

  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-template-rows: 0.2fr 1.4fr 1.4fr;
    gap: 10px 10px;
    grid-template-areas:
      "Titre"
      "Upload"
      "Info";
  }
`;

export const Titre = styled.div`
  grid-area: Titre;
  font-size: 30px;
  text-align: center;
  margin: 10px;
`;

export const FormUpload = styled.div`
  grid-area: Upload;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

export const FormUploadLabel = styled.div`
  font-size: 20px;
  text-align: center;
  margin-bottom: 20px;
`;

export const BoxUpload = styled.div`
  margin: 0 auto;
  display: grid;
  place-items: center;
  text-align: center;
  border: 1px dashed #799cd9;
  height: 200px;
  width: 200px;
  background: #fbfbff;
  border-radius: 20px;
  .image-upload {
    display: flex;
    flex-wrap: wrap;
    label {
      cursor: pointer;

      :hover {
        opacity: 0.8;
      }
    }
    > input {
      display: none;
    }
  }
`;

export const ImagePreview = styled.div`
  position: relative;
  #uploaded-image {
    height: 200px;
    width: 200px;
    object-fit: cover;
    border-radius: 20px;
  }
  .close-icon {
    background: #000;
    border-radius: 5px;
    opacity: 0.8;
    position: absolute;
    z-index: 10;
    right: 15px;
    top: 20px;
    cursor: pointer;
    :hover {
      opacity: 1;
    }
  }
`;

export const FileName = styled.div`
  text-align: center;
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 15px;
`;

export const FormInfo = styled.form`
  grid-area: Info;
  display: grid;
  margin: 0 5%;
  width: 80%;
  height: 350px;

  @media screen and (max-width: 400px) {
    padding: 32px 32px;
  }
`;

export const FormLabel = styled.label`
  font-size: 20px;
`;

export const FormInput = styled.input`
  border-radius: 4px;
  margin-bottom: 10px;
  background-color: #f8f8f8;
  padding: 0 20px;
`;

export const FormTextarea = styled.textarea`
  padding: 12px 20px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 4px;
  background-color: #f8f8f8;
  resize: none;
`;

export const FormButton = styled.input`
  background: #01bf71;
  padding: 10px 5px;
  margin-left: 15px;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
`;

export const FormButtonGroup = styled.div`
  grid-template-columns: 1fr 1fr;
  margin-top: 20px;
  text-align: center;
`;

export const Button = styled.button`
  background: #939393;
  margin: 0px 10px;
  padding: 10px 5px;
  border: none;
  border-radius: 4px;
  font-size: 20px;
  cursor: pointer;
`;

export const ButtonAdd = styled.button`
  background: #01bf71;
  margin: 0px 10px;
  padding: 10px 5px;
  border: none;
  border-radius: 4px;
  font-size: 20px;
  cursor: pointer;
`;

export const Error = styled.div`
  text-align: center;
  color: #c70039;
  font-size: 14px;
`;
