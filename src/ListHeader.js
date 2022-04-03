import React from "react";
import styled from "styled-components";

function ListHeader() {
  return (
    <ListContainer>
      <h4>✅Rank</h4>
      <h4>🔥Name</h4>
      <h4>🆔Id</h4>
      <h4>💰Price</h4>
      <h4>⏳1h %</h4>
      <h4>⏱️24h %</h4>
      <h4>💣 Supply</h4>
      <h4>💵 Market Cap</h4>
      <h4>🔎Volume(24h)</h4>
      <h4>⚡Platform</h4>
    </ListContainer>
  );
}

const ListContainer = styled.div`
  width: 94vw;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  align-items: center;
  justify-content: center;
  color: black;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 12px;
  font-weight: bolder;
  border-top: 1px solid lightgray;
  border-bottom: 1px solid lightgray;
`;
export default ListHeader;
