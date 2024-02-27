import styled from "styled-components";

export const TestimonialsStyle = styled.div`
  padding: 80px 160px;
  text-align: center;
  display: flex;
  gap: 40px;
  flex-direction: column;
  max-width: 1800px;
  margin: 0 auto;

  .title {
    h1 {
      font-size: 48px;
      line-height: 1.2;
      padding-bottom: 40px;
    }
  }
  .review {
    width: 100%;
    background-color: #f5f6f8;
    padding: 48px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 25px;
    border-radius: 40px;

    h1 {
      line-height: 1.3;
      font-size: 48px;
      color: #464647;
    }
    img {
      width: 100px;
      height: 100px;
    }
    p {
      font-size: 20px;
      line-height: 1.2;
      div {
        color: #878889;
      }
    }
  }
  h2 {
    color: #484848;
    font-weight: normal;
  }
  .TestimonialBottom {
    display: flex;
    flex-direction: column;
    gap: 40px;

    .avatarsWrap {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 12px;
      img {
        width: 64px;
        height: 64px;
      }
    }
  }
  @media (max-width: 992px) {
    padding: 48px;
    .review {
      h1 {
        font-size: 32px;
      }
    }
  }
  @media (max-width: 768px) {
    padding: 48px 20px;
    gap: 24px;

    .title {
      h1 {
        font-size: 32px;
        line-height: 40px;
        padding-bottom: unset;
      }
    }

    .TestimonialBottom {
      padding: unset;
      h2 {
        font-size: 20px;
        padding: 10px 0;
      }
      .avatarsWrap {
        padding: unset;
        img {
          width: 48px;
          height: 48px;
        }
      }
    }
    .review {
      gap: 15px;
      padding: 20px;
      border-radius: 20px;

      img {
        height: 48px;
        width: 48px;
      }
      h1 {
        font-size: 24px;
        line-height: 1.1;
      }
      h2 {
        font-size: 18px;
        line-height: 20px;
      }
      p {
        font-size: 14px;
        line-height: 18px;
      }
    }
  }
`;
