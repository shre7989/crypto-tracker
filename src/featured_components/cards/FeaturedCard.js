import React from "react";
import styled from "styled-components";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import FeaturedCardRow from "./FeaturedCardRow";

function FeaturedCard({ list, sym, header, sign }) {
  return (
    <FeaturedCardContainer>
      <FeaturedHeader>
        <h3>
          {sym} {header}
        </h3>
        <h4>{sign}</h4>
      </FeaturedHeader>
      {list.map((crypto, idx) => (
        <FeaturedCardRow
          key={idx}
          rank={idx + 1}
          crypto={crypto}
          header={header}
        />
      ))}
    </FeaturedCardContainer>
  );
}

const FeaturedCardContainer = styled.div`
  box-sizing: border-box;
  padding: 1rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 0.3rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 2px 3px rgba(0, 0, 0, 0.24);
`;
const FeaturedHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid lightgray;
  h1 {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-weight: bolder;
  }
  h4 {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 2px 3px rgba(0, 0, 0, 0.24);

    border-radius: 1rem;
    padding: 0.2rem;
    font-size: 14px;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    color: grey;
  }
`;

// const FeaturedCryptoCard = styled.div`
//   height: 50px;
//   font-size: 12px;
//   width: 100%;
//   font-weight: bold;
//   font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   .left {
//     text-align: left;
//     flex: 0.5;
//     display: grid;
//     grid-template-columns: repeat(4, 1fr);
//     align-items: center;
//     justify-content: space-between;
//     p {
//       padding-left: 0.3rem;
//     }
//   }
//   .right {
//     flex: 0.5;
//     display: flex;
//     flex-direction: row;
//     align-items: center;
//     justify-content: right;
//     text-align: right;
//     color: #75cb2c;
//   }
//   .label {
//     width: 100%;
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//   }

// `;
export default FeaturedCard;
