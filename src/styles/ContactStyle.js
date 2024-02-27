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
    align-items: center;
    justify-content: center;
    flex-direction: column;
    img {
      width: 300px;
    }
  }
  .Contact-right {
    background-color: #fff;
    padding: 48px;
    border-radius: 15px;
  }
  @media (max-width: 768px) {
    margin: 5vh auto;

    .Contact-left {
      h1 {
        text-align: center;
      }
    }
    .Contact-right {
      padding: 20px;
    }
  }
`;
