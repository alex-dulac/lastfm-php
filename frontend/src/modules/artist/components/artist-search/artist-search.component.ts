import {Component, OnInit} from '@angular/core';
import {EncyclopediaService} from "@services/encyclopedia.service";
import {ActivatedRoute, Router} from "@angular/router";
import {finalize} from "rxjs";
import {FormBuilder, Validators} from "@angular/forms";

@Component({
    selector: 'app-artist-search',
    templateUrl: './artist-search.component.html',
    styleUrls: ['./artist-search.component.scss']
})
export class ArtistSearchComponent implements OnInit {

    loading: boolean;
    artistSearchTerm: string;
    errorMessage: string = '';

    searchBox = this.formBuilder.group({});

    searchResults = [];

    constructor(
        private encyclopediaService: EncyclopediaService,
        private route: ActivatedRoute,
        private router: Router,
        private formBuilder: FormBuilder
    ) {
    }

    ngOnInit(): void {
        if (sessionStorage.getItem('artistId')) {
            this.router.navigate(['artist/details/', sessionStorage.getItem('artistId')])
        }

        if (!this.artistSearchTerm && sessionStorage.getItem('artistSearchTerm')) {
            this.artistSearchTerm = sessionStorage.getItem('artistSearchTerm');

            // pre-populate the search box with the term since we have it.
            this.searchBox = this.formBuilder.group({
                artistSearchTerm: this.artistSearchTerm,
            });

            this.searchArtist(true);
        } else {
            this.searchBox = this.formBuilder.group({
                artistSearchTerm: '',
            });
        }
    }

    searchArtist(hasPreviousSearch?: boolean): void {
        this.loading = true;
        this.searchResults = [];
        // if it was a navigated search, then we should already have a searchTerm in their local storage
        this.artistSearchTerm = hasPreviousSearch ? this.artistSearchTerm : this.searchBox.value.artistSearchTerm;

        if (this.artistSearchTerm === '' || this.artistSearchTerm === 'undefined') {
            this.artistSearchTerm = ''; // this is just to overwrite 'undefined' if that is the case
            sessionStorage.setItem('artistSearchTerm', '');
            this.loading = false;
            return;
        }

        this.encyclopediaService.searchArtist(this.artistSearchTerm)
            .pipe(finalize(() => this.loading = false))
            .subscribe(data => {
                    this.searchResults = data;
                },
                error => {
                    this.errorMessage = error.message;
                });
    }

}
