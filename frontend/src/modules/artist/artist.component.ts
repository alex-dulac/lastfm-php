import {Component, OnInit} from '@angular/core';
import {StorageService} from "@services/storage.service";
import {ArtistSearchResult} from "@modules/artist/models/artist-search-result.model";
import {EncyclopediaService} from "@services/api/encyclopedia.service";
import {FormBuilder} from "@angular/forms";
import {BehaviorSubject, Subject} from "rxjs";
import {ArtistDetailsModel} from "@modules/artist/models/artist-details.model";

@Component({
    selector: 'app-artist',
    templateUrl: './artist.component.html',
    styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {

    artistLoading: boolean;
    artistId: string;
    artistSearchTerm: string;
    artist$: Subject<ArtistDetailsModel> = new BehaviorSubject<ArtistDetailsModel>(null);

    searchLoading: boolean;
    searchBox = this.formBuilder.group({});
    searchResults$: Subject<ArtistSearchResult[]> = new BehaviorSubject<ArtistSearchResult[]>(null);

    constructor(
        private encyclopediaService: EncyclopediaService,
        private formBuilder: FormBuilder,
        private storageService: StorageService) {
    }

    ngOnInit() {
        this.artistId = this.storageService.getLocalStorageValue(StorageService.ARTIST_ID_ITEM);
        if (this.artistId) {
            this.viewArtist(this.artistId);
            return;
        }
        this.prepareSearchPage();
    }

    prepareSearchPage() {
        if (!this.artistSearchTerm && this.storageService.getLocalStorageValue(StorageService.ARTIST_SEARCH_TERM_ITEM)) {
            this.artistSearchTerm = this.storageService.getLocalStorageValue(StorageService.ARTIST_SEARCH_TERM_ITEM);

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
        this.searchLoading = true;

        // if it was a navigated search, then we should already have a searchTerm in their local storage
        this.artistSearchTerm = hasPreviousSearch ? this.artistSearchTerm : this.searchBox.value.artistSearchTerm;

        if (this.artistSearchTerm === '' || this.artistSearchTerm === 'undefined') {
            this.artistSearchTerm = ''; // this is just to overwrite 'undefined' if that is the case
            this.storageService.setLocalStorageValue(StorageService.ARTIST_SEARCH_TERM_ITEM, '')
            this.searchLoading = false;
            return;
        }

        this.encyclopediaService.searchArtist(this.artistSearchTerm)
            .subscribe((data) => {
                this.searchResults$.next(data);
                this.storageService.setLocalStorageValue(StorageService.ARTIST_SEARCH_TERM_ITEM, this.artistSearchTerm);
                this.searchLoading = false;
            });
    }

    viewArtist(artistId: string) {
        this.artistId = artistId;
        this.storageService.setLocalStorageValue(StorageService.ARTIST_ID_ITEM, artistId);
        this.artistLoading = true;

        this.encyclopediaService.getArtist(artistId)
            .subscribe((data) => {
                this.artistLoading = false;
                this.artist$.next(data);
            });
    }

    back() {
        this.storageService.setLocalStorageValue(StorageService.ARTIST_ID_ITEM, '');
        this.artistId = null;
        this.prepareSearchPage();
    }

}
