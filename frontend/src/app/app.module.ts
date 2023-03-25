import {NgModule} from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import {AppComponent} from './app.component';
import {SidebarComponent} from '@modules/sidebar/sidebar.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {HomeComponent} from "@modules/home/home.component";
import {ArtistComponent} from "@modules/artist/artist.component";
import {ReleaseComponent} from "@modules/release/release.component";
import {TrackComponent} from "@modules/track/track.component";
import {AppRoutingModule} from './app-routing.module';
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {NgxsModule} from "@ngxs/store";
import {AppState} from "../shared/app.state";


@NgModule({
    declarations: [
        AppComponent,
        SidebarComponent,
        HomeComponent,
        ArtistComponent,
        ReleaseComponent,
        TrackComponent,
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        NoopAnimationsModule,
        ReactiveFormsModule,
        MatCardModule,
        MatButtonModule,
        NgxsModule.forRoot([AppState]),
        // AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
