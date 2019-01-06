import {Component, OnInit} from '@angular/core';
import {MovieService} from "../../../shared/movie/movie.service";
import {Movie} from "../../../components/movie/model/movie.model";

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.less']
})
export class HomeComponent implements OnInit {

  set searchText(newValue: string) {
    this._searchText = newValue;
    this.filterMovies();
  }

  get searchText(): string {
    return this._searchText;
  }

  _searchText: string;
  _movies: Movie[];
  _filterMovies: Movie[];


  constructor(private movieService: MovieService) {
  }


  ngOnInit(): void {
    this.movieService.getMovieList().subscribe((movies: Movie[]) => {
      this._movies = movies;
      this._filterMovies = movies;
    });
  }

  private filterMovies(): void {
    this._movies && ( this._filterMovies = this._movies.filter((movie: Movie) => {
      const expression = movie.Title;
      const regExpression = new RegExp(this.searchText, "i");
      const res = expression.search(regExpression);
      return res >= 0;
    }));
  }

  _addMovieToLibrary(movie: Movie): void {
    movie.addedToLibrary = true;
    this.movieService.updateMovie(movie).subscribe((movies: Movie[]) => {
      this._movies = movies;
      this._filterMovies = movies;
    });
  }

  _updateRating(movie: Movie): void {
    this.movieService.updateMovie(movie).subscribe((movies: Movie[]) => {
      this._movies = movies;
      this._filterMovies = movies;
    });
  }


}
