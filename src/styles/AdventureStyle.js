import styled from "styled-components";

export const AdventureStyle = styled.div`
  .fSlider {
    display: flex;
    gap: 20px;
    img {
      position: relative;
      min-width: 424px;
      width: 424px;
      min-height: 320px;
      height: 320px;
      border-radius: 20px;
      object-fit: cover;
    }
  }

  position: relative;
  height: max-content;
  padding: 50px auto;
  margin-bottom: 10%;

  .adventureBox {
    background-color: #1a2c68;
    color: #fff;
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    width: 80%;
    border-radius: 20px;
    margin: 0 auto;
    position: absolute;
    bottom: 0%;
    transform: translate(-50%, 30%);
    left: 50%;

    h1 {
      font-size: 36px;
    }
  }
`;
