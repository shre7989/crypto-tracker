import React from "react";
import styled from "styled-components";
import Card from "./card_components/Card";
import ListHeader from "./ListHeader";

function List({ cryptoList }) {
  return (
    <ListContainer>
      <ListHeader />
      {cryptoList
        .sort((prev, next) => prev.cmc_rank - next.cmc_rank) //sort by rank
        .map(
          (
            crypto,
            idx //map as card elements to be displayed
          ) => (
            <Card key={idx} crypto={crypto} />
          )
        )}
    </ListContainer>
  );
}

const ListContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export default List;
