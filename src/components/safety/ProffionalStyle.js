import styled from "styled-components";

export const ProffionalStyle = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 30px;
  padding: 4%;

  .proffional {
    width: 50%;
    background-color: #fd0ea0;
    padding: 30px;
    border-radius: 20px;
    color: #fff;
    .proffionalTop {
      display: flex;
      gap: 15px;
      img {
        width: 80px;
        object-fit: contain;
      }
      h1 {
        font-size: 48px;
      }
    }
  }
  @media (max-width: 992px) {
    flex-direction: column;
    padding: 10px 0;
    .proffional {
      width: 100%;
      .proffionalTop {
        h1 {
          font-size: 32px;
        }
      }
    }
  }
`;
