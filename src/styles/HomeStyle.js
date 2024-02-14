import styled from "styled-components";

export const HomeStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .logo {
    width: 194px;
    height: 80px;
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }

  .center {
    display: flex;
    flex-direction: column;
    gap: 24px;
    align-items: center;

    h1 {
      font-size: 50px;
      line-height: 54px;
    }
  }
  .circal {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    position: relative;
    overflow: hidden;

    &::after {
      position: absolute;
      content: "";
      height: 1000px;
      width: 1000px;
      background-color: #f1f4ff;
      border-radius: 50%;
      top: 0;
      z-index: -1;
    }

    .downloadQR {
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
        animation: downloadOpicy infinite 2s;
        rotate: -6deg;

        @keyframes downloadOpicy {
          0% {
            opacity: 0;
          }
          25% {
            opacity: 0.25;
          }

          50% {
            opacity: 0.5;
          }

          75% {
            opacity: 0.75;
          }

          100% {
            opacity: 1;
          }
        }
      }
    }
  }
`;
