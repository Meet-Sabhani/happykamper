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
    position: relative;
    height: 500px;
    width: 635px;
    overflow: hidden;
    border-bottom: 1px solid #000;

    img {
      width: 265.59px;
      height: 516.75px;
      position: relative;

      &:nth-child(1) {
        position: absolute;
        transform: rotate(-2deg);
        left: 10%;
        bottom: -10%;
      }
      &:nth-child(2) {
        position: absolute;
        transform: rotate(2deg);
        bottom: -10%;
        right: 10%;
      }
    }
    &::after {
      content: "";
      width: 635px;
      height: 635px;
      background-color: #1a2c68;
      position: absolute;
      border-radius: 50%;
      z-index: -1;
      top: 0;
    }
  }
  .mini-art-list {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    padding: 3%;
    .art {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
      img {
        background-color: #f1f4ff;
        padding: 15px;
        border-radius: 50%;
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
      font-size: 40px;
      text-align: center;
    }
    p {
      text-align: center;
    }
  }
`;
