import styled from "styled-components";

export const QuestionsStyle = styled.div`
  margin: 0 auto;
  width: 80%;
  background-color: #d1fff8;
  border-radius: 20px;
  padding: 80px 18.1%;
  text-align: center;

  p {
    padding: 20px;
    font-size: 20px;
    line-height: 1.2;
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
  @media (max-width: 600px) {
    padding: 0 4%;
    p {
      font-size: 16px;
      line-height: 1.2;
    }
    .CollapseWrap {
      .ant-collapse-item {
        .ant-collapse-header span {
          font-size: 16px;
        }
      }
    }
  }
`;
