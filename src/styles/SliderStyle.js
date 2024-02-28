import styled from "styled-components";

export const SliderStyle = styled.div`
  display: flex;
  gap: 5vw;
  margin: 0 auto;
  max-width: 1400px;

  .slider-dPink {
    width: calc(100% - 40px);
    max-width: 1120px;
    height: 100vh;
    max-height: 800px;
    border-radius: 30px;
    margin: 0 auto;
    display: flex;
    background-color: #fd0ea0;
    align-items: center;
    padding: 48px;
    gap: 20px;
  }
  .slider-left {
    display: flex;
    height: 480px;
    width: 480px;
    min-width: 480px;
    background-color: #fff;
    border-radius: 50%;
    position: relative;
    img {
      width: 214px;
      height: 416px;
      object-fit: contain;
      top: 10%;
      &:nth-child(1) {
        position: absolute;
        left: 42px;
        transform: rotate(-3deg);
      }
      &:nth-child(2) {
        position: absolute;
        right: 42px;
        transform: rotate(3deg);
        top: 12%;
      }
    }
  }
  .slider-right {
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #fff;
    gap: 20px;
    position: relative;
    height: 100%;

    .carousel-title {
      font-size: 16px;
      font-weight: bold;
    }

    h1 {
      font-size: 48px;
      line-height: 1;
    }
    p {
      font-size: 20px;
      line-height: 1.2;
    }

    img {
      width: 30px;
      height: 40px;
      position: absolute;
      right: 0;
      bottom: 0;
    }
  }

  @media (max-width: 992px) {
    .slider-dPink {
      flex-direction: column;
      height: auto;
      width: calc(100% - 40px);
    }
    .slider-left {
      min-height: 248px;
      height: 248px;
      width: 248px;
      min-width: 248px;

      img {
        width: 110px;
        height: 215px;
        &:nth-child(1) {
          left: 0;
          left: 22px;
        }
        &:nth-child(2) {
          right: 22px;
        }
      }
    }
    .slider-right {
      width: 100%;
      gap: 4px;
      min-height: 206px;
      justify-content: start;

      h1 {
        font-size: 25px;
        line-height: 32px;
      }
      p {
        font-size: 16px;
        line-height: 20px;
      }
    }
  }
  @media (max-width: 667px) {
    .slider-right {
      gap: 8px;
      h1 {
        font-size: 28px;
      }
    }
  }
`;
