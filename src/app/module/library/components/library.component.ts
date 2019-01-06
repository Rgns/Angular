import {Component, OnInit} from '@angular/core';
import {Movie} from "../../../components/movie/model/movie.model";
import {MovieService} from "../../../shared/movie/movie.service";

@Component({
  selector: 'app-library',
  templateUrl: 'library.component.html',
  styleUrls: ['library.less']
})
export class LibraryComponent implements OnInit {

  _movies: Movie[];

  constructor(private movieService: MovieService) {
  }

  ngOnInit(): void {
    this.movieService.getMovieListAddedToLibrary().subscribe((movies: Movie[]) => {
      this._movies = movies;
    });
  }

  _removeMovieToLibrary(movie: Movie): void {
    movie.addedToLibrary = false;
    this.movieService.removeMovieFromLibrary(movie).subscribe((movies: Movie[]) => {
      this._movies = movies;
    });
  }

}
