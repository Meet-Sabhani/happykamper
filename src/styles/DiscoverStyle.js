import styled from "styled-components";

export const DiscoverStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 749px;
  margin: 0 auto;
  padding: 5% 0;

  .mobile-circal {
    display: flex;
    justify-content: center;
    position: relative;
    height: 400px;
    width: 535px;
    overflow: hidden;
    border-bottom: 1px solid #000;

    img {
      width: 260px;
      height: 416.75px;
      object-fit: contain;
      position: relative;

      &:nth-child(1) {
        position: absolute;
        transform: rotate(-2deg);
        left: 8%;
        bottom: -60px;
      }
      &:nth-child(2) {
        position: absolute;
        transform: rotate(2deg);
        bottom: -70px;
        right: 8%;
      }
    }
    &::before {
      content: "";
      width: 500px;
      height: 500px;
      background-color: #1a2c68;
      position: absolute;
      border-radius: 50%;
      z-index: -1;
      top: 0;
    }
  }

  @media (max-width: 768px) {
    padding: 48px;

    .mobile-circal {
      height: 180px;
      max-width: 248px;
      img {
        width: 114.35px;
        height: 222.87px;
      }
      &::before {
        height: 248px;
        width: 248px;
      }
    }
  }

  .mini-art-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    padding: 3% 0;
    .art {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;

      .img-wrap {
        border-radius: 50%;
        overflow: hidden;
        height: 64px;
        width: 64px;
      }
      img {
        background-color: #f1f4ff;
        object-fit: contain;
        height: 100%;
        width: 100%;
        padding: 15px;
      }
      h4 {
        color: #484848;
      }
    }
  }
  .text-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    h1 {
      font-size: 48px;
      text-align: center;
      color: #6a6a6a;
      span {
        color: #000;
      }
    }
    p {
      text-align: center;
      line-height: 1.2;
      font-size: 20px;
    }
  }

  @media (max-width: 600px) {
    padding: 48px 20px;

    .text-container {
      h1 {
        font-size: 28px;
      }
      p {
        font-size: 16px;
        line-height: 1.1;
      }
    }
  }
`;
