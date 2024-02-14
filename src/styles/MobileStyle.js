import styled from "styled-components";

export const MobileStyle = styled.div`
  position: relative;
  height: 450px;
  width: 100%;
  overflow: hidden;
  max-width: 1800px;

  img {
    width: 200px;
    height: 410px;

    &:nth-child(1) {
      position: absolute;
      bottom: -130px;
      left: 2px;
    }

    &:nth-child(2) {
      position: absolute;
      bottom: -100px;
      left: 15%;
      z-index: 3;
    }
    &:nth-child(3) {
      position: absolute;
      bottom: -70px;
      left: 30%;
      z-index: 4;
    }
    &:nth-child(4) {
      position: absolute;
      top: 63%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 5;
    }
    &:nth-child(5) {
      position: absolute;
      right: 30%;
      bottom: -70px;
      z-index: 4;
    }
    &:nth-child(6) {
      position: absolute;
      right: 15%;
      z-index: 3;
      bottom: -100px;
    }
    &:nth-child(7) {
      position: absolute;
      bottom: -130px;
      right: 2px;
    }
  }
`;
