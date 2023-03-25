import {Injectable} from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class StorageService {
    public static ACTIVE_ENTITY_TYPE_ITEM = 'ACTIVE_ENTITY_TYPE';
    public static ARTIST_SEARCH_TERM_ITEM = 'ARIST_SEARCH_TERM';
    public static ARTIST_ID_ITEM = 'ARTIST_ID';
    public static RELEASE_SEARCH_TERM_ITEM = 'RELEASE_SEARCH_TERM';
    public static RELEASE_GROUP_ID_ITEM = 'RELEASE_ID';

    constructor() {
    }

    setLocalStorageValue(item: string, value: string): void {
        localStorage.setItem(item, value);
    }

    getLocalStorageValue(item: string): string {
        return localStorage.getItem(item);
    }

    clearStorage(): void {
        localStorage.clear();
    }
}
