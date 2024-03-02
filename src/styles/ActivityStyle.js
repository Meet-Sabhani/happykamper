import styled from "styled-components";

export const ActivityStyle = styled.div`
  max-width: 1800px;
  margin: 0 auto;

  .activity-parents {
    display: flex;
    justify-content: space-between;
    width: 80%;
    margin: 0 auto;
    padding: 30px 160px;

    .parent,
    .provider {
      padding: 20px;
      width: 50%;

      h2 {
        line-height: 1.3;
        font-weight: bold;
        font-size: 28px;
      }
      p {
        font-size: 16px;
        line-height: 20px;
        color: rgb(26, 26, 26);
      }
    }
    .parent {
      border-bottom: 4px solid pink;
    }
    .provider {
      border-bottom: 4px solid #eee;
    }
  }
  @media (max-width: 1024px) {
    .activity-parents {
      width: 100%;
      padding: 30px 80px;
    }
  }
  @media (max-width: 667px) {
    .activity-parents {
      padding: 20px;

      .parent,
      .provider {
        padding: unset;
        h2 {
          font-size: 16px;
          line-height: 20px;
        }
        p {
          font-size: 14px;
          line-height: 18px;
        }
      }
    }
  }
`;
