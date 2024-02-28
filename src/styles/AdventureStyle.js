import styled from "styled-components";

export const AdventureStyle = styled.div`
  position: relative;
  height: max-content;
  padding: 48px 0;
  max-width: 1800px;
  margin: 2rem auto 8rem;

  .sliders-container {
    display: flex;
    gap: 20px;
    flex-direction: column;
  }
  .fSlider-container {
    display: flex;
    overflow: hidden;
    gap: 20px;
  }
  .fSlider {
    display: flex;
    gap: 20px;
    white-space: normal;
    animation: slide 12s infinite linear;
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
  @keyframes slide {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-100%);
    }
  }

  .SecSlider-container {
    display: flex;
    overflow: hidden;
    gap: 20px;

    .SecSlider {
      display: flex;
      gap: 20px;
      animation: slideSen 12s infinite linear;
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
  }

  @keyframes slideSen {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0);
    }
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
    .fSlider {
      img {
        min-width: 204px;
        width: 204px;
        min-height: 174px;
        height: 174px;
        border-radius: 12px;
      }
    }
    .SecSlider-container {
      .SecSlider {
        img {
          min-width: 204px;
          width: 204px;
          min-height: 174px;
          height: 174px;
          border-radius: 12px;
        }
      }
    }
    .adventureBox {
      gap: 15px;
      width: 90%;
    }
  }
  @media (max-width: 668px) {
    .fSlider {
      img {
        min-width: 164px;
        width: 164px;
        min-height: 124px;
        height: 124px;
        border-radius: 12px;
      }
    }
    .SecSlider-container {
      .SecSlider {
        img {
          min-width: 164px;
          width: 164px;
          min-height: 124px;
          height: 124px;
          border-radius: 12px;
        }
      }
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
