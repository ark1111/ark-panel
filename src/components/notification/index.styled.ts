import { keyframes, styled } from "styled-components";

const toggle = keyframes`
  from {
    transform: translateX(400px);
  }

  to {
    transform: translateX(0px);
  }
`;

export const Box = styled.div`
  width: 400px;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.surface};
  position: fixed;
  right: 0;
  top: 0;
  z-index: 30;
  box-shadow: 0px 0px 19px -4px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  animation: ${toggle} 0.5s ease-in-out alternate;
`;


// -webkit-box-shadow: 0px 0px 19px -4px rgba(0,0,0,0.67);
// -moz-box-shadow: 0px 0px 19px -4px rgba(0,0,0,0.67);
// box-shadow: 0px 0px 19px -4px rgba(0,0,0,0.67);
