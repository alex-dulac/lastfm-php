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
    searchTerm: string;
    errorMessage: string = '';

    searchBox = this.formBuilder.group({
        searchTerm: '',
    });

    searchResults = [];

    constructor(
        private encyclopediaService: EncyclopediaService,
        private route: ActivatedRoute,
        private router: Router,
        private formBuilder: FormBuilder
    ) {
    }

    ngOnInit(): void {
        this.route.queryParams.subscribe(queryParams => {
            if (queryParams['searchTerm']) {
                this.searchTerm = queryParams['searchTerm'];
                this.searchArtist(true);

                // Remove query params so it's no longer in the URL
                this.router.navigate([], {
                    queryParams: {
                        'searchTerm': null
                    },
                    queryParamsHandling: 'merge'
                })
            }
        });
    }

    searchArtist(navigatedSearch?: boolean): void {
        this.loading = true;
        this.searchResults = [];
        this.searchTerm = navigatedSearch ? this.searchTerm : this.searchBox.value.searchTerm;

        if (this.searchTerm === '') {
            return;
        }

        this.encyclopediaService.searchArtist(this.searchTerm)
            .pipe(finalize(() => this.loading = false))
            .subscribe(data => {
                    this.searchResults = data;
                },
                error => {
                    this.errorMessage = error.message;
                });
    }

}
