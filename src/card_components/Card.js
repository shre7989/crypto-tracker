import React from "react";
import styled from "styled-components";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function Card({ crypto }) {
  // const [symbol, setSymbol] = useState("");

  //useEffect(() => getCryptoInfo(setSymbol), []);
  return (
    <CardContainer>
      <div className="h-group">
        <StarBorderIcon className="icon" /> <p>{crypto.cmc_rank} </p>
      </div>
      <div className="h-group">
        <span></span>
        <img
          width="20px"
          height="20px"
          src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${crypto.id}.png`}
          alt="$"
        />
        {crypto.name}
        <br></br> <p className="secondary-label">{crypto.symbol}</p>
      </div>
      <div>{crypto.id}</div>
      <div>💲{Math.round(crypto.quote.USD.price)}</div>
      <div className="h-group">
        {crypto.quote.USD.percent_change_1h >= 0 ? (
          <>
            {" "}
            <ArrowDropUpIcon className="green" />{" "}
            <p className="green">
              {`${crypto.quote.USD.percent_change_1h}`.slice(0, 4)}%
            </p>
          </>
        ) : (
          <>
            {" "}
            <ArrowDropDownIcon className="red" />{" "}
            <p className="red">
              {`${crypto.quote.USD.percent_change_1h}`.slice(0, 4)}%
            </p>{" "}
          </>
        )}{" "}
      </div>
      <div className="h-group">
        {" "}
        {crypto.quote.USD.percent_change_24h >= 0 ? (
          <>
            {" "}
            <ArrowDropUpIcon className="green" />{" "}
            <p className="green">
              {`${crypto.quote.USD.percent_change_24h}`.slice(0, 4)}%
            </p>
          </>
        ) : (
          <>
            {" "}
            <ArrowDropDownIcon className="red" />{" "}
            <p className="red">
              {`${crypto.quote.USD.percent_change_24h}`.slice(0, 4)}%
            </p>{" "}
          </>
        )}{" "}
      </div>
      <div>{Math.round(crypto.circulating_supply)}</div>
      <div>💲{Math.round(crypto.quote.USD.market_cap / 1000000)} M</div>
      <div className="v-group">
        <p>💲{Math.round(crypto.quote.USD.volume_24h)}</p>
        <p className="secondary-label up-y small">
          {Math.round(crypto.quote.USD.volume_24h / crypto.quote.USD.price)}{" "}
          {crypto.symbol}
        </p>
      </div>
      <div>
        {crypto.platform ? (
          <p style={{ color: "blue" }}>{crypto.platform.name}</p>
        ) : (
          "🚫"
        )}
      </div>
    </CardContainer>
  );
}

const CardContainer = styled.div`
  display: grid;
  height: min-content;
  grid-template-columns: repeat(10, 1.2fr);
  align-items: center;
  justify-content: center;
  width: 90vw;
  font-size: 15px;
  border-bottom: 1px solid lightgrey;

  font-weight: 600;
  color: black;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  .secondary-label {
    font-style: normal;
    color: gray;
    font-weight: 600;
    padding-left: 0.3rem;
    font-size: 12px;
  }
  > .h-group {
    display: flex;
    align-items: center;
    align-content: center;
    text-align: start;
  }
  > .v-group {
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: center;
    transform: translateX(-25%);
  }
  .up-y {
    transform: translateY(-70%);
  }
  img {
    align-self: center;
    padding-right: 0.5rem;
  }
  .icon {
    height: 15px;
    width: 15px;
    margin-right: 0.5rem;
    :hover {
      cursor: pointer;
    }
  }

  .green {
    color: #00e034;
    font-weight: bold;
  }

  .red {
    color: red;
    font-weight: bold;
  }
`;
export default Card;
