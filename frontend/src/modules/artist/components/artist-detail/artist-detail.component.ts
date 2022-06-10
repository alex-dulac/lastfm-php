import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {finalize} from "rxjs";
import {EncyclopediaService} from "@services/encyclopedia.service";
import {ArtistDetailsModel} from "@modules/artist/models/artist-details.model";

@Component({
    selector: 'app-artist-detail',
    templateUrl: './artist-detail.component.html',
    styleUrls: ['./artist-detail.component.css']
})
export class ArtistDetailComponent implements OnInit {

    loading: boolean;
    errorMessage: string = 'An error has occurred. Please try again.';
    searchTerm: string;
    searchResultsView: string;
    artistId: string;
    artist: ArtistDetailsModel;

    constructor(
        private route: ActivatedRoute,
        private encyclopediaService: EncyclopediaService,
    ) {
    }

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            this.artistId = params['artistId'];
        });
        this.route.queryParams.subscribe(queryParams => {
            this.searchTerm = queryParams['searchTerm'];
        });
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


}
