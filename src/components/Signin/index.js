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
} from "./SignInElements";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const emailError = document.querySelector(".email.error");
    const passwordError = document.querySelector(".password.error");

    axios({
      method: "post",
      url: `${process.env.REACT_APP_API_URL}api/user/login`,
      withCredentials: true,
      data: {
        email,
        password,
      },
    })
      .then((res) => {
        console.log(res);
        if (res.data.errors) {
          emailError.innerHTML = res.data.errors.email;
          passwordError.innerHTML = res.data.errors.password;
        } else {
          window.location = "/";
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Container img={"img/login.jpg"}>
        <FormWrap>
          <FormContent>
            <Form action="" onSubmit={handleLogin}>
              <Icon to="/">Tempo V</Icon>
              <FormH1>Connexion</FormH1>
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
              <FormButton type="submit" value="Se connecter" />
              <Text>
                Nouveau sur Tempo V ?{" "}
                <TextLink to="/inscription"> Inscription</TextLink>
              </Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignIn;
