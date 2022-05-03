import { Routes } from '@angular/router';
import {HomeComponent} from "@modules/home/home.component";
import {ArtistComponent} from "@modules/artist/components/artist.component";
import {AlbumComponent} from "@modules/album/components/album.component";

export const InterfaceLayoutRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'artist', component: ArtistComponent },
  { path: 'album', component: AlbumComponent },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];
