import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {ArtistSearchResult} from "@modules/artist/models/artist-search-result.model";

@Injectable({
    providedIn: 'root'
})
export class EncyclopediaService {

    baseUrl = 'http://127.0.0.1:8000/api';

    constructor(
        private http: HttpClient
    ) {
    }

    searchArtist(searchTerm: string): Observable<ArtistSearchResult[]> {
        let params = new HttpParams();
        params = params.set('searchTerm', searchTerm);

        return this.http.get<any>(this.baseUrl + '/Encyclopedia/searchArtist', {params: params});
    }

    getArtist(artistId: string): Observable<any> {
        let params = new HttpParams();
        params = params.set('artistId', artistId);

        return this.http.get<any>(this.baseUrl + '/Encyclopedia/getArtist', {params: params});
    }

    searchReleaseGroup(searchTerm: string): Observable<any> {
        let params = new HttpParams();
        params = params.set('searchTerm', searchTerm);

        return this.http.get<any>(this.baseUrl + '/Encyclopedia/searchReleaseGroup', {params: params});
    }

    getReleaseGroup(releaseGroupId: string): Observable<any> {
        let params = new HttpParams();
        params = params.set('releaseGroupId', releaseGroupId);

        return this.http.get<any>(this.baseUrl + '/Encyclopedia/getReleaseGroup', {params: params});
    }

}
