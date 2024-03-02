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

    .PhoneNum {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 8px;
      border: 1px solid rgb(228, 228, 231);
      background: rgb(253, 253, 253);
      box-shadow: rgba(0, 0, 0, 0.08) 0px 1px 3px 0px;
      padding: 6px 8px;

      .phoneSelect {
        width: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 2px 8px;
      }

      .phoneI {
        border: none;
        box-shadow: none;
        padding: 0;
        margin-left: 10px;
        &::placeholder {
          color: #8b8b8b;
          font-size: 14px;
          font-weight: 500;
        }
      }
    }

    .inputStyle {
      border-radius: 8px;
      border: 1px solid rgb(228, 228, 231);
      background: rgb(253, 253, 253);
      box-shadow: rgba(0, 0, 0, 0.08) 0px 1px 3px 0px;
      padding: 6px 8px;
      &::placeholder {
        color: #8b8b8b;
        font-size: 14px;
        font-weight: 500;
      }
    }

    .selectOption {
      font-size: 14px;
      .ant-select-selector {
        border-radius: 8px;
        border: 1px solid rgb(228, 228, 231);
        background: rgb(253, 253, 253);
        box-shadow: rgba(0, 0, 0, 0.08) 0px 1px 3px 0px;
        font-size: 18px;
        font-weight: bold;
        color: #5e5e5e;

        &:hover,
        &:focus {
          outline: 0 !important;
          border: 1px solid rgb(228, 228, 231) !important;
        }

        &:focus {
          box-shadow: rgba(0, 0, 0, 0.08) 0px 1px 3px 0px !important;
        }
      }

      .ant-select-selection-item {
        font-size: 20px;
        line-height: 28px;
        font-weight: 500;
      }

      &:hover .ant-select-selector,
      &:focus .ant-select-selector {
        border-color: rgb(228, 228, 231) !important;
        box-shadow: rgba(0, 0, 0, 0.08) 0px 1px 3px 0px !important;
      }
    }

    .ant-btn {
      background-color: #1a2c68;
      font-weight: bold;
      color: #fff;
      font-size: 20px;
      width: 100%;
      height: unset;
      transition: all 0.3s ease-in-out;

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

  .testcl {
    border-radius: 8px;
    border: 1px solid rgb(228, 228, 231);
    /* background: rgb(253, 253, 253);
    box-shadow: rgba(0, 0, 0, 0.08) 0px 1px 3px 0px; */
  }
`;
