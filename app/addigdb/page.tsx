"use client";
import AddList from "@/components/AddList";
import AddSearch from "@/components/AddSearch";
import { useEffect, useState } from "react";
import { searchgame } from "../actions/igdb/games";

export default function Add() {
  const [searchValue, setSearchValue] = useState<{ name: string } | null>(null);
  const [searchResuls, setSearchResults] = useState({});
  const [searchLimit, setSearchLimit] = useState<number>(25);
  const [searchPage, setSearchPage] = useState<number>(1);

  useEffect(() => {
    if (searchValue) {
      searchgame({
        fields: {
          name: true,
          cover: true,
          platforms: true,
        },
        limit: searchLimit,
        page: searchPage,
        search: searchValue?.name || "",
      }).then((result) => {
        setSearchResults(result);
      });
    }
  }, [searchValue, searchLimit, searchPage]);

  return (
    <main>
      <Stack>
        <AddSearch
          onSearch={(newSearchValue) => setSearchValue(newSearchValue)}
        />
        results = {searchResuls.count}
        <AddList games={searchResuls.games} />
      </Stack>
    </main>
  );
}
