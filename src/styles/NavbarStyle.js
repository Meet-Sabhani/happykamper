import styled from "styled-components";

export const NavbarStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 80px;
  max-width: 1800px;
  position: relative;
  margin: 0 auto;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
  background-color: #fff;

  .nav-left {
    display: flex;
    gap: 24px;

    ul {
      display: flex;
      align-items: center;
      gap: 20px;

      li {
        list-style: none;

        &:nth-child(1) {
          height: 40px;
          margin-right: 24px;
          img {
            object-fit: cover;
            height: 100%;
          }
        }

        a {
          text-decoration: none;
          font-size: 18px;
          color: #5e5e5e;
          transition: 0.5s;

          &:hover {
            color: #000;
          }
        }
      }
    }
  }

  /* .ant-drawer-body {
    padding: 0;
    background: #000;
  } */

  .nav-right {
    display: flex;
    align-items: center;
    gap: 20px;

    .ant-select-selector {
      border: unset;
    }
    .ant-select-selector {
      font-size: 18px;
      font-weight: bold;
      color: #5e5e5e;
    }

    a {
      border: none;
      padding: 10px 20px;
      font-size: 1.3rem;
      font-weight: bold;
      background-color: #fd0ea0;
      color: white;
      border-radius: 10px;
      text-decoration: none;
      transition: 0.5s;

      &:active {
        scale: 0.9;
      }
    }
  }

  .reslogo,
  .menu,
  .close {
    display: none;
  }

  @media (max-width: 992px) {
    padding: 12px 20px;

    .reslogo,
    .close {
      display: block;
      img {
        width: 58px;
        height: 24px;
      }
    }

    .nav-left {
      display: none;
    }

    .ant-drawer {
      .ant-drawer-body {
        ul {
          gap: 10px;
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: start;
          padding: 24px;
          gap: 10px;
          .close {
            position: absolute;
            right: 20px;
            top: 20px;
            font-size: 24px;
            font-weight: 100;
          }

          li {
            list-style: none;
            a {
              font-size: 20px;
            }
          }
        }
      }
    }

    .nav-right {
      display: flex;
      align-items: center;
      a {
        font-size: 13px;
        padding: 8px;
      }
      .ant-select {
        display: none;
      }
      .menu {
        display: flex;
        flex-direction: column;
        gap: 3px;
        cursor: pointer;
        .menu-line {
          height: 3px;
          width: 25px;
          border-radius: 3px;
          background-color: #000;
          transition: 0.5s;
        }
      }
    }
  }
`;
