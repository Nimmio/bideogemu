import { Stack } from "@mantine/core";
import React from "react";
import ListGameCard from "./ListGameCard";

const ListGame = ({ games }) => {
  const gameList = games.map((game) => (
    <ListGameCard key={game.id} game={game} />
  ));

  return <Stack>{gameList}</Stack>;
};

export default ListGame;
