import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {finalize} from "rxjs";
import {EncyclopediaService} from "@services/api/encyclopedia.service";
import {ArtistDetailsModel} from "@modules/artist/models/artist-details.model";

@Component({
    selector: 'app-artist-detail',
    templateUrl: './artist-detail.component.html',
    styleUrls: ['./artist-detail.component.css']
})
export class ArtistDetailComponent implements OnInit {

    loading: boolean;
    errorMessage: string = 'An error has occurred. Please try again.';
    artistSearchTerm: string;
    artistId: string;
    artist: ArtistDetailsModel;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private encyclopediaService: EncyclopediaService,
    ) {
    }

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            this.artistId = params['artistId'];
        });

        this.route.queryParams.subscribe(queryParams => {
            if (queryParams['artistSearchTerm']) {
                this.artistSearchTerm = queryParams['artistSearchTerm'];
                sessionStorage.setItem('artistSearchTerm', this.artistSearchTerm);

                // Remove query params so it's not displayed in the URL
                this.router.navigate([], {
                    queryParams: {
                        'artistSearchTerm': null
                    },
                    queryParamsHandling: 'merge'
                });
            }
        });
        sessionStorage.setItem('artistId', this.artistId);
        this.getArtist(this.artistId);
    }

    getArtist(artistId: string): void {
        this.loading = true;

        this.encyclopediaService.getArtist(artistId)
            .pipe(finalize(() => this.loading = false))
            .subscribe(data => {
                    this.artist = data;
                },
                err => {
                    this.errorMessage = err.message;
                });
    }

    back() {
        sessionStorage.setItem('artistId', '');
        this.router.navigate(['artist'], {
            queryParams: {
                'artistSearchTerm': this.artistSearchTerm
            },
        });
    }
}
