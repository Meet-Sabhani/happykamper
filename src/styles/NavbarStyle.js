import styled from "styled-components";

export const NavbarStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 7%;
  border-bottom: 1px solid #eee;

  .nav-left {
    display: flex;
    gap: 24px;

    ul {
      display: flex;
      align-items: center;
      gap: 10px;

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
    gap: 20px;
    select {
      color: #5e5e5e;
      font-size: 18px;
      border: none;
    }
    a {
      border: none;
      padding: 10px 20px;
      font-size: 1.3rem;
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
`;
