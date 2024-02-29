import {createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    p {
        font-family: Inter-Medium;
    }

    h1, button {
        font-family: Inter-Bold;
    }
`