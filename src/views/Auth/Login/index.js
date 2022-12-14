import { useState } from "react";
import { useForm } from "react-hook-form";
import { View } from "react-native";
import { Container, Input, ResetPassword, SocialButton, TitlePage } from "../../../components";
import * as S from "./styles";

export const Login = () => {
  const [secure, setSecure] = useState(true);

  const { register, handleSubmit, control } = useForm();
  const onSubmit = data => console.log(data);

  const handlerSecure = () => {
    setSecure(!secure);
  };

  const handlerGoogle = () => {

  }

  const handlerApple = () => {

  }

  const goToRegister = () => {

  }
  return (
    <Container center>
      <TitlePage title="GoList" size="45px"/>
      <S.SectionText color="#181818" fontWeight="normal">
        Entre,{" "}
        <S.SectionText color="#FF4D4E" fontWeight="bold">
          organize
        </S.SectionText>{" "}
        e{" "}
        <S.SectionText color="#FF4D4E" fontWeight="bold">
          economize
        </S.SectionText>{" "}
        em suas compras.
      </S.SectionText>
      <Input
        name="email"
        placeholder="Informe o seu e-mail"
        type="email"
        keyboardType="email-address"
        textContentType="email"
        control={control}
      />
      <Input
        name="password"
        placeholder="Informe a sua senha"
        type="password"
        textContentType="password"
        secureTextEntry={secure}
        handlerSecure={handlerSecure}
        control={control} 
      />
      <ResetPassword/>
      <SocialButton onPressLogin={handleSubmit(onSubmit)}/>
    </Container>
  );
};
