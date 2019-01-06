import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {Movie} from "../movie/model/movie.model";

@Component({
  selector: 'app-rating',
  templateUrl: 'app-rating.component.html',
  styleUrls: ['app-rating.less']
})
export class AppRatingComponent implements OnInit {

  @Input() movie: Movie;
  @Input() readOnly: boolean;

  @Output() ratingClick = new EventEmitter<Movie>();
  inputName: string;
  rating: number;

  ngOnInit(): void {
    this.inputName = this.movie.Title + '_rating';
    const rating: number = +this.movie.imdbRating;
    this.rating = Math.round(rating / 2);
  }

  onClick(rating: number): void {
    if (!this.readOnly) {
      this.rating = rating;
      this.movie.imdbRating = (rating * 2).toString();
      this.ratingClick.emit(this.movie);
    }

  }
}
