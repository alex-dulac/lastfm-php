import {AppTab, TAB_HOME} from "./app-tab.type";
import {Action, Selector, State, StateContext} from "@ngxs/store";
import {ResetState, SetActiveTab, SetArtistId, SetArtistSearchTerm} from "./app.actions";
import {Injectable} from "@angular/core";

export interface AppStateModel {
    activeTab: AppTab;
    artistSearchTerm: string;
    artistId: string;
    releaseSearchTerm: string;
    releaseId: string;
}

@State<AppStateModel>({
    name: 'app',
    defaults: {
        activeTab: TAB_HOME,
        artistSearchTerm: '',
        artistId: '',
        releaseSearchTerm: '',
        releaseId: '',
    }
})

@Injectable({
    providedIn: 'root'
})

export class AppState {
    @Selector()
    static getActiveTab(state: AppStateModel): AppTab {
        return state.activeTab;
    }

    @Action(SetActiveTab)
    setActiveTab({ patchState }: StateContext<AppStateModel>, { payload }: SetActiveTab) {
        patchState({ activeTab: payload });
    }

    @Selector()
    static getArtistId(state: AppStateModel): string {
        return state.artistId;
    }

    @Action(SetArtistId)
    setArtistId({ patchState }: StateContext<AppStateModel>, { payload }: SetArtistId) {
        patchState({ artistId: payload });
    }

    @Action(SetArtistSearchTerm)
    setArtistSearchTerm({ patchState }: StateContext<AppStateModel>, { payload }: SetArtistSearchTerm) {
        patchState({ artistSearchTerm: payload });
    }

    @Action(ResetState)
    resetState({ setState }: StateContext<AppStateModel>) {
        setState({
            activeTab: TAB_HOME,
            artistSearchTerm: '',
            artistId: '',
            releaseSearchTerm: '',
            releaseId: '',
        });
    }
}
