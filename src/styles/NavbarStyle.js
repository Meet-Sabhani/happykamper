import styled from "styled-components";

export const NavbarStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 80px;
  border-bottom: 1px solid #eee;
  max-width: 1800px;
  position: relative;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;
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

  .nav-right {
    display: flex;
    align-items: center;
    gap: 20px;

    :where(.css-dev-only-do-not-override-1xg9z9n).ant-select-outlined:not(
        .ant-select-customize-input
      )
      .ant-select-selector {
      border: unset;
    }
    :where(.css-dev-only-do-not-override-1xg9z9n).ant-select-single
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
  .menu {
    display: none;
  }

  @media (max-width: 992px) {
    padding: 12px 20px;

    .reslogo {
      display: block;
      img {
        width: 58px;
        height: 24px;
      }
    }

    .nav-left {
      display: none;
    }

    .nav-right {
      a {
        font-size: 13px;
        padding: 8px;
      }
      .ant-select {
        display: none;
      }
    }

    .showMenu {
      display: flex;
      gap: 10px;

      ul {
        display: flex;
        flex-direction: column;
        align-items: start;
        padding: 0 59px;
        gap: 10px;
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        background-color: #fff;
        z-index: 9;
        li {
          &:nth-child(1) {
            display: none;
          }
          a {
            font-size: 20px;
          }
        }
      }
    }

    .nav-right {
      display: flex;
      align-items: center;
      select {
        display: none;
      }
      .menu {
        display: flex;
        flex-direction: column;
        gap: 5px;
        .menu-line {
          height: 5px;
          width: 34px;
          background-color: #000;
          transition: 0.5s;
        }
      }
      .openMenu {
        transition: 0.5s;
        .menu-line {
          &:nth-child(1) {
            transform: rotate(45deg) translate(3px, 3px);
          }
          &:nth-child(2) {
            transform: rotate(-45deg) translate(3px, -3px);
          }
          &:nth-child(3) {
            display: none;
          }
        }
      }
    }
  }
`;
