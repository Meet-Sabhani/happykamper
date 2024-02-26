import styled from "styled-components";

export const SliderStyle = styled.div`
  display: flex;
  gap: 5vw;

  margin: 0 auto;
  .slider-dPink {
    width: 90%;
    height: 100vh;
    border-radius: 30px;
    max-width: 1400px;
    margin: 0 auto;
    display: flex;
    background-color: #fd0ea0;
    align-items: center;
    padding: 4%;
    gap: 20px;
  }
  .slider-left {
    display: flex;
    height: 400px;
    width: 400px;
    background-color: #fff;
    border-radius: 50%;
    position: relative;
    img {
      width: 174px;
      height: 416px;
      object-fit: contain;
      &:nth-child(1) {
        position: absolute;
        top: 0px;
        left: 42px;
        transform: rotate(-3deg);
      }
      &:nth-child(2) {
        position: absolute;
        top: 10px;
        right: 42px;
        transform: rotate(3deg);
      }
    }
  }
  .slider-right {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #fff;
    gap: 20px;
    position: relative;
    height: 100%;

    img {
      width: 30px;
      height: 40px;
      position: absolute;
      right: 0;
      bottom: 0;
    }
  }

  @media (max-width: 750px) {
    .slider-dPink {
      flex-direction: column;
      height: auto;
      width: 90%;
      padding: 5%;
    }
    .slider-left {
      height: 248px;
      width: 248px;

      img {
        height: 248px;
        width: 248px;
        &:nth-child(1) {
          position: absolute;
          top: 0px;
          left: 42px;
          transform: rotate(3deg);
        }
        &:nth-child(2) {
          position: absolute;
          top: 10px;
          right: 42px;
          transform: rotate(-3deg);
        }
      }
    }
    .slider-right {
      width: 100%;
    }
  }
`;
