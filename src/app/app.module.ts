import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HomeComponent} from "./module/home/components/home.component";
import {LibraryComponent} from "./module/library/components/library.component";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {appRoutes} from "./app-routing.module";
import {AppRatingComponent} from "./components/rating/app-rating.component";
import {MovieComponent} from "./components/movie/movie.component";

@NgModule({
  declarations: [
    AppComponent,
    AppRatingComponent,
    HomeComponent,
    LibraryComponent,
    MovieComponent
  ],
  imports: [
    appRoutes,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
