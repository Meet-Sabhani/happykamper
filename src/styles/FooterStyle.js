import styled from "styled-components";

export const FooterStyle = styled.div`
  background-color: #1a2c68;
  color: #fff;
  padding: 48px 80px 24px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 1800px;

  .footer-top-container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .footer-left {
      margin-bottom: 40px;
      img {
        padding-bottom: 20px;
      }
      p {
        display: flex;
        flex-direction: column;
        font-size: 14px;
        gap: 12px;
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
    max-width: 688px;
    width: 54%;
    flex-wrap: wrap;
    .footer-right-part {
      display: flex;
      flex-direction: column;
      gap: 20px;

      h2 {
        color: #8d96b4;
        font-size: 20px;
      }
      .icons {
        display: flex;
        justify-content: space-between;
        gap: 14px;
        color: #fd0ea0;
        .icon-wrap {
          width: 36px;
          height: 36px;
          border-radius: 8px;
          background-color: #fff;
          display: flex;
          justify-content: center;
          align-items: center;
          i {
            line-height: 20px;
            font-size: 18px;
          }
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
    padding: 24px 8%;

    .footer-top-container {
      flex-direction: column;
      .footer-left {
        margin-bottom: 40px;
      }
    }
    .footer-right-container {
      width: 100%;
      .footer-right-part {
        .icons {
          i {
            padding: 5px;
            font-size: 16px;
          }
        }
      }
    }
  }
  @media (max-width: 668px) {
    .footer-right-container {
      flex-direction: column;
      gap: 24px;

      .footer-right-part {
        .icons {
          width: max-content;
        }
      }
    }
    .footer-bottom-container {
      flex-direction: column;
      .ant-space {
        display: none;
      }
    }
  }
  .footer-bottom-container {
    display: flex;
    gap: 20px;
    .ant-divider {
      border-color: #fff;
    }
    .bottom-right {
      display: flex;
      gap: 24px;
    }
  }
`;
