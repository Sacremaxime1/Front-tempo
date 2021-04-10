import React from "react";
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
} from "./SignInElements";

const SignIn = () => {
  return (
    <>
      <Container img={"img/login.jpg"}>
        <FormWrap>
          <FormContent>
            <Form action="#">
              <Icon to="/">Tempo V</Icon>
              <FormH1>Connexion</FormH1>
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput type="email" required />
              <FormLabel htmlFor="for">Mot de passe</FormLabel>
              <FormInput type="password" required />
              <FormButton type="submit">Continuer</FormButton>
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
