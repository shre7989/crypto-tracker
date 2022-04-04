import React from "react";
import styled from "styled-components";

function SearchBar({ setCryptoList, cryptoList }) {
  let list = cryptoList;

  const searchCrypto = function (event) {
    const val = event.target.value;
    setCryptoList(
      list
        .filter((crypto) =>
          crypto.name.toLowerCase().includes(val.toLowerCase())
        )
        .sort((prev, next) => prev.cmc_rank - next.cmc_rank)
        .slice(0, 200)
    );
  };

  return (
    <SearchBarContainer>
      <input
        type="text"
        placeholder="Search Crypto"
        onChange={(e) => searchCrypto(e)}
      ></input>
      {/* <div className="right">
        {" "}
        <div className="tag">Name</div>
        <div className="tag">Volume</div>
        <div className="tag">Crypto Id</div>
      </div> */}
    </SearchBarContainer>
  );
}

const SearchBarContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: black;
  width: 90vw;
  > input {
    flex: 1;
    padding: 10px;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    background-color: black;
    font-size: 20px;
    color: white;
  }
  /* .right {
    flex: 0.3;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-right: 1rem;
  }
  .tag {
    width: 100px;
    background-color: #242424;
    color: lightgrey;
    padding: 0.5rem;
    border-radius: 1rem;
    font-weight: normal;
    font-size: 10px;
    text-align: center;
    transition: all 0.3s;

    :hover {
      cursor: pointer;
      filter: brightness(120%);
    }
  } */
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;
export default SearchBar;
