"use server";
import {
  checkAuthenticationOrGetNew,
  getCurrentAutheticationData,
} from "./authentication";
import { IGDBFetchGames } from "@/types/igdb/games";
import gameSchema from "@/utils/schemas/games";
import { buildFieldsString, sanitizeString } from "@/utils/helpers";

export async function searchgame(params: IGDBFetchGames): Promise<{
  games: Array<object>;
  count: number;
}> {
  gameSchema.parse(params);
  await checkAuthenticationOrGetNew();
  const { search, limit, page, fields } = params;
  const sanitizedSearch = sanitizeString(search);
  const authentictionData = await getCurrentAutheticationData();
  const token = authentictionData?.token;
  const clientId = process.env.IGDB_CLIENT_ID;
  const fieldsString = buildFieldsString(fields);

  if (token === null || token === undefined || clientId === undefined)
    throw Error;

  const count = await fetchCountGames({
    searchString: sanitizedSearch,
    clientId,
    token,
  });
  const games = await fetchGames({
    searchString: sanitizedSearch,
    clientId,
    token,
    limit,
    page,
    fieldsString,
  });
  return {
    count: count,
    games: games,
  };
}

async function fetchCountGames({
  searchString,
  clientId,
  token,
}: {
  searchString: string;
  clientId: string;
  token: string;
}): Promise<number> {
  const countRepsone = await fetch("https://api.igdb.com/v4/games/count", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Client-ID": clientId,
      Authorization: `Bearer ${token}`,
    },
    body: ` search "${searchString}";`,
  });
  const responseData = await countRepsone.json();
  return responseData.count;
}

async function fetchGames({
  searchString,
  clientId,
  token,
  limit,
  page,
  fieldsString,
}: {
  searchString: string;
  clientId: string;
  token: string;
  limit: number;
  page: number;
  fieldsString: string;
}): Promise<Array<object>> {
  const response = await fetch("https://api.igdb.com/v4/games", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Client-ID": clientId,
      Authorization: `Bearer ${token}`,
    },
    body: `fields ${fieldsString}; search "${searchString}"; limit ${limit}; offset ${
      (page - 1) * limit
    };`,
  });
  return await response.json();
}

export async function searchCover(params: object): Promise<object> {
  await checkAuthenticationOrGetNew();
  const { id } = params;
  const authentictionData = await getCurrentAutheticationData();
  const token = authentictionData?.token;
  const clientId = process.env.IGDB_CLIENT_ID;

  if (token === null || token === undefined || clientId === undefined)
    throw Error;

  const cover = await fetchCoverArtwort({
    coverId: id,
    clientId,
    token,
  });

  return cover;
}

async function fetchCoverArtwort({ coverId, clientId, token }) {
  const response = await fetch("https://api.igdb.com/v4/covers", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Client-ID": clientId,
      Authorization: `Bearer ${token}`,
    },
    body: `fields *;where id=${coverId};`,
  });
  return await response.json();
}
