import React from "react";
import styled from "styled-components";
function ImagePanel() {
  return (
    <ImagePanelContainer>
      <div>
        {" "}
        <img src={require("./images/btc.jpg")} alt="btc" height="250px" />
        <h4>Bitcoin Shit Coin 🤷‍♂️🤷‍♂️🤷‍♂️</h4>
        <p>Bitcoin to shit gold everywhere</p>
      </div>
      <div>
        {" "}
        <img src={require("./images/doge.jpg")} alt="doge" height="250px" />
        <h4>Doggie set up to take on the world 🐕🐕🐕</h4>
        <p>Good Boy, many thanks, much appreciate</p>
      </div>
      <div>
        {" "}
        <img src={require("./images/eth.jpg")} alt="eth" height="250px" />
        <h4>Ethereum, the next revolution 🌄🌄🌄</h4>
        <p>What is this stuff</p>
      </div>
    </ImagePanelContainer>
  );
}

const ImagePanelContainer = styled.div`
  width: 90vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4rem;
  img {
    border-radius: 0.3rem;
    width: 29vw;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 2px 3px rgba(0, 0, 0, 0.24);
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: left;
  }
  h4 {
    text-align: left;
    font-weight: bold;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  }
  p {
    text-align: left;
    font-size: 12px;
    font-style: italic;
    color: grey;
  }
`;
export default ImagePanel;
