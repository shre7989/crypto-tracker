import React from "react";
import styled from "styled-components";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function FeaturedCardRow({ rank, crypto, header }) {
  const volume = Math.round(crypto.quote.USD.volume_24h / 1000000);
  const percentChange = Math.round(crypto.quote.USD.percent_change_24h);

  return (
    <FeaturedCardRowContainer>
      <LeftContainer>
        <p>{rank}</p>
        <LabelContainer>
          {" "}
          <img
            width="20px"
            height="20px"
            src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${crypto.id}.png`}
            alt="$"
          />{" "}
          <p>{crypto.name}</p>
          <p className="symbol">{crypto.symbol}</p>
        </LabelContainer>
      </LeftContainer>
      <RightContainer>
        {header === "Trending" ? (
          "🪙"
        ) : header === "Gainers" ? (
          <ArrowDropUpIcon className="green" />
        ) : (
          <ArrowDropDownIcon className="red" />
        )}
        {header === "Trending" ? (
          <p className="green">{volume + "M"}</p>
        ) : header === "Gainers" ? (
          <p className="green">{(percentChange + "").slice(0, 5) + "%"}</p>
        ) : (
          <p className="red">{(percentChange + "").slice(0, 5) + "%"}</p>
        )}
      </RightContainer>
    </FeaturedCardRowContainer>
  );
}

const FeaturedCardRowContainer = styled.div`
  height: 50px;
  font-size: 12px;
  width: 100%;
  font-weight: bold;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const LeftContainer = styled.div`
  text-align: left;
  flex: 0.5;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  justify-content: space-between;
  p {
    padding-left: 0.3rem;
  }
`;
const RightContainer = styled.div`
  flex: 0.5;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: right;
  text-align: right;
  .green {
    color: green;
  }
  .red {
    color: red;
  }
`;
const LabelContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .symbol {
    font-size: 10px;
    color: gray;
  }
`;
export default FeaturedCardRow;
