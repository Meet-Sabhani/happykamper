import styled from "styled-components";

export const ContactStyle = styled.div`
  width: 80%;
  display: flex;
  background-color: #f5f6f8;
  padding: 5%;
  border-radius: 30px;
  margin: 10vh auto;

  .Contact-left {
    display: flex;
    height: 100%;
    justify-content: center;
    flex-direction: column;
    img {
      width: 248px;
      height: 212px;
    }
    h1 {
      font-size: 48px;
    }
  }
  .Contact-right {
    background-color: #fff;
    padding: 40px 48px;
    border-radius: 15px;
    border: 1px solid #F9F9F8;
  }
  @media (max-width: 768px) {
    margin: 5vh auto;

    .Contact-left {
      align-items: center;

      h1 {
        text-align: center;
      }
    }
    .Contact-right {
      padding: 20px;
    }
  }
`;
