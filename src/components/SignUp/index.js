import React, { useState } from "react";
import axios from "axios";
import {
  Container,
  Form,
  FormButton,
  FormContent,
  FormH1,
  FormInput,
  FormLabel,
  FormWrap,
  Icon,
  Text,
  TextLink,
  Error,
} from "./SignUpElements";

const SignUp = () => {
  const [pseudo, setPseudo] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [controlPassword, setControlPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    const pseudoError = document.querySelector(".pseudo.error");
    const emailError = document.querySelector(".email.error");
    const passwordError = document.querySelector(".password.error");
    const passwordConfirmError = document.querySelector(
      ".password-confirm.error"
    );

    passwordConfirmError.innerHTML = "";

    if (password !== controlPassword) {
      passwordConfirmError.innerHTML = "Les mots de passe ne correspondent pas";
    } else {
      await axios({
        method: "post",
        url: `${process.env.REACT_APP_API_URL}api/user/register`,
        data: {
          pseudo,
          email,
          password,
        },
      })
        .then((res) => {
          console.log(res);
          if (res.data.errors) {
            pseudoError.innerHTML = res.data.errors.pseudo;
            emailError.innerHTML = res.data.errors.email;
            passwordError.innerHTML = res.data.errors.password;
          } else {
            window.location = "/connexion";
          }
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <>
      <Container img={"img/signup.jpg"}>
        <FormWrap>
          <FormContent>
            <Form action="" onSubmit={handleRegister}>
              <Icon to="/">Tempo V</Icon>
              <FormH1>Inscription</FormH1>
              <FormLabel htmlFor="for">Pseudo</FormLabel>
              <FormInput
                type="text"
                required
                name="pseudo"
                id="pseudo"
                onChange={(e) => setPseudo(e.target.value)}
                value={pseudo}
              />
              <Error className="pseudo error" />
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput
                type="email"
                required
                name="email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <Error className="email error" />
              <FormLabel htmlFor="for">Mot de passe</FormLabel>
              <FormInput
                type="password"
                required
                name="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              <Error className="password error" />
              <FormLabel htmlFor="for">Vérification du mot de passe</FormLabel>
              <FormInput
                type="password"
                required
                name="password"
                id="password-conf"
                onChange={(e) => setControlPassword(e.target.value)}
                value={controlPassword}
              />
              <Error className="password-confirm error" />
              <FormButton type="submit" value="Valider inscription" />
              <Text>
                Déja inscrit ? <TextLink to="/connexion"> Connexion</TextLink>
              </Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignUp;
