import styled from "styled-components";

export const ContactStyle = styled.div`
  width: 80%;
  display: flex;
  background-color: #f5f6f8;
  padding: 5%;
  border-radius: 30px;
  margin: 10vh auto;

  .Contact-left {
    img {
      width: 300px;
    }
  }
  .Contact-right {
    background-color: #fff;
    padding: 20px;
    border-radius: 15px;
  }
  @media (max-width: 768px) {
    margin: 5vh auto;
  }
`;
