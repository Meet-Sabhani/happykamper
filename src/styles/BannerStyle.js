import styled from "styled-components";

export const BannerStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 37px 0;
  background-color: #1a2c68;
  color: #fff;
  gap: 12px;
  width: 100%;
  max-width: 1800px;
  margin: 0 auto;

  h2 {
    font-size: 20px;
  }

  .logos {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 100px;

    img {
      width: 122px;
      height: 40px;
      object-fit: contain;
    }
  }

  @media (max-width: 667px) {
    h2 {
      text-align: center;
      font-size: 18px;
    }
    .logos {
      gap: 20px;
      justify-content: center;
      img {
        width: 60.8px;
      }
    }
  }
`;
