import styled from "styled-components";

export const BannerStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3% 10%;
  background-color: #1a2c68;
  color: #fff;
  gap: 16px;
  width: 100%;

  .logos {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 100px;

    img {
      &:nth-child(1) {
        width: 150px;
        height: 50px;
        object-fit: cover;
      }
      &:nth-child(2) {
        width: 200px;
        height: 50px;
        object-fit: cover;
      }
    }
  }

  @media (max-width: 630px) {
    h2 {
      text-align: center;
    }
    .logos {
      gap: 20px;
      justify-content: center;
      img {
        &:nth-child(2) {
          display: none;
        }
      }
    }
  }
`;
