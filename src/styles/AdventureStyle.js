import styled from "styled-components";

export const AdventureStyle = styled.div`
  position: relative;
  height: max-content;
  padding: 48px 0;
  max-width: 1800px;
  margin: 2rem auto 8rem;

  .slider-item {
    margin: 0 15px;
  }

  .slick-slide > div {
    margin: 2px 20px;
  }
  .slick-list {
    margin: 0 -20px;
  }

  img {
    position: relative;
    min-width: 424px;
    width: 424px;
    min-height: 320px;
    height: 320px;
    border-radius: 20px;
    object-fit: cover;
    margin: 0 50px;
  }
  .firstSliderWrap {
    overflow: hidden;
    width: 100%;
    margin: 0 auto;
  }

  .adventureBox {
    background-color: #1a2c68;
    color: #fff;
    padding: 48px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 20px;
    width: 80%;
    border-radius: 48px;
    margin: 0 auto;
    position: absolute;
    bottom: 0%;
    transform: translate(-50%, 30%);
    left: 50%;

    .text-div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 12px;
      h1 {
        font-size: 48px;
      }
      p {
        font-size: 20px;
        line-height: 1.2;
      }
    }
  }
  @media (max-width: 992px) {
    .adventureBox {
      gap: 15px;
      width: 90%;
    }
  }
  @media (max-width: 668px) {
    img {
      min-width: 164px;
      width: 164px;
      min-height: 124px;
      height: 124px;
      border-radius: 12px;
    }

    .adventureBox {
      transform: translate(-50%, 45%);
      padding: 20px;
      width: 90%;
      gap: 10px;
      border-radius: 20px;
      padding: 42px 0;

      .text-div {
        gap: 8px;
        h1 {
          font-size: 28px;
        }
        p {
          font-size: 14px;
          line-height: 20px;
        }
      }
    }
  }
`;
