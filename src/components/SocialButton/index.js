import { Fragment } from "react";
import * as S from "./styles";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { Platform } from "react-native";

export const SocialButton = ({
  onPressGoogle,
  onPressApple,
  onPressLogin,
  onPressRegister,
}) => {
  return (
    <Fragment>
      <S.ButtonRow>
        <S.Button
          bg="#FF4D4E"
          style={{ marginRight: 5 }}
          justifyContent="center"
          onPress={onPressLogin}
        >
          <S.ButtonLabel>Entrar</S.ButtonLabel>
        </S.Button>

        <S.ButtonSocial
          bg="#5583EC"
          style={{ marginRight: 5 }}
          justifyContent="space-between"
          onPress={onPressGoogle}
        >
          <S.SocialIcon>
            <AntDesign name="google" size={24} color="#fff" />
          </S.SocialIcon>
        </S.ButtonSocial>
        <S.ButtonSocial
          bg="#181818"
          justifyContent="space-between"
          onPress={onPressApple}
        >
          <S.SocialIcon>
            <AntDesign name="apple-o" size={24} color="#fff" />
          </S.SocialIcon>
        </S.ButtonSocial>
      </S.ButtonRow>
      <S.ButtonRow>
          
        <S.Button bg="#181818" justifyContent="center" type="clean" onPress={onPressRegister}>
          <S.ButtonLabel color="#181818">Cadastre-se</S.ButtonLabel>
        </S.Button>
      </S.ButtonRow>
    </Fragment>
  );
};
