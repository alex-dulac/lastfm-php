import { Routes } from '@angular/router';
import {HomeComponent} from "@modules/home/home.component";
import {ArtistComponent} from "@modules/artist/artist.component";
import {AlbumComponent} from "@modules/album/components/album.component";

export const InterfaceLayoutRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'artist',
    component: ArtistComponent,
    children: [{
      path: '',
      loadChildren: () => import('@modules/artist/artist.module').then(m => m.ArtistModule)
    }]
  },
  {
    path: 'album',
    component: AlbumComponent
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];
