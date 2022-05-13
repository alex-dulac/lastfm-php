import { Component, OnInit } from '@angular/core';
import {Artist} from "@modules/artist/artist.model";
import {EncyclopediaService} from "@services/encyclopedia.service";
import {ActivatedRoute, Router} from "@angular/router";
import {finalize} from "rxjs";
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-artist-search',
  templateUrl: './artist-search.component.html',
  styleUrls: ['./artist-search.component.css']
})
export class ArtistSearchComponent implements OnInit {

  loading: boolean = true;
  searchTerm: string = '';
  errorMessage: string = '';

  searchBox = this.formBuilder.group({
    searchTerm: '',
  });

  searchResults: Artist[] = [];

  constructor(
    private encyclopediaService: EncyclopediaService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  searchArtist(): void {
    this.loading = true;
    this.searchTerm = this.searchBox.value.searchTerm;

    if (this.searchTerm === '') {
      return;
    }

    this.encyclopediaService.searchArtist(this.searchTerm)
      .pipe(finalize(() => this.loading = false))
      .subscribe(data => {
          console.log(data);
        },
        error => {
          this.errorMessage = error.message;
        });
  }

}
