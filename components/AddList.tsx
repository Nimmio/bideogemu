import { Card, Grid, GridCol, Stack } from "@mantine/core";
import React from "react";
import AddListGameCard from "./AddListGameCard";

const AddList = ({
  games,
}: {
  games: Array<{ name: string; id: number; cover?: number }>;
}) => {
  console.log("inside", games);
  return (
    <Grid justify="space-between">
      {games &&
        games.map((game) => (
          <Grid.Col key={game.id} maw="12.5em">
            <AddListGameCard
              name={game.name}
              coverId={game.cover || null}
              platform={game.platform}
            />
          </Grid.Col>
        ))}
    </Grid>
  );
};

export default AddList;
