"use client";
import { Card, Grid, GridCol, Select, TextInput } from "@mantine/core";
import React, { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { useDebouncedState } from "@mantine/hooks";
import { useRouter } from "next/navigation";
const ListGameControl = (props: {
  name?: string;
  status?: string;
  platform?: string;
}) => {
  const {
    name: propName,
    status: propStatus,
    platform: propPlatform,
  } = props ?? {};

  const searchParams = useSearchParams();
  const [nameFilter, setNameFilter] = useDebouncedState<string>(
    propName || "",
    200
  );
  const [statusFilter, setStatusFilter] = useState<string | null>(
    propStatus || ""
  );
  const [platformFilter, setPlatformFilter] = useDebouncedState<string | null>(
    propPlatform || "",
    200
  );

  const pathname = usePathname();
  const { replace } = useRouter();

  useEffect(() => {
    const params = new URLSearchParams(searchParams);

    if (nameFilter !== "") {
      params.set("name", nameFilter);
    } else {
      params.delete("name");
    }
    if (statusFilter !== "" && statusFilter !== null) {
      params.set("status", statusFilter || "");
    } else {
      params.delete("status");
    }

    if (platformFilter !== "") {
      params.set("platform", platformFilter);
    } else {
      params.delete("platform");
    }
    replace(`${pathname}?${params.toString()}`);
  }, [
    nameFilter,
    statusFilter,
    platformFilter,
    searchParams,
    pathname,
    replace,
  ]);

  return (
    <Card withBorder>
      <Grid>
        <GridCol span={4}>
          <TextInput
            label="Name"
            defaultValue={propName || ""}
            onChange={(event) => {
              setNameFilter(event.currentTarget.value);
            }}
          />
        </GridCol>
        <GridCol span={4}>
          <Select
            label="Status"
            value={statusFilter}
            onChange={setStatusFilter}
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
          />
        </GridCol>
        <GridCol span={4}>
          <TextInput
            label="Platform"
            defaultValue={propPlatform || ""}
            onChange={(event) => {
              setPlatformFilter(event.currentTarget.value);
            }}
          />
        </GridCol>
      </Grid>
    </Card>
  );
};

export default ListGameControl;
