import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {ArtistRoutes} from "@modules/artist/artist.routing";
import {ArtistSearchComponent} from "@modules/artist/components/artist-search/artist-search.component";
import {ArtistDetailComponent} from "@modules/artist/components/artist-detail/artist-detail.component";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ArtistRoutes),
    ReactiveFormsModule
  ],
  declarations: [
    ArtistSearchComponent,
    ArtistDetailComponent
  ]
})

export class ArtistModule {}
