import styled, { css } from "styled-components";

/*
The "css" function is especially necessary if we want to include logic inside the CSS block. For example, we can write a JavaScript expression inside the css template literal to conditionally set the background color to yellow if 10 is greater than 5
*/
const test = css`
  ${10 > 5 && `background-color:lightgreen`}
`;

const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 3rem;
      font-weight: 600;
    `}

  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 2rem;
      font-weight: 600;
    `}

  ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 2rem;
      font-weight: 500;
    `}

  ${(props) =>
    props.as === "h4" &&
    css`
      font-size: 3rem;
      font-weight: 500;
      text-align: center;
    `}
`;

export default Heading;
