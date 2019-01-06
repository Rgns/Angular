import {RouterModule, Routes} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {HomeComponent} from "./module/home/components/home.component";
import {LibraryComponent} from "./module/library/components/library.component";


const routes: Routes = [
  {
    path: "", redirectTo: "home", pathMatch: "full"
  },
  {
    path: "home", component: HomeComponent
  },
  {
    path: "library", component: LibraryComponent
  }
];

export const appRoutes: ModuleWithProviders<RouterModule> = RouterModule.forRoot(routes);
