import {RouterModule, Routes} from '@angular/router';
import {NgModule} from "@angular/core";
import {ReleaseGroupDetailComponent} from "@modules/release/components/release-group-detail/release-group-detail.component";
import {
    ReleaseGroupSearchComponent
} from "@modules/release/components/release-group-search/release-group-search.component";

const ReleaseRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: ReleaseGroupSearchComponent,
                pathMatch: 'full'
            },
            {
                path: 'release-group-details/:releaseGroupId',
                component: ReleaseGroupDetailComponent,
                pathMatch: 'prefix'
            }
        ]
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(ReleaseRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class ReleaseRouting {
}
