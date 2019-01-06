import {ApiService} from "../../common/api.service";
import {Injectable, Injector} from "@angular/core";
import {Observable, of} from "rxjs/index";
import {Movie} from "../../components/movie/model/movie.model";

@Injectable({
  providedIn: "root"
})
export class MovieService extends ApiService {

  private readonly movieListUrl: string = "http://www.omdbapi.com/?t=";

  private movieListStub: Movie[] = [{
    "Title": "Batman vs. Robin",
    "addedToLibrary": false,
    "Year": "2015",
    "Rated": "PG-13",
    "Released": "14 Apr 2015",
    "Runtime": "80 min",
    "Genre": "Animation, Action, Adventure, Crime, Drama, Thriller",
    "Director": "Jay Oliva",
    "Writer": "Bob Kane (Batman created by), J.M. DeMatteis Snyder (characters created by: Talon & Court of Owls), Greg Capullo (characters created by: Talon & Court of Owls)",
    "Actors": "Stuart Allan, Troy Baker, Kevin Conroy, Trevor Devall",
    "Plot": "While Damian Wayne struggles to cope with Batman's no-killing rule, he soon starts to believe that his destiny lies within a secret society known as, The Court of Owls.",
    "Language": "English",
    "Country": "USA",
    "Awards": "2 nominations.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjI0ODY2MDE5Nl5BMl5BanBnXkFtZTgwMTk0NTcyNTE@._V1_SX300.jpg",
    "Ratings": [{"Source": "Internet Movie Database", "Value": "7.1/10"}, {
      "Source": "Rotten Tomatoes",
      "Value": "100%"
    }],
    "Metascore": "N/A",
    "imdbRating": "3",
    "imdbVotes": "15,366",
    "imdbID": "tt4324274",
    "Type": "movie",
    "DVD": "14 Apr 2015",
    "BoxOffice": "N/A",
    "Production": "WARNER BROTHERS PICTURES",
    "Website": "N/A",
    "Response": "True"
  },
    {
      "Title": "Flash 1",
      "addedToLibrary": false,
      "Year": "2015",
      "Rated": "PG-13",
      "Released": "14 Apr 2015",
      "Runtime": "80 min",
      "Genre": "Animation, Action, Adventure, Crime, Drama, Thriller",
      "Director": "Jay Oliva",
      "Writer": "Bob Kane (Batman created by), J.M. DeMatteis, Scott Snyder (comic book: Owls)",
      "Actors": "Stuart Allan, Troy Baker, Kevin Conroy, Trevor Devall",
      "Plot": "While Damian Wayne struggles  society known as, The Court of Owls.",
      "Language": "English",
      "Country": "USA",
      "Awards": "2 nominations.",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMjI0ODY2MDE5Nl5BMl5BanBnXkFtZTgwMTk0NTcyNTE@._V1_SX300.jpg",
      "Ratings": [{"Source": "Internet Movie Database", "Value": "7.1/10"}, {
        "Source": "Rotten Tomatoes",
        "Value": "100%"
      }],
      "Metascore": "N/A",
      "imdbRating": "2",
      "imdbVotes": "15,366",
      "imdbID": "tt4324274",
      "Type": "movie",
      "DVD": "14 Apr 2015",
      "BoxOffice": "N/A",
      "Production": "WARNER BROTHERS PICTURES",
      "Website": "N/A",
      "Response": "True"
    },
    {
      "Title": "SuperMan",
      "Year": "2015",
      "addedToLibrary": false,
      "Rated": "PG-13",
      "Released": "14 Apr 2015",
      "Runtime": "80 min",
      "Genre": "Animation, Action, Adventure, Crime, Drama, Thriller",
      "Director": "Jay Oliva",
      "Writer": "Bob Kane (Batman created by), J.M. DeMatteis, Scott Snyder",
      "Actors": "Stuart Allan, Troy Baker, Kevin Conroy, Trevor Devall",
      "Plot": "While Damian Wayne s within a secret society known as, The Court of Owls.",
      "Language": "English",
      "Country": "USA",
      "Awards": "2 nominations.",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMjI0ODY2MDE5Nl5BMl5BanBnXkFtZTgwMTk0NTcyNTE@._V1_SX300.jpg",
      "Ratings": [{"Source": "Internet Movie Database", "Value": "7.1/10"}, {
        "Source": "Rotten Tomatoes",
        "Value": "100%"
      }],
      "Metascore": "N/A",
      "imdbRating": "9",
      "imdbVotes": "15,366",
      "imdbID": "tt4324274",
      "Type": "movie",
      "DVD": "14 Apr 2015",
      "BoxOffice": "N/A",
      "Production": "WARNER BROTHERS PICTURES",
      "Website": "N/A",
      "Response": "True"
    },
    {
      "Title": "Harry Potter",
      "addedToLibrary": false,
      "Year": "2015",
      "Rated": "PG-13",
      "Released": "14 Apr 2015",
      "Runtime": "80 min",
      "Genre": "Animation, Action, Adventure, Crime, Drama, Thriller",
      "Director": "Jay Oliva",
      "Writer": "Bob Kane  Greg Capullo ",
      "Actors": "Stuart Allan, Troy Baker, Kevin Conroy, Trevor Devall",
      "Plot": "While Damian Wayne struggles to cope with Batman's.",
      "Language": "English",
      "Country": "USA",
      "Awards": "2 nominations.",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMjI0ODY2MDE5Nl5BMl5BanBnXkFtZTgwMTk0NTcyNTE@._V1_SX300.jpg",
      "Ratings": [{"Source": "Internet Movie Database", "Value": "7.1/10"}, {
        "Source": "Rotten Tomatoes",
        "Value": "100%"
      }],
      "Metascore": "N/A",
      "imdbRating": "6",
      "imdbVotes": "15,366",
      "imdbID": "tt4324274",
      "Type": "movie",
      "DVD": "14 Apr 2015",
      "BoxOffice": "N/A",
      "Production": "WARNER BROTHERS PICTURES",
      "Website": "N/A",
      "Response": "True"
    },
    {
      "Title": "English Vinglish",
      "Year": "2015",
      "Rated": "PG-13",
      "Released": "14 Apr 2015",
      "Runtime": "80 min",
      "Genre": "Animation, Action, Adventure, Crime, Drama, Thriller",
      "Director": "Jay Oliva",
      "Writer": "Boc b Patrullo characters created by: Talon & Court of Owls",
      "Actors": "Stuart Allan, Troy Baker, Kevin Conroy, Trevor Devall",
      "Plot": "While Damian Way he soon starts to belieociety known as, The Court of Owls.",
      "Language": "English",
      "Country": "USA",
      "Awards": "2 nominations.",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMjI0ODY2MDE5Nl5BMl5BanBnXkFtZTgwMTk0NTcyNTE@._V1_SX300.jpg",
      "Ratings": [{"Source": "Internet Movie Database", "Value": "7.1/10"}, {
        "Source": "Rotten Tomatoes",
        "Value": "100%"
      }],
      "Metascore": "N/A",
      "imdbRating": "7.1",
      "imdbVotes": "15,366",
      "imdbID": "tt4324274",
      "Type": "movie",
      "DVD": "14 Apr 2015",
      "BoxOffice": "N/A",
      "Production": "WARNER BROTHERS PICTURES",
      "Website": "N/A",
      "Response": "True",
      "addedToLibrary": false
    }];

  constructor(injector: Injector) {
    super(injector);
  }


  getMovieList(): Observable<Movie[]> {
    //return this.get(this.movieListUrl);
    return of(this.movieListStub);
  }

  getMovieListAddedToLibrary(): Observable<Movie[]> {
    return of(this.movieListStub.filter((movie: Movie) => movie.addedToLibrary));
  }

  removeMovieFromLibrary(movie: Movie): Observable<Movie[]> {
    this.updateMovie(movie);
    return this.getMovieListAddedToLibrary();
  }

  updateMovie(movie: Movie): Observable<Movie[]> {
    let index: number = -1;
    this.movieListStub.forEach((item: Movie, i: number) => {
      if (movie.Title === item.Title) { // should be compared with id. Due to stub using forEach other wise  http post call would have been enough
        index = i;
      }
    });
    this.movieListStub[index] = movie;
    return of(this.movieListStub);
  }


}
