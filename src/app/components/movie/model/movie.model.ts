export class Movie {
  Title: string;
  Year: string;
  Director: string;
  imdbRating: string;
  Poster: string;
  addedToLibrary: boolean;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Ratings: SourceValue[];
  Metascore: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: string;
}

export class SourceValue {
  Source: string;
  Value: string;
}
