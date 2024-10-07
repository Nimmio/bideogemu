import AddGameInput from "@/components/AddGameInput";
import { Title } from "@mantine/core";
import React from "react";

const page = () => {
  return (
    <main>
      <Title>Add new Game</Title>
      <AddGameInput />
    </main>
  );
};

export default page;
