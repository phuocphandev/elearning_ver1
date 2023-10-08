import styled, { keyframes } from "styled-components";
const gradient = keyframes`
0%
    {background-position:0% 15%}
50%
    {background-position:100% 86%}
100%
    {background-position:0% 15%}
`;

export const Container = styled.div<ComponentProps>`
  background-color: #fff;
  border-radius: 40px;
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
  min-height: 300px;

  @media (min-width: 768px) {
    width: 100%;
    height: 100%;
    background-color: transparent;
  }
`;

interface ComponentProps {
  signingIn: boolean;
}
export const SignUpContainer = styled.div<ComponentProps>`
  border-radius: 40px;
  background: linear-gradient(
    139deg,
    #0a0a0a,
    #a0ab62,
    #0bf5b1,
    #1422d4,
    #1fe253
  );
  background-size: 600% 600%;
  animation: ${gradient} 20s ease infinite;
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
  transform: translateY(-100%);
  width: 100%;
  opacity: 0;
  @media (min-width: 768px) {
    transform: none;
    width: 50%;
    opacity: 0;
    z-index: 1;
    ${(props) =>
      props.signingIn !== true
        ? `
  transform: translateX(100%);
  opacity:1;
	z-index: 5;
	`
        : null}
  }

  ${(props) =>
    props.signingIn !== true
      ? `
  transform: translateY(0);
  opacity:1;
  background-color:#bebcbc;
	z-index: 5;
	`
      : null}
`;

export const SignInContainer = styled.div<ComponentProps>`
  background: linear-gradient(
      90deg,
      rgba(78, 208, 147, 0) 0%,
      rgba(78, 208, 147, 0.33) 33%,
      rgba(0, 0, 0, 1) 100%
    ),
    linear-gradient(
      45deg,
      rgba(38, 172, 190, 1) 0%,
      rgba(121, 104, 108, 1) 42%,
      rgba(145, 85, 85, 1) 54%,
      rgba(106, 63, 62, 1) 67%,
      rgba(8, 10, 6, 1) 100%
    );
  background-size: 600% 600%;
  animation: ${gradient} 20s ease infinite;
  border-radius: 40px;
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
  left: 0;
  width: 100%;
  @media (min-width: 768px) {
    width: 50%;
    z-index: 3;
    ${(props) =>
      props.signingIn !== true
        ? `transform: translateX(100%); opacity:0;`
        : null}
  }
  ${(props) =>
    props.signingIn !== true
      ? `transform: translateY(-100%); opacity:0;`
      : null}
`;

export const Form = styled.form<ComponentProps>`
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    ${(props) =>
    props.signingIn == true?'flex-direction:column'  
      : null}
  }
  display: block;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 20px;
  height: 100%;
  text-align: center;
`;

export const Title = styled.h1`
  font-weight: bold;
  font-size: 24px;
  margin: 0;
`;

export const Button = styled.button`
@media (min-width: 768px){
margin-top:10px;
}
  border-radius: 20px;
  border: 2px solid #042f40;
  background-image: linear-gradient(#42a1ec, #0070c9);
  /* background-color: #ff4b2b; */
  color: #ffffff;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
  &:active {
    transform: scale(0.95);
  }
  &:focus {
    outline: none;
  }
`;

export const GhostButton = styled(Button)`
  background-color: transparent;
  border-color: #ffffff;
`;

export const Anchor = styled.a`
  color: #333;
  font-size: 14px;
  text-decoration: none;
  margin: 15px 0;
`;

export const OverlayContainer = styled.div<ComponentProps>`
  display: none;
  @media (min-width: 768px) {
    display: block;
    border-radius: 40px;
    position: absolute;
    top: 0;
    left: 50%;
    width: 50%;
    height: 100%;
    overflow: hidden;
    transition: transform 0.6s ease-in-out;
    z-index: 100;
    ${(props) =>
      props.signingIn !== true ? `transform: translateX(-100%);` : null}
  }
`;

export const Overlay = styled.div<ComponentProps>`
  @media (min-width: 768px) {
    background: radial-gradient(
      circle,
      rgba(105, 210, 237, 0.9977240896358543) 0%,
      rgba(32, 26, 56, 1) 95%
    );

    background-repeat: no-repeat;
    background-size: cover;
    background-position: 0 0;
    color: #ffffff;
    position: relative;
    left: -100%;
    height: 100%;
    width: 200%;
    transform: translateX(0);
    transition: transform 0.6s ease-in-out;
    ${(props) =>
      props.signingIn !== true ? `transform: translateX(50%);` : null}
  }
`;

export const OverlayPanel = styled.div<ComponentProps>`
  @media (min-width: 768px) {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 40px;
    text-align: center;
    top: 0;
    height: 100%;
    width: 50%;
    transform: translateX(0);
    transition: transform 0.6s ease-in-out;
  }
`;

export const LeftOverlayPanel = styled(OverlayPanel)`
  @media (min-width: 768px) {
    transform: translateX(-20%);
    ${(props) =>
      props.signingIn !== true ? `transform: translateX(0);` : null}
  }
`;

export const RightOverlayPanel = styled(OverlayPanel)`
  @media (min-width: 768px) {
    right: 0;
    transform: translateX(0);
    ${(props) =>
      props.signingIn !== true ? `transform: translateX(20%);` : null}
  }
`;
export const Paragraph = styled.p`
  font-size: 14px;
  font-weight: 100;
  line-height: 20px;
  letter-spacing: 0.5px;
  margin: 20px 0 30px;
`;
