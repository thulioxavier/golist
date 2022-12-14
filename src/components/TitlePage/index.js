import { Fragment } from "react";
import * as S from "./styles";
export const TitlePage = ({...props}) => {
    return (
        <Fragment>
            <S.Title size={props.size}>{props.title}</S.Title>
        </Fragment>
    );
}