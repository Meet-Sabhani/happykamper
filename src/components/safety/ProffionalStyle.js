import styled from "styled-components";

export const ProffionalStyle = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 30px;
  padding: 40px 48px;

  .proffional {
    width: 50%;
    background-color: #fd0ea0;
    padding: 48px 40px;
    border-radius: 45px;
    color: #fff;
    display: flex;
    flex-direction: column;
    gap: 20px;
    .proffionalTop {
      display: flex;
      align-items: center;
      gap: 12px;
      img {
        width: 80px;
        object-fit: contain;
      }
      h1 {
        font-size: 48px;
        line-height: 0.9;
      }
    }
    p {
      font-size: 20px;
      line-height: 28px;
    }
  }
  @media (max-width: 992px) {
    flex-direction: column;
    padding: 10px 0;
    gap: 10px;
    .proffional {
      width: 100%;
      padding: 20px;
      border-radius: 25px;

      .proffionalTop {
        gap: 8px;
        img {
          width: 50px;
        }
        h1 {
          font-size: 32px;
        }
      }
    }
  }
  @media (max-width: 768px) {
    .proffional {
      width: 100%;
      .proffionalTop {
        h1 {
          font-size: 20px;
        }
      }
      p {
        font-size: 14px;
      }
    }
  }
`;
