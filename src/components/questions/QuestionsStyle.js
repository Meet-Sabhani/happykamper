import styled from "styled-components";

export const QuestionsStyle = styled.div`
  margin: 0 auto;
  width: 80%;
  background-color: #d1fff8;
  border-radius: 20px;
  padding: 80px 16%;
  max-width: 1800px;


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

    :where(.css-dev-only-do-not-override-1xg9z9n).ant-collapse
      > .ant-collapse-item:last-child,
    :where(.css-dev-only-do-not-override-1xg9z9n).ant-collapse
      > .ant-collapse-item:last-child
      > .ant-collapse-header {
      border-radius: 8px;
      background-color: #fff;
      span {
        font-weight: 500;
        color: rgb(26, 26, 26);
        font-size: 20px;
        line-height: 28px;
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
