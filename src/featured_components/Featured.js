import React from "react";
import styled from "styled-components";
import FeaturedCard from "./cards/FeaturedCard";
function Featured({ cryptoList }) {
  console.log(cryptoList);

  return (
    <FeaturedContainer>
      <FeaturedCard
        list={getTrendingCrypto(cryptoList)}
        sym="๐ฅ"
        header="Trending"
        sign="โกโกโก"
      />
      <FeaturedCard
        list={getGainerCrypto(cryptoList)}
        sym="๐น"
        header="Gainers"
        sign="โ๏ธโ๏ธโ๏ธ"
      />
      <FeaturedCard
        list={getLosersCrypto(cryptoList)}
        sym="๐"
        header="Losers"
        sign="๐ป๐ป๐ป"
      />
    </FeaturedContainer>
  );
}

function getTrendingCrypto(cryptoList) {
  let arr = cryptoList
    .sort((prev, next) => next.quote.USD.volume_24h - prev.quote.USD.volume_24h)
    .slice(0, 5);
  console.log(arr);
  return arr;
}

function getGainerCrypto(cryptoList) {
  let arr = cryptoList
    .sort(
      (prev, next) =>
        next.quote.USD.percent_change_24h - prev.quote.USD.percent_change_24h
    )
    .slice(0, 5);
  return arr;
}

function getLosersCrypto(cryptoList) {
  let arr = cryptoList
    .sort(
      (prev, next) =>
        prev.quote.USD.percent_change_24h - next.quote.USD.percent_change_24h
    )
    .slice(0, 5);
  return arr;
}
const FeaturedContainer = styled.div`
  width: 90vw;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 2rem;
  align-item: center;
`;
export default Featured;
