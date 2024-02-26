import styled from "styled-components";

export const TestimonialsStyle = styled.div`
  padding: 50px 10%;
  text-align: center;
  h1 {
    padding: 20px 0;
  }
  .review {
    width: 100%;
    background-color: #f5f6f8;
    padding: 35px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 25px;
    border-radius: 40px;

    h1 {
      line-height: 1.3;
      font-size: 36px;
      padding: unset;
    }
    img {
      width: 100px;
      height: 100px;
    }
    p {
      span {
        color: #484848;
      }
    }
  }
  .TestimonialBottom {
    padding: 25px;

    h2 {
      line-height: 1.3;
      padding: 20px 0;
      color: #484848;
    }

    .avatarsWrap {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 12px;
      padding: 30px;
      img {
        width: 64px;
        height: 64px;
      }
    }
  }
  @media (max-width: 768px) {
    .TestimonialBottom {
      padding: unset;
      .avatarsWrap {
        padding: 10px 0;
        img {
          width: 48px;
          height: 48px;
        }
      }
    }
    .review {
      gap: 15px;
      img {
        height: 48px;
        width: 48px;
      }
      h1 {
        font-size: 24px;
        line-height: 1.1;
      }
    }
  }
`;
