import React from "react";
import styled from "styled-components";

function SearchBar() {
  return (
    <SearchBarContainer>
      <input type="text" placeholder="Search Crypto"></input>
    </SearchBarContainer>
  );
}

const SearchBarContainer = styled.div`
  margin-top: 2rem;
  > input {
    padding: 15px;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    width: 600px;
    background-color: white;
    font-size: 20px;
    color: black;
    border: 0;
  }
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;
export default SearchBar;
