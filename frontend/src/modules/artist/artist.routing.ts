import {RouterModule, Routes} from '@angular/router';
import {ArtistSearchComponent} from "@modules/artist/components/artist-search/artist-search.component";
import {ArtistDetailComponent} from "@modules/artist/components/artist-detail/artist-detail.component";
import {NgModule} from "@angular/core";

const ArtistRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: ArtistSearchComponent,
                pathMatch: 'full'
            },
            {
                path: 'details/:artistId',
                component: ArtistDetailComponent,
                pathMatch: 'prefix'
            }
        ]
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(ArtistRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class ArtistRouting {
}
