import { Component, OnInit } from '@angular/core';

import {Artist} from "@modules/artist/artist.model";
import {LastfmService} from "@services/lastfm.service";
import {finalize} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  loading: boolean = true;
  artist: Artist = new Artist;
  successMessage: string = '';
  errorMessage: string = '';
  isCherOnTour: boolean = false;

  constructor(
    private lastfmService: LastfmService
  ) {}

  ngOnInit() {
  }

  getTesting(): void {
    this.lastfmService
      .getTesting()
      .pipe(finalize(() => this.loading = false))
      .subscribe(data => {
        this.successMessage = 'You did it. Wow.'
      },
      err => {
        this.errorMessage = err.message;
      });
  }

  getArtist(): void {
    this.lastfmService
      .getArtist('Cher')
      .pipe(finalize(() => this.loading = false))
      .subscribe(data => {
        console.log(data);
          this.artist = data;
      },
        err => {
        this.errorMessage = err.message;
      });
  }

  getIsStringOnTour(): void {
    this.lastfmService
      .getArtist('sting')
      .pipe(finalize(() => this.loading = false))
      .subscribe(data => {
          console.log(data);
          console.log(data.ontour);
          this.isCherOnTour = data.ontour === "1";
        },
        err => {
          this.errorMessage = err.message;
        });
  }

}
