import styled from "styled-components";

export const HomeStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10%;
  max-width: 1800px;
  margin: 0 auto;

  .logo {
    width: 194px;
    height: 80px;
    img {
      height: 100%;
      width: 100%;
      object-fit: contain;
    }
  }

  .center {
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 10px 10%;
    gap: 24px;
    align-items: center;
    max-width: 80%;

    h1 {
      font-size: 50px;
      line-height: 54px;
      text-align: center;
    }
    p {
      font-size: 20px;
      line-height: 28px;
      color: #484848;
    }
  }
  .circal {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    position: relative;
    height: 550px;
    overflow: hidden;

    &::after {
      content: "";
      position: absolute;
      height: 1000px;
      width: 1000px;
      background-color: #f1f4ff;
      border-radius: 50%;
      top: 0;
      z-index: -1;
    }

    .download-options {
      .QR-text-container {
        display: flex;
        align-items: center;
        padding: 20px;
        gap: 20px;
        img {
          width: 120px;
          height: 120px;
          object-fit: cover;
        }
        span {
          color: #fd0ea0;
          animation: downloadOpacity infinite 2s;
          rotate: -6deg;
          font-weight: bold;
          font-size: 14px;

          @keyframes downloadOpacity {
            0% {
              opacity: 0;
            }
            100% {
              opacity: 1;
            }
          }
        }
      }
      .store-img-container {
        display: none;
      }
    }
  }
  @media (max-width: 992px) {
    .logo {
      display: none;
    }
    .center {
      gap: 10px;
      width: unset;
      padding: 70px 10px 30px;

      h1 {
        font-size: 32px;
        line-height: 1.2;
      }
    }
    .circal {
      .download-options {
        .QR-text-container {
          display: none;
        }
        .store-img-container {
          display: block;
          padding: 30px;
          display: flex;
          gap: 10px;
          img {
            width: 120px;
            height: 40px;
          }
        }
      }
    }
  }
  @media (max-width: 650px) {
    .logo {
      width: 154px;
      height: 70px;
    }
    .center {
      gap: 10px;
      width: unset;

      h1 {
        font-size: 24px;
        line-height: 1.1;
      }
    }
  }
`;
