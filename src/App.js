import { useEffect, useState } from "react";
import List from "./ListComponents/List";
import SearchBar from "./SearchBar";
import Spinner from "react-spinkit";
import styled from "styled-components";
import Featured from "./featured_components/Featured";

function App() {
  const [cryptoList, setCryptoList] = useState(false);
  const [cryptoListCopy, setCryptoListCopy] = useState(false);
  const getCryptoCurrencyData = function (setCryptoList) {
    //fetch data of cryptocurrencies from the
    const requestHeader = {
      method: "GET",
      headers: {
        "X-CMC_PRO_API_KEY": "7d4545be-58d5-4169-8ccd-95d7468f86b4",
        "Retry-after": 50000,
      },
    };

    fetch("/v1/cryptocurrency/listings/latest?limit=1000", requestHeader)
      .then((res) => res.json())
      .then((cryptoList) => {
        setCryptoList(cryptoList.data);
        setCryptoListCopy(cryptoList.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => getCryptoCurrencyData(setCryptoList, setCryptoListCopy), []); //fetch the data from the api and set our crypto list

  return (
    <AppContainer>
      {cryptoList && cryptoListCopy ? ( //display cryptolist only after it has been fetched and is not empty
        <>
          <h1>🪙CRYPTO AT A GLANCE...</h1>
          <hr />
          <Featured cryptoList={cryptoListCopy} />
          <SearchBar
            setCryptoList={setCryptoList}
            cryptoList={cryptoListCopy}
          />
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
    letter-spacing: 1px;
    align-self: flex-start;
    margin-left: 5vw;
    text-align: left;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-weight: bold;
  }
`;
export default App;
