import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Movie} from "./model/movie.model";

@Component({
  selector: 'app-movie',
  templateUrl: 'movie.component.html',
  styleUrls: ['movie.less']
})
export class MovieComponent {

  @Input() movie: Movie;
  @Input() icon: string;
  @Input() title: string;
  @Input() readOnly: boolean = false;

  @Output() iconClick = new EventEmitter<Movie>();
  @Output() ratingClicked = new EventEmitter<Movie>();

  _onIconClick(): void {
    this.iconClick.emit(this.movie);
  }

  _onRatingClick(): void {
    !this.readOnly && this.ratingClicked.emit(this.movie);
  }

}


