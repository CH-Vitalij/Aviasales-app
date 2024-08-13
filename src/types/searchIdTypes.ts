export interface SearchIdState {
  searchId: string;
  loading: boolean;
  error: null | string;
}

export enum SearchIdActionType {
  FETCH_SEARCH_ID_REQUEST = "FETCH_SEARCH_ID_REQUEST",
  FETCH_SEARCH_ID_SUCCESS = "FETCH_SEARCH_ID_SUCCESS",
  FETCH_SEARCH_ID_ERROR = "FETCH_SEARCH_ID_ERROR",
}

interface SearchIdSuccessAction {
  type: SearchIdActionType.FETCH_SEARCH_ID_SUCCESS;
  payload: string;
}

interface SearchIdErrorAction {
  type: SearchIdActionType.FETCH_SEARCH_ID_ERROR;
  payload: string;
}

export type SearchIdAction = SearchIdSuccessAction | SearchIdErrorAction;
