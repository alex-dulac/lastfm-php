import {Component, OnDestroy, OnInit} from '@angular/core';
import {ArtistSearchResult} from "@modules/artist/models/artist-search-result.model";
import {EncyclopediaService} from "@services/api/encyclopedia.service";
import {FormBuilder} from "@angular/forms";
import {BehaviorSubject, Observable, Subject} from "rxjs";
import {ArtistDetailsModel} from "@modules/artist/models/artist-details.model";
import {Select, Store} from "@ngxs/store";
import {AppState} from "../../shared/app.state";
import {SetArtistId, SetArtistSearchTerm} from "../../shared/app.actions";

@Component({
    selector: 'app-artist',
    templateUrl: './artist.component.html',
    styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit, OnDestroy {

    @Select(AppState.getArtistId) currentArtistId$: Observable<string>;
    @Select(AppState.getArtistSearchTerm) currentArtistSearchTerm$: Observable<string>;

    artistLoading: boolean;
    artistId: string;
    artistSearchTerm: string;
    artist$: Subject<ArtistDetailsModel> = new BehaviorSubject<ArtistDetailsModel>(null);

    searchLoading: boolean;
    searchBox = this.formBuilder.group({});
    searchResults$: Subject<ArtistSearchResult[]> = new BehaviorSubject<ArtistSearchResult[]>(null);

    destroy: Subject<any> = new Subject<any>();

    constructor(
        private encyclopediaService: EncyclopediaService,
        private formBuilder: FormBuilder,
        private store: Store
    ) {
    }

    ngOnInit() {
        this.currentArtistId$.subscribe(id => {
            this.artistId = id;
        })
        this.currentArtistSearchTerm$.subscribe(term => {
            this.artistSearchTerm = term;
        })

        if (this.artistId) {
            this.viewArtist(this.artistId);
            return;
        }
        this.prepareSearchPage();
    }

    ngOnDestroy() {
        this.destroy.next(null);
        this.destroy.complete();
    }

    prepareSearchPage() {
        this.searchBox = this.formBuilder.group({
            artistSearchTerm: this.artistSearchTerm,
        });

        let currentSearchResults;
        this.searchResults$.subscribe(result => {
            currentSearchResults = result;
        });

        // skip the search if there is no search term, or if we already have a batch of results
        if (
            this.artistSearchTerm != ''
            && (currentSearchResults === null || currentSearchResults === undefined || currentSearchResults?.length < 1)
        ) {
            this.searchArtist();
        }
    }

    searchArtist(): void {
        this.searchLoading = true;
        const userEntry = this.searchBox.value.artistSearchTerm;

        if (userEntry === '' || userEntry === 'undefined') {
            this.artistSearchTerm = ''; // this is just to overwrite 'undefined' if that is the case
            this.store.dispatch(new SetArtistSearchTerm(''));
            this.searchLoading = false;
            return;
        }

        this.encyclopediaService.searchArtist(userEntry)
            .subscribe((data) => {
                this.searchResults$.next(data);
                this.store.dispatch(new SetArtistSearchTerm(userEntry));
                this.searchLoading = false;
            });
    }

    viewArtist(artistId: string) {
        this.artistLoading = true;
        this.artistId = artistId;
        this.store.dispatch(new SetArtistId(artistId));

        this.encyclopediaService.getArtist(artistId)
            .subscribe((data) => {
                this.artistLoading = false;
                this.artist$.next(data);
            });
    }

    back() {
        this.store.dispatch(new SetArtistId(''));
        this.artistId = null;
        this.prepareSearchPage();
    }
}
