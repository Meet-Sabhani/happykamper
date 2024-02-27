import styled from "styled-components";

export const FooterStyle = styled.div`
  background-color: #1a2c68;
  color: #fff;
  padding: 40px 8%;
  display: flex;
  flex-direction: column;
  gap: 30px;

  .footer-top-container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .footer-left {
      img {
        padding-bottom: 20px;
      }
      p {
        display: flex;
        flex-direction: column;
        gap: 10px;
        a {
          color: #fff;
          text-decoration: none;
        }
      }
    }
  }

  .footer-right-container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 25px;
    .footer-right-part {
      display: flex;
      flex-direction: column;
      gap: 20px;

      h2 {
        color: #8d96b4;
      }
      .icons {
        display: flex;
        justify-content: space-between;
        gap: 14px;
        color: #fd0ea0;
        i {
          background-color: #fff;
          padding: 8px;
          border-radius: 6px;
          line-height: 20px;
          font-size: 20px;
          font-weight: bold;
        }
      }
      .Help {
        display: flex;
        flex-direction: column;
        gap: 12px;
      }
      .stores {
        display: flex;
        gap: 10px;
        img {
          width: 124px;
        }
      }
    }
  }
  @media (max-width: 992px) {
    text-align: center;
    padding: 24px 8%;

    .footer-top-container {
      flex-direction: column;
      gap: 20px;
    }
    .footer-left {
      margin: 0 auto;
    }
    .footer-right-container {
      flex-direction: column;
      margin: 0 auto;
      gap: 20px;
      .footer-right-part {
        .icons {
          justify-content: center;
          i {
            padding: 5px;
            font-size: 16px;
          }
        }
      }
    }
  }
  @media (max-width: 571px) {
    .ant-divider {
      display: none;
    }
    .footer-bottom-container {
      flex-direction: column;
    }
  }
  .footer-bottom-container {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
  }
`;
