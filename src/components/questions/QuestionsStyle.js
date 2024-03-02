import styled from "styled-components";

export const QuestionsStyle = styled.div`
  width: 80%;
  background-color: #d1fff8;
  border-radius: 20px;
  padding: 80px 203px;
  max-width: 1800px;
  margin: 80px auto;

  h1 {
    text-align: center;
    font-size: 48px;
  }

  p {
    padding: 20px 0;
    font-size: 20px;
    line-height: 1.2;
    text-align: center;
    color: #1a1a1a;
  }

  .CollapseWrap {
    display: flex;
    gap: 20px;
    flex-direction: column;
    padding: 20px 0;

    .collapse {
      background-color: #fff;

      .ant-collapse-header {
        display: flex;
        align-items: center;
        padding: 20px;
        font-size: 20px;
        line-height: 28px;
        font-weight: 600;
      }

      .ant-collapse-content-box {
        padding: 0px 20px 20px 43px;
      }
      .ant-collapse-content {
        border-top: hidden;
      }
      p {
        font-size: 16px;
        color: rgb(26, 26, 26);
        line-height: 20px;
        padding: 0;
        font-weight: 400;
        text-align: left;
      }
    }
  }
  @media (max-width: 992px) {
    h1 {
      font-size: 32px;
      line-height: 40px;
    }
    width: 95%;
    padding: 80px 48px;
  }
  @media (max-width: 600px) {
    padding: 20px;

    p {
      font-size: 16px;
      line-height: 1.2;
    }
    .CollapseWrap {
      .ant-collapse-header-text {
        font-size: 16px !important;
        line-height: 1.1 !important;
      }
      .ant-collapse-item {
        .ant-collapse-header span {
          font-size: 16px;
        }
      }
    }
  }
`;
