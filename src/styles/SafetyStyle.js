import styled from "styled-components";

export const SafetyStyle = styled.div`
  max-width: 1800px;
  margin: 0 auto;
  padding: 20px 3%;
  .title {
    h1 {
      text-align: center;
      padding: 40px 3%;
      font-size: 48px;
    }
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
    max-width: 1050px;
    margin: 0 auto;

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
          font-size: 42px;
        }
        p {
          font-size: 20px;
          line-height: 28px;
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
    .title {
      h1 {
        padding: 30px 0;
        font-size: 32px;
      }
    }
    .cardWrap {
      height: auto;
      border-radius: 25px;
      .card {
        width: 100%;
        height: fit-content;
        border-radius: 25px;
        .card-left {
          width: 100%;
          padding: 20px;
          gap: 20px;
          h2 {
            font-size: 32px;
          }
        }
      }
    }
  }
  @media (max-width: 668px) {
    .cardWrap {
      padding: initial;
      .card {
        .card-left {
          gap: 15px;
          padding: initial;
          h2 {
            font-size: 25px;
          }
          p {
            font-size: 16px;
            line-height: 20px;
          }
        }
        .card-right {
          display: none;
        }
      }
    }
  }
`;
