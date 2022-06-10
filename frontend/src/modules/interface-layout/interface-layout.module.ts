import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {InterfaceLayoutRoutes} from "@modules/interface-layout/interface-layout.routing";
import {ArtistComponent} from "@modules/artist/artist.component";
import {HomeComponent} from "@modules/home/home.component";
import {AlbumComponent} from "@modules/album/components/album.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(InterfaceLayoutRoutes)
    ],
    declarations: [
        HomeComponent,
        ArtistComponent,
        AlbumComponent
    ]
})

export class InterfaceLayoutModule {
}
