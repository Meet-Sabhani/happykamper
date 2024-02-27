import styled from "styled-components";

export const SafetyStyle = styled.div`
  max-width: 1600px;
  padding: 20px 3%;
  h1 {
    text-align: center;
    padding: 8% 0;
  }

  .cardWrap {
    background-color: #cfd7ff;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 40px;
    perspective: 200px;
    padding: 20px;

    position: relative;
    .card {
      display: flex;
      width: 100%;
      height: 100%;
      padding: 30px 20px;
      background-color: #1a2c68;
      border-radius: 40px;

      .card-left {
        width: 60%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 35px;
        color: #fff;
        padding: 0 0px 0 48px;
        width: 60%;
        img {
          width: 64px;
          height: 64px;
        }
        h2 {
          font-size: 48px;
        }
        p {
          font-size: 20px;
          line-height: 1.2;
        }
      }
      .card-right {
        width: 40%;

        img {
          position: absolute;
          bottom: 0;
          right: 0;
          height: 100%;
          max-height: 600px;
          width: 40%;
        }
      }
    }
  }

  @media (max-width: 992px) {
    .cardWrap {
      background-color: transparent;
      height: auto;
      border-radius: 25px;
      .card {
        width: 100%;
        height: fit-content;
        .card-left {
          width: 100%;
          padding: 20px;
          h2 {
            font-size: 32px;
          }
        }
        .card-right {
          display: none;
        }
      }
    }
  }
  @media (max-width: 600px) {
    .cardWrap {
      .card {
        .card-left {
          h2 {
            font-size: 25px;
          }
          p {
            font-size: 16px;
          }
        }
      }
    }
  }
`;
