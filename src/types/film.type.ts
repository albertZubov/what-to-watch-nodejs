export type Film = {
  name: string;
  description: string;
  datePublic: string;
  genre: FilmGenre;
  yearRelease: number;
  rating: number;
  previewSrc: string;
  videoSrc: string;
  actors: string[];
  director: string;
  duration: number;
  quantityComments: number;
  user: User;
  poster: string;
  backgroundImage: string;
  backgroundColor: string;
};

export enum FilmGenre {
  comedy = "comedy",
  crime = "crime",
  documentary = "documentary",
  drama = "drama",
  horror = "horror",
  family = "family",
  romance = "romance",
  scifi = "scifi",
  thriller = "thriller",
}

export type User = {
  avatarPath: string;
  email: string;
  name: string;
  // password: string;
};
