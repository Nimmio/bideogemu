"use client";
import { update } from "@/app/actions/games/crud";
import { Button, Card, Select, Stack, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useRouter } from "next/navigation";
import { DateInput } from "@mantine/dates";
// TODOS: Release Date, IGDB, Platform autocomplete, TYPES, use Same Component for Update/NEW
const EditGameInput = ({ game }) => {
  const { id, name, platform, STATUS, releaseDate } = game;
  console.log(game);
  const router = useRouter();
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      name: name,
      platform: platform,
      status: STATUS,
      releaseDate: releaseDate,
    },

    validate: {
      name: (value) => (value !== "" ? null : "Invalid Game Name"),
    },
  });

  const handleSubmit = (values) => {
    update(values, id).then(() => {
      router.push("/list");
    });
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
            <DateInput
              label="Release Date"
              key={form.key("releaseDate")}
              {...form.getInputProps("releaseDate")}
            />
            <Button type="submit">Update Game</Button>
          </Stack>
        </form>
      </Card>
    </>
  );
};

export default EditGameInput;
