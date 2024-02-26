import styled from "styled-components";

export const AdventureStyle = styled.div`
  position: relative;
  height: max-content;
  padding: 50px 0;
  margin-bottom: 10%;
  .fSlider {
    display: flex;
    gap: 20px;
    img {
      position: relative;
      min-width: 424px;
      width: 424px;
      min-height: 320px;
      height: 320px;
      border-radius: 20px;
      object-fit: cover;
    }
  }

  .adventureBox {
    background-color: #1a2c68;
    color: #fff;
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    width: 80%;
    border-radius: 20px;
    margin: 0 auto;
    position: absolute;
    bottom: 0%;
    transform: translate(-50%, 30%);
    left: 50%;

    h1 {
      font-size: 36px;
    }
  }
  @media (max-width: 992px) {
    .fSlider {
      img {
        min-width: 204px;
        width: 204px;
        min-height: 174px;
        height: 174px;
        border-radius: 12px;
      }
    }
  }
  @media (max-width: 600px) {
    margin-bottom: 30%;
    .fSlider {
      img {
        min-width: 164px;
        width: 164px;
        min-height: 124px;
        height: 124px;
        border-radius: 12px;
      }
    }
    .adventureBox {
      transform: translate(-50%, 45%);
      padding: 20px;
      width: 90%;
      h1 {
        font-size: 24px;
      }
    }
  }
`;
