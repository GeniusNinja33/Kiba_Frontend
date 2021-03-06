import styled, { createGlobalStyle } from "styled-components";
import { get } from "styled-system";
import css from "@styled-system/css";

export const InjectRTL = styled.div`
  ${({ lang }) =>
    (lang === "ar" || lang === "he") &&
    `
    font-family: 'Cairo', sans-serif;
    `}
`;

export const GlobalStyle = createGlobalStyle(({ theme }) =>
  css({
    "*, *::before, *::after": {
      boxSizing: "border-box",
      outline: "none !important",
    },
    "*": {
      margin: 0,
      padding: 0,
    },
    "#__next": {
      width: "100%",
      height: "100%",
      overflowX: "hidden",
    },
    html: {
      scrollBehavior: "smooth",
      overflowX: "hidden",
    },
    body: {
      scrollBehavior: "smooth",
      transition: "all .1s ease-in-out",
      fontFamily: '"Roboto" ,sans-serif !important',
      lineHeight: "1.5",
      WebkitTextSizeAdjust: "100%",
      WebkitFontSmoothing: "antialiased",
      MozOsxFontSmoothing: "grayscale",
      button: {
        "-moz-user-select": "none",
        "-khtml-user-select": "none",
        "-webkit-user-select": "none",
        "-ms-user-select": "none",
        "user-select": "none",
      },
    },
    "::-webkit-scrollbar": {
      width: "3px",
    },
    "::-webkit-scrollbar-track": {
      boxShadow: "inset 0 0 5px grey",
      borderRadius: "10px",
    },
    " ::-webkit-scrollbar-thumb": {
      background: "#1A1B23",
      borderRadius: "6px",
    },
    h1: {
      color: "white",
      fontFamily: "base",
      fontSize: "5xl",
      fontWeight: "bolder",
      zIndex: 10,
      margin: 0,
    },
    h2: {
      color: "white",
      fontFamily: "base",
      fontSize: "4xl",
      fontWeight: "bold",
      zIndex: 10,
      margin: 0,
    },
    h3: {
      color: "white",
      fontFamily: "base",
      fontSize: "xl",
      fontWeight: "bold",
      zIndex: 10,
      margin: 0,
    },
    h4: {
      color: "white",
      fontFamily: "base",
      fontSize: "xl",
      fontWeight: "regular",
      zIndex: 10,
      margin: 0,
    },
    h5: {
      color: "white",
      fontFamily: "base",
      fontSize: "mm",
      fontWeight: "regular",
      zIndex: 10,
      margin: 0,
    },
    h6: {
      fontFamily: "base",
      fontSize: "base",
      fontWeight: "medium",
      zIndex: 10,
      margin: 0,
    },

    "p,span,button,li,div": {
      margin: 0,
      transition: get(theme, "all .1s ease-in-out"),
      fontFamily: '"Roboto" ,sans-serif !important',
      fontWeight: "900",
      fontSize: "12px",
      lineHeight: "1.5",
      textShadow: "1px 1px 1px rgba(0, 0, 0, 0.004)",
    },
    a: {
      fontFamily: "base",
      textDecoration: "none",
    },
    ul: {
      margin: 0,
      padding: 0,
      listStyle: "none",
    },
    li: {
      listStyle: "none",
    },
    pre: {
      fontFamily: "monospace",
      overflowX: "auto",
      code: {
        color: "inherit",
      },
    },
    code: {
      fontFamily: "monospace",
      fontSize: "inherit",
    },
    table: {
      width: "100%",
      borderCollapse: "separate",
      borderSpacing: 0,
    },
    th: {
      textAlign: "left",
      borderBottomStyle: "solid",
    },
    td: {
      textAlign: "left",
      borderBottomStyle: "solid",
    },
    button: {
      appearance: "none",
    },
    img: {
      maxWidth: "100%",
    },
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    ...theme.globals,
  })
);
