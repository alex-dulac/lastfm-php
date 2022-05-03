import { Component, OnInit } from '@angular/core';
import {Artist} from "@modules/artist/artist.model";
import {debounceTime, distinctUntilChanged, Subject} from "rxjs";
import {EncyclopediaService} from "@services/encyclopedia.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  loading: boolean = true;
  artist: Artist = new Artist;
  successMessage: string = '';
  errorMessage: string = '';
  isCherOnTour: boolean = false;

  searchStringSubject: Subject<string> = new Subject<string>();
  searchTerm: string = '';

  constructor(
    private encyclopediaService: EncyclopediaService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(
      (queryParam: any) => {
        if (queryParam['searchTerm']) {
          this.searchTerm = queryParam['searchTerm'];
        }
      }
    );

    this.searchStringSubject.pipe(
      debounceTime(500),
      distinctUntilChanged()
    ).subscribe((text) => {
      this.searchTerm = text;
      this.search();
    })

  }

  search() {
    this.updateQueryParams();
  }

  searchStringChanged(text: string): void {
    this.searchStringSubject.next(text);
  }

  private updateQueryParams() {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        searchTerm: this.searchTerm
      }
    });
  }

  /*getArtist(): void {
    this.encyclopediaService
      .getArtist('Cher')
      .pipe(finalize(() => this.loading = false))
      .subscribe(data => {
        console.log(data);
          this.artist = data;
      },
        err => {
        this.errorMessage = err.message;
      });
  }*/

}
