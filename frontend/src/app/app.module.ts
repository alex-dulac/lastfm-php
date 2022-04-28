import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ArtistComponent } from "@modules/artist/components/artist.component";
import { AlbumComponent } from "@modules/album/components/album.component";
import { ChartsComponent } from "@modules/charts/components/charts.component";
import { DashboardComponent } from "@modules/dashboard/components/dashboard.component";

@NgModule({
  declarations: [
    AppComponent,
    ArtistComponent,
    AlbumComponent,
    ChartsComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
