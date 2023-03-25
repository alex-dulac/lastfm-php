import {AppTab} from "./app-tab.type";

export class SetActiveTab {
    static readonly type = '[App] Set Active Tab';
    constructor(public payload: AppTab) {
    }
}

export class SetArtistId {
    static readonly type = '[App] Set Artist Id';
    constructor(public payload: string) {
    }
}

export class SetArtistSearchTerm {
    static readonly type = '[App] Set Artist Search Term';
    constructor(public payload: string) {
    }
}

export class ResetState {
    static readonly type = '[App] Reset State';
    constructor() {
    }
}
