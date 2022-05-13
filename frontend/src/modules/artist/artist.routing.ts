import { Routes } from '@angular/router';
import {ArtistSearchComponent} from "@modules/artist/components/artist-search/artist-search.component";
import {ArtistDetailComponent} from "@modules/artist/components/artist-detail/artist-detail.component";

export const ArtistRoutes: Routes = [
  {
    path: '',
    redirectTo: 'search',
    pathMatch: 'full'
  },
  {
    path: 'search',
    component: ArtistSearchComponent,
    pathMatch: 'full'
  }
];
