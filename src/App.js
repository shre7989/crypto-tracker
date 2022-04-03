import { useEffect, useState } from "react";
import List from "./List";
import SearchBar from "./SearchBar";
import Spinner from "react-spinkit";
import styled from "styled-components";

function App() {
  const [cryptoList, setCryptoList] = useState(false);

  useEffect(() => getCryptoCurrencyData(setCryptoList), []); //fetch the data from the api and set our crypto list

  return (
    <AppContainer>
      {cryptoList ? ( //display cryptolist only after it has been fetched and is not empty
        <>
          <SearchBar setList={setCryptoList} />
          <h1>Crypto Mania</h1>
          <List cryptoList={cryptoList} />
        </>
      ) : (
        //display loading animation until the fetch call complets and the cryptoList is not empty
        <Spinner
          className="spinner"
          name="line-scale-pulse-out"
          color="steelblue"
        />
      )}
    </AppContainer>
  );
}

function getCryptoCurrencyData(setCryptoList, setCryptoInfoList) {
  //fetch data of cryptocurrencies from the
  const requestHeader = {
    method: "GET",
    headers: {
      "X-CMC_PRO_API_KEY": "7d4545be-58d5-4169-8ccd-95d7468f86b4",
      "Retry-after": 50000,
    },
  };

  fetch("/v1/cryptocurrency/listings/latest?limit=5000", requestHeader)
    .then((res) => res.json())
    .then((cryptoList) => {
      setCryptoList(cryptoList.data);
    })
    .catch((err) => console.log(err));
}

// styles using styled components for jsx elements
const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  padding: 0;

  > .spinner {
    transform: translateY(47vh);
  }
  > h1 {
    align-self: flex-start;
    margin-left: 5vw;
    text-align: left;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-weight: bold;
  }
`;
export default App;
