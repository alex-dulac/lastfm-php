import {Routes} from '@angular/router';
import {HomeComponent} from "@modules/home/home.component";
import {ArtistComponent} from "@modules/artist/artist.component";
import {ReleaseComponent} from "@modules/release/release.component";
import {TrackComponent} from "@modules/track/track.component";

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
        path: 'release',
        component: ReleaseComponent,
        children: [{
            path: '',
            loadChildren: () => import('@modules/release/release.module').then(m => m.ReleaseModule)
        }]
    },
    {
        path: 'track',
        component: TrackComponent
    },
    {
        path: '**',
        redirectTo: 'home',
        pathMatch: 'full'
    },
];
