import styled from "styled-components";

export const HomeStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 7%;
  gap: 20px;
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

  .downloadQR {
    display: flex;
    align-items: center;
    img {
      width: 120px;
      height: 120px;
      object-fit: cover;
    }
    span {
      color: #fd0ea0;
      animation: downloadOpicy infinite 2s;

      @keyframes downloadOpicy {
        0% {
          opacity: 0;
        }
        40% {
          opacity: 0.25;
        }
        75% {
          opacity: 0.5;
        }
        100% {
          opacity: 1;
        }
      }
    }
  }
`;
