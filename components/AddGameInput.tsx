"use client";
import { create } from "@/app/actions/games/crud";
import { Button, Card, Select, Stack, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";

// TODOS: Release Date, IGDB, Platform autocomplete, TYPES
const AddGameInput = () => {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      name: "",
      platform: "",
      status: "BACKLOG",
    },

    validate: {
      name: (value) => (value !== "" ? null : "Invalid Game Name"),
    },
  });

  const handleSubmit = (values) => {
    create(values);
  };
  return (
    <>
      <Card withBorder>
        <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
          <Stack>
            <TextInput
              withAsterisk
              label="Name"
              placeholder="Game Name"
              key={form.key("name")}
              {...form.getInputProps("name")}
            />
            <TextInput
              label="Platform"
              placeholder="Game Platform"
              key={form.key("platform")}
              {...form.getInputProps("platform")}
            />
            <Select
              label="Status"
              data={[
                { value: "BACKLOG", label: "Backlog" },
                { value: "PLAYING", label: "Playing" },
                { value: "DROPPED", label: "Dropped" },
                { value: "FINISHED", label: "Finished" },
                { value: "HOLD", label: "Hold" },
                { value: "CONTINOUS", label: "Continous" },
                { value: "UPCOMING", label: "Upcoming" },
                { value: "PREORDER", label: "Preorder" },
                { value: "NOT_PURCHASED", label: "Not Purchased" },
              ]}
              key={form.key("status")}
              {...form.getInputProps("status")}
            />
            <Button type="submit">Save Game</Button>
          </Stack>
        </form>
      </Card>
    </>
  );
};

export default AddGameInput;
