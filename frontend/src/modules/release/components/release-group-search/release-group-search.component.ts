import {Component, OnInit} from '@angular/core';
import {EncyclopediaService} from "@services/api/encyclopedia.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder} from "@angular/forms";
import {finalize} from "rxjs";

@Component({
    selector: 'app-release-group-search',
    templateUrl: './release-group-search.component.html',
    styleUrls: ['./release-group-search.component.css']
})
export class ReleaseGroupSearchComponent implements OnInit {

    loading: boolean;
    releaseSearchTerm: string;
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
        if (sessionStorage.getItem('releaseId')) {
            this.router.navigate(['release/details/', sessionStorage.getItem('releaseId')])
        }

        if (!this.releaseSearchTerm && sessionStorage.getItem('releaseSearchTerm')) {
            this.releaseSearchTerm = sessionStorage.getItem('releaseSearchTerm');

            // pre-populate the search box with the term since we have it.
            this.searchBox = this.formBuilder.group({
                releaseSearchTerm: this.releaseSearchTerm,
            });

            this.searchReleaseGroup(true);
        } else {
            this.searchBox = this.formBuilder.group({
                releaseSearchTerm: '',
            });
        }
    }

    searchReleaseGroup(hasPreviousSearch?: boolean): void {
        this.loading = true;
        this.searchResults = [];
        // if it was a navigated search, then we should already have a searchTerm in session storage
        this.releaseSearchTerm = hasPreviousSearch ? this.releaseSearchTerm : this.searchBox.value.releaseSearchTerm;

        if (this.releaseSearchTerm === '' || this.releaseSearchTerm === 'undefined') {
            this.releaseSearchTerm = ''; // this is just to overwrite 'undefined' if that is the case
            sessionStorage.setItem('releaseSearchTerm', '');
            this.loading = false;
            return;
        }

        this.encyclopediaService.searchReleaseGroup(this.releaseSearchTerm)
            .pipe(finalize(() => this.loading = false))
            .subscribe(data => {
                console.log(data);
                this.searchResults = data;
                }, error => {
                this.errorMessage = error.message;
            });
    }

}
