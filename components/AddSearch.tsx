"use client";
import { Button, Card, Stack, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";

const AddSearch = ({
  onSearch,
}: {
  onSearch: (values: { name: string }) => void;
}) => {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      name: "",
    },

    validate: {
      name: (value) => (value !== "" ? null : "Invalid name"),
    },
  });
  return (
    <Card withBorder>
      <form onSubmit={form.onSubmit((values) => onSearch(values))}>
        <Stack>
          <TextInput
            label="Name"
            placeholder="Name"
            key={form.key("name")}
            {...form.getInputProps("name")}
          />
          <Button type="submit">Submit</Button>
        </Stack>
      </form>
    </Card>
  );
};

export default AddSearch;
