import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from "@angular/forms";
import {ReleaseRouting} from "@modules/release/release.routing";
import {ReleaseGroupDetailComponent} from "@modules/release/components/release-group-detail/release-group-detail.component";
import {
    ReleaseGroupSearchComponent
} from "@modules/release/components/release-group-search/release-group-search.component";

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        ReleaseRouting
    ],
    declarations: [
        ReleaseGroupSearchComponent,
        ReleaseGroupDetailComponent
    ]
})

export class ReleaseModule {
}
