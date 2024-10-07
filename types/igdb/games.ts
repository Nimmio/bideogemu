import { platform } from "os";

export interface IGDBFetchGames {
  search: string;
  limit: number;
  page: number;
  fields: {
    age_ratings?: boolean;
    aggregated_rating?: boolean;
    aggregated_rating_count?: boolean;
    alternative_names?: boolean;
    artworks?: boolean;
    bundles?: boolean;
    category?: boolean;
    checksum?: boolean;
    collection?: boolean;
    collections?: boolean;
    cover?: boolean;
    created_at?: boolean;
    dlcs?: boolean;
    expanded_games?: boolean;
    expansions?: boolean;
    external_games?: boolean;
    first_release_date?: boolean;
    follows?: boolean;
    forks?: boolean;
    franchise?: boolean;
    franchises?: boolean;
    game_engines?: boolean;
    game_localizations?: boolean;
    game_modes?: boolean;
    genres?: boolean;
    hypes?: boolean;
    involved_companies?: boolean;
    keywords?: boolean;
    language_supports?: boolean;
    multiplayer_modes?: boolean;
    name?: boolean;
    parent_game?: boolean;
    platforms?: boolean;
    player_perspectives?: boolean;
    ports?: boolean;
    rating?: boolean;
    rating_count?: boolean;
    release_dates?: boolean;
    remakes?: boolean;
    remasters?: boolean;
    screenshots?: boolean;
    similar_games?: boolean;
    slug?: boolean;
    standalone_expansions?: boolean;
    status?: boolean;
    storyline?: boolean;
    summary?: boolean;
    tags?: boolean;
    themes?: boolean;
    total_rating?: boolean;
    total_rating_count?: boolean;
    updated_at?: boolean;
    url?: boolean;
    version_parent?: boolean;
    version_title?: boolean;
    videos?: boolean;
    websites?: boolean;
  };
}

export interface IAddGameResult {
  name: string;
  platform: string;
}
