import React from "react";
import styled from "styled-components";

export const DownloadNow = () => {
  const DownloadStyle = styled.div`
    button {
      background-color: #fd0ea0;
      color: #fff;
      padding: 12px 16px;
      text-decoration: none;
      border-radius: 10px;
      font-weight: bold;
      font-size: 22px;
      border: none;
    }
    @media (max-width: 992px) {
      button {
        padding: 10px 14px;
        font-size: 18px;
      }
    }
    @media (max-width: 600px) {
      button {
        padding: 8px 12px;
        font-size: 13px;
      }
    }
  `;
  return (
    <DownloadStyle>
      <button>Download Happy Kamper Now</button>
    </DownloadStyle>
  );
};
