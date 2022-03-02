export interface TvShows {
    page: number;
    results?: (TvShow)[] | null;
    total_results: number;
    total_pages: number;
}

export interface TvShow {
    poster_path: string;
    popularity: number;
    id: number;
    backdrop_path: string;
    vote_average: number;
    overview: string;
    first_air_date: string;
    origin_country?: (string | null)[] | null;
    genre_ids?: (number)[] | null;
    original_language: string;
    vote_count: number;
    name: string;
    original_name: string;
}
  