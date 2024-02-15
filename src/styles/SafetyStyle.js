import styled from "styled-components";

export const SafetyStyle = styled.div`
  max-width: 1600px;
  h1 {
    text-align: center;
    padding: 8% 0;
  }

  .cardWrap {
    background-color: #cfd7ff;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    perspective: 200px;

    .card {
      display: flex;
      width: 95%;
      height: 90%;
      background-color: #1a2c68;
      border-radius: 20px;
      .card-left {
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
      }
      .card-right {
        width: 40%;
        position: relative;
        height: 100%;

        img {
          position: absolute;
          top: 0;
          right: 0;
          height: 100%;
          width: 100%;
        }
      }
    }
  }

  @media (max-width: 992px) {
    .cardWrap {
      background-color: transparent;
      .card {
        width: 100%;
        height: fit-content;
        .card-left {
          width: 100%;
          padding: 38px;
        }
        .card-right {
          display: none;
        }
      }
    }
  }
`;
