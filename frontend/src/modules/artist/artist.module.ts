import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ArtistSearchComponent} from "@modules/artist/components/artist-search/artist-search.component";
import {ArtistDetailComponent} from "@modules/artist/components/artist-detail/artist-detail.component";
import {ReactiveFormsModule} from "@angular/forms";
import {ArtistRouting} from "@modules/artist/artist.routing";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        ArtistRouting,
        MatCardModule,
        MatButtonModule
    ],
    declarations: [
        ArtistSearchComponent,
        ArtistDetailComponent
    ]
})

export class ArtistModule {
}
