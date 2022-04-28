import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ArtistComponent} from "@modules/artist/components/artist.component";
import {DashboardComponent} from "@modules/dashboard/components/dashboard.component";
import {AlbumComponent} from "@modules/album/components/album.component";
import {ChartsComponent} from "@modules/charts/components/charts.component";

const routes: Routes = [
  { path: 'album', component: AlbumComponent },
  { path: 'artist', component: ArtistComponent },
  { path: 'charts', component: ChartsComponent },
  { path: 'dashboard', component: DashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
