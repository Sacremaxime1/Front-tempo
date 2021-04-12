import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCards, getCards } from "../../actions/card.actions";
import { isEmpty } from "../Utils";
import {
  Container,
  FormContainer,
  Titre,
  FormUpload,
  BoxUpload,
  ImagePreview,
  FormInfo,
  FileName,
  FormLabel,
  FormInput,
  FormButton,
  FormUploadLabel,
  FormTextarea,
  FormButtonGroup,
  Button,
  Error,
} from "./FormCardElements";

const FormCard = () => {
  const [isUploaded, setIsUploaded] = useState(false);
  const [file, setFile] = useState();
  const [cardPicture, setCardPicture] = useState(null);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const userData = useSelector((state) => state.userReducer);
  const error = useSelector((state) => state.errorReducer.cardError);
  const dispatch = useDispatch();

  const FolderIcon = "img/folder_icon_transparent.png";
  const CloseIcon = "img/CloseIcon.svg";

  const handlePicture = (e) => {
    setCardPicture(URL.createObjectURL(e.target.files[0]));
    setFile(e.target.files[0]);
    const typefile = document.querySelector(".type.file");
    typefile.innerHTML = e.target.files[0].name;
    setIsUploaded(true);
  };

  const cancelCard = () => {
    setName("");
    setMessage("");
    setFile("");
    setCardPicture("");
  };

  const handleCard = async (e) => {
    e.preventDefault();
    if (message && file && name) {
      const data = new FormData();
      data.append("posterId", userData._id);
      data.append("message", message);
      if (file) data.append("file", file);
      data.append("name", name);

      await dispatch(addCards(data));
      dispatch(getCards());
      cancelCard();
      setIsUploaded(false);
      const typefile = document.querySelector(".type.file");
      typefile.innerHTML = "&nbsp;";
    } else {
      alert("Veuillez renseigner les champs");
    }
  };

  return (
    <Container>
      <FormContainer>
        <Titre>Nouvelle carte</Titre>
        <FormUpload>
          <FormUploadLabel>Télécharger votre image</FormUploadLabel>
          <BoxUpload>
            <div className="image-upload">
              {!isUploaded ? (
                <>
                  <label htmlFor="upload-input">
                    <img
                      src={FolderIcon}
                      draggable={"false"}
                      alt="placeholder"
                      style={{ width: 100, height: 100 }}
                    />
                    <p style={{ color: "#444" }}>
                      Cliquez ici pour télécharger l'image
                    </p>
                  </label>

                  <input
                    id="upload-input"
                    type="file"
                    name="file"
                    accept=".jpg, .jpeg, .png"
                    onChange={(e) => handlePicture(e)}
                  />
                </>
              ) : (
                <ImagePreview>
                  <img
                    className="close-icon"
                    src={CloseIcon}
                    alt="CloseIcon"
                    onClick={() => {
                      setIsUploaded(false);
                      setFile("");
                      setCardPicture("");
                    }}
                  />
                  <img
                    id="uploaded-image"
                    src={cardPicture}
                    draggable={false}
                    alt="uploaded-img"
                  />
                </ImagePreview>
              )}
            </div>
          </BoxUpload>
          <FileName className="type file" />
          {!isEmpty(error.format) && <Error>{error.format}</Error>}
          {!isEmpty(error.maxSize) && <Error>{error.maxSize}</Error>}
        </FormUpload>
        <FormInfo action="">
          <FormLabel htmlFor="for">Nom de la carte</FormLabel>
          <FormInput
            type="text"
            required
            name="name"
            id="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <FormLabel htmlFor="for">Informations</FormLabel>
          <FormTextarea
            type="textarea"
            name="message"
            id="message"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
          <FormButtonGroup>
            <FormButton
              type="submit"
              value="Enregistrer"
              onClick={handleCard}
            />
            <Button onClick={cancelCard}>Annuler</Button>
          </FormButtonGroup>
        </FormInfo>
      </FormContainer>
    </Container>
  );
};

export default FormCard;
