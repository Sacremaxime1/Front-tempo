import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uploadPicture } from "../../actions/user.actions";
import axios from "axios";
import {
  Container,
  FormWrap,
  FormContent,
  FormPassword,
  Logo,
  FormImage,
  LabelImage,
  InputImage,
  SubmitImage,
  Pseudo,
  FormLabel,
  FormInput,
  FormButton,
  Error,
} from "./UserProfileElements";

const UserProfile = () => {
  const [isUploaded, setIsUploaded] = useState(false);
  const [profilePicture, setProfilePicture] = useState(null);
  const [file, setFile] = useState();
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userReducer);
  const [userImage, setUserImage] = useState("");

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordConf, setNewPasswordConf] = useState("");
  //const error = useSelector((state) => state.errorReducer.userError);

  const handleImage = (e) => {
    setProfilePicture(URL.createObjectURL(e.target.files[0]));
    setFile(e.target.files[0]);
    setIsUploaded(true);
  };

  const handlePicture = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("name", userData.pseudo);
    data.append("userId", userData._id);
    data.append("file", file);

    dispatch(uploadPicture(data, userData._id));
    getPicture(userData.picture);
    setIsUploaded(false);
  };

  const getPicture = (pathPicture) => {
    return axios
      .get(
        `${process.env.REACT_APP_API_URL}static${pathPicture.replace(".", "")}`,
        { responseType: "arraybuffer" }
      )
      .then((res) => {
        const base64 = btoa(
          new Uint8Array(res.data).reduce(
            (data, byte) => data + String.fromCharCode(byte),
            ""
          )
        );
        setUserImage("data:;base64," + base64);
      })
      .catch((err) => console.log(err));
  };

  getPicture(userData.picture);

  const cancelPassword = () => {
    setOldPassword("");
    setNewPassword("");
    setNewPasswordConf("");
  };

  const handlePassword = (e) => {
    e.preventDefault();
    const passwordError = document.querySelector(".password.error");
    const oldPasswordError = document.querySelector(".oldpassword.error");
    oldPasswordError.innerHTML = "&nbsp;";

    if (newPassword === newPasswordConf) {
      passwordError.innerHTML = "&nbsp;";
      return axios({
        method: "put",
        url: `${process.env.REACT_APP_API_URL}api/user/` + userData._Id,
        data: {
          email: userData.email,
          password: oldPassword,
          newPassword: newPassword,
        },
      })
        .then((res) => {
          if (res.data.error) {
            oldPasswordError.innerHTML = res.data.error;
            console.log(res);
          } else {
            cancelPassword();
            alert("Mot de passe modifié");
            console.log(res);
          }
        })
        .catch((err) => console.log(err));
    } else {
      passwordError.innerHTML = "Le mot de passe ne correspond pas";
    }
  };

  return (
    <>
      <Container img={"img/profile.jpg"}>
        <FormWrap>
          <FormContent>
            <FormImage action="" onSubmit={handlePicture}>
              <LabelImage htmlFor="file">
                <Logo
                  src={isUploaded ? profilePicture : userImage}
                  draggable={"false"}
                  alt="user-pic"
                ></Logo>
              </LabelImage>
              <InputImage
                type="file"
                id="file"
                name="file"
                accept=".jpg, .jpeg, .png"
                onChange={handleImage}
              />
              {isUploaded && (
                <SubmitImage type="submit" value="Changer l'image" />
              )}
              <Pseudo>{userData.pseudo}</Pseudo>
            </FormImage>
            <FormPassword action="" onSubmit={handlePassword}>
              <FormLabel htmlFor="for">Ancien mot de passe</FormLabel>
              <FormInput
                type="password"
                required
                name="oldPassword"
                id="oldPassword"
                onChange={(e) => setOldPassword(e.target.value)}
                value={oldPassword}
              />
              <Error className="oldpassword error" />
              <FormLabel htmlFor="for">Nouveau mot de passe</FormLabel>
              <FormInput
                type="password"
                required
                name="newPassword"
                id="newPassword"
                onChange={(e) => setNewPassword(e.target.value)}
                value={newPassword}
              />
              <FormLabel htmlFor="for">
                Validation du nouveau mot de passe
              </FormLabel>
              <FormInput
                type="password"
                required
                name="newPasswordConf"
                id="newPasswordConf"
                onChange={(e) => setNewPasswordConf(e.target.value)}
                value={newPasswordConf}
              />
              <Error className="password error" />
              <FormButton type="submit" value="Changer le mot de passe" />
            </FormPassword>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default UserProfile;
