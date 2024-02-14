import styled from "styled-components";

export const NavbarStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 8%;
  height: 80px;
  border-bottom: 1px solid #eee;
  .nav-left {
    display: flex;
    gap: 10px;

    .logo {
      height: 50px;
      img {
        object-fit: cover;
        height: 100%;
      }
    }

    ul {
      display: flex;
      align-items: center;
      gap: 10px;

      li {
        list-style: none;

        a {
          text-decoration: none;
          font-size: 1.3rem;
          color: #5e5e5e;
          border-radius: 10px;
          text-decoration: none;
        }
      }
    }
  }

  .nav-right {
    display: flex;
    gap: 20px;
    select {
      color: #5e5e5e;
      font-size: 1.3rem;
    }
    a {
      border: none;
      padding: 10px 20px;
      font-size: 1.3rem;
      background-color: #fd62c0;
      color: white;
    }
  }
`;
