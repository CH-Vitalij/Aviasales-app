import { SearchIdState, SearchIdActionType, SearchIdAction } from "../../types/searchIdTypes";

const initialState = {
  searchId: '',
  loading: true,
  error: null,
};

export const reducerSearchId = (state = initialState, action: SearchIdAction): SearchIdState => {
  switch (action.type) {
    case SearchIdActionType.FETCH_SEARCH_ID_SUCCESS:
      return { searchId: action.payload, loading: false, error: null };

    case SearchIdActionType.FETCH_SEARCH_ID_ERROR:
      return { searchId: '', loading: false, error: action.payload };

    default:
      return state;
  }
};
