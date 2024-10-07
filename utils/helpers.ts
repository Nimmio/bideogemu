import { IGDBFetchGames } from "@/types/igdb/games";

export function sanitizeString(str: string): string {
  str = str.replace(/[^a-z0-9áéíóúñü \.,_-]/gim, "");
  return str.trim();
}

export function buildFieldsString(fields: IGDBFetchGames["fields"]): string {
  let resultString = "";
  for (const [key, value] of Object.entries(fields)) {
    if (value) {
      if (resultString === "") resultString = key;
      else resultString = resultString.concat(",", key);
    }
  }
  return resultString;
}
