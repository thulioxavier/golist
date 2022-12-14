import React, { Fragment } from "react";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import * as S from "./styles";
import { useWindowDimensions } from "react-native";
import { useController } from "react-hook-form";

export const Input = ({ control, name, ...props }) => {
  const windows = useWindowDimensions();

  const {field} = useController({
    control,
    defaultValue: '',
    name,
  })
  const { type, icon } = props;
  return (
    <Fragment>
      <S.InputContent maxWidth={windows.width + "px"}>
        {icon && (
          <S.IconContent>
            <AntDesign name={props.icon} size={24} color={props.iconColor} />
          </S.IconContent>
        )}

        <S.Input
          value={field.value}
          onChangeText={field.onChange}
          {...props}
          autoCorrect={type === "email" ? false : true}
          autoComplete={type === "email" ? type : "off"}
          autoCapitalize={
            type === "email" || type === "password" ? "none" : "words"
          }
        />
        {type === "password" && (
          <S.SecureButton onPress={() => props.handlerSecure()}>
            <Ionicons
              name={props.secureTextEntry ? "eye-off-outline" : "eye-outline"}
              size={24}
              color="#404040"
            />
          </S.SecureButton>
        )}
      </S.InputContent>
    </Fragment>
  );
};
