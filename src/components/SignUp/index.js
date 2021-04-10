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
} from "./SignUpElements";

const SignUp = () => {
  return (
    <>
      <Container img={"img/signup.jpg"}>
        <FormWrap>
          <FormContent>
            <Form action="#">
              <Icon to="/">Tempo V</Icon>
              <FormH1>Inscription</FormH1>
              <FormLabel htmlFor="for">Pseudo</FormLabel>
              <FormInput type="text" required />
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput type="email" required />
              <FormLabel htmlFor="for">Mot de passe</FormLabel>
              <FormInput type="password" required />
              <FormLabel htmlFor="for">Vérification du mot de passe</FormLabel>
              <FormInput type="password" required />
              <FormButton type="submit">Continuer</FormButton>
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
