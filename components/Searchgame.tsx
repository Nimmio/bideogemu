"use client";
import { searchgame } from "@/app/actions/igdb/games";
import { Button, TextInput } from "@mantine/core";
import React, { useState } from "react";

const Searchgame = () => {
  const [value, setValue] = useState("");
  const [games, setGames] = useState([{}]);
  const [count, setCount] = useState(0);

  const handleSearchGames = () => {
    searchgame({
      fields: { name: true, cover: true },
      limit: 25,
      page: 1,
      search: value,
    }).then(({ count, games: _games }) => {
      setCount(count);
      console.log(_games);
      setGames(_games);
    });
  };

  return (
    <main>
      <TextInput
        value={value}
        onChange={(event) => setValue(event.currentTarget.value)}
      />
      <Button onClick={handleSearchGames}>Test</Button>
      Count: {count}
      <ul>
        {games.map((game, index) => (
          <li key={index}>{game.name}</li>
        ))}
      </ul>
    </main>
  );
};

export default Searchgame;
