import React from "react";
import styled from "styled-components";

export const DownloadNow = () => {
  const DwonloadStyle = styled.div`
    a {
      background-color: #fd0ea0;
      color: #fff;
      padding: 12px 16px;
      text-decoration: none;
      border-radius: 10px;
      font-weight: bold;
      font-size: 22px;
    }
    @media (max-width: 600px) {
      a {
        padding: 8px 12px;
        font-size: 13px;
      }
    }
  `;
  return (
    <DwonloadStyle>
      <a href="">Download Happy Kamper Now</a>
    </DwonloadStyle>
  );
};
