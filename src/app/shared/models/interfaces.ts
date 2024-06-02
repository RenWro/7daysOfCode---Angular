export interface RespostaAPI {
  films: string;
  people: string;
  planets: string;
  species: string;
  starships: string;
  vehicles: string;
}

export interface Result {
  count: number;
  results: FilmInfo[] | PeopleInfo[];
}

export interface Film {
  title?: string;
  episode_id?: number;
  opening_crawl?: string;
  director?: string;
  characters?: string[];
  url?: string;
}

export interface Item {
  results: FilmInfo[];
}

export interface PeopleInfo {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: any[];
  starships: any[];
  created: Date;
  edited: Date;
  url: string;
}

export interface FilmInfo {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: Date;
  characters: string[];
  planets: string[];
  starships: string[];
  vehicles: string[];
  species: string[];
  created: Date;
  edited: Date;
  url: string;
}
