import styled from "styled-components";

export const ContactStyle = styled.div`
  width: 80%;
  display: flex;
  background-color: #f5f6f8;
  padding: 5%;
  border-radius: 30px;
  margin: 10vh auto;
  max-width: 1800px;
  margin: 80px auto;

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
      text-align: center;
    }
  }
  .Contact-right {
    max-width: 600;
    background-color: #fff;
    padding: 40px 48px;
    border-radius: 15px;
    border: 1px solid #e4e4e7;
    .ant-form-item-label {
      label {
        font-size: 18px;
      }
    }
    .ant-input {
      padding: 10px 12px;
      border-radius: 8px;
      border: 1px solid rgb(228, 228, 231);
      background: rgb(253, 253, 253);
      box-shadow: rgba(0, 0, 0, 0.08) 0px 1px 3px 0px;
      &::placeholder {
        color: #8b8b8b;
      }
    }
    .ant-btn {
      background-color: #1a2c68;
      font-weight: bold;
      color: #fff;
      font-size: 20px;
      width: 100%;
      height: unset;
      transition: all.3s ease-in-out;

      &:hover {
        background-color: #304177;
        color: #fff;
        border: none;
        scale: unset;
      }
    }
  }
  @media (max-width: 992px) {
    width: 100%;
    padding: 48px 20px;
    border-radius: unset;
    .Contact-right {
      /* border: none; */
      border-radius: 0 0 15px 15px;
      padding: 20px;
      border-top: none;
    }

    .Contact-left {
      border: 1px solid #e4e4e7;
      border-bottom: none;
      padding: 20px 20px 0;
      align-items: center;
      background-color: #fff;
      border-radius: 15px 15px 0 0;

      h1 {
        font-size: 36px;
      }
    }
  }
  @media (max-width: 768px) {
    margin: 5vh auto;

    .Contact-left {
      align-items: center;

      h1 {
        text-align: center;
        font-size: 30px;
        line-height: 1.2;
      }
    }
    .Contact-right {
      padding: 20px;
    }
  }
`;
