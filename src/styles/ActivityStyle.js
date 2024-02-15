import styled from "styled-components";

export const ActivityStyle = styled.div`
  .activity-parents {
    display: flex;
    justify-content: space-between;
    width: 80%;
    margin: 0 auto;
    padding: 30px 8%;

    .parent,
    .provider {
      text-align: center;
      padding: 20px;
      width: 50%;

      h2 {
        line-height: 1.3;
      }
    }
    .parent {
      border-bottom: 4px solid pink;
    }
    .provider {
      border-bottom: 4px solid #eee;
    }
  }
`;
