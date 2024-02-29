import React from 'react';
import styled from "styled-components";
import {theme} from "../styles/ThemeStyled";

type CartButtonPropsType ={
    bgColor?: string
}
const StyledMainCardButton = styled.button<CartButtonPropsType>
    `
        font-size: 10px;
        line-height: 20px;
        padding: 3px 20px;
        background-color: ${props => props.bgColor || '#ff6c6c'};
        color: ${theme.colors.primary};
        border: 2px solid #4e71fe;
        border-radius: 5px;
        cursor: pointer;
        transition: all .4s;

        &:hover {
            color: ${theme.colors.secondary};
            background-color: ${theme.colors.primary};
        }
    `
const StyledSecondCardButton = styled(StyledMainCardButton)
`
    color: ${theme.colors.secondary};
    background-color: ${theme.colors.primary};

    &:hover {
        color: ${theme.colors.primary};
        background-color: ${theme.colors.secondary};
    }
`
export {StyledSecondCardButton, StyledMainCardButton};
