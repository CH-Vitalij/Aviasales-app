import { Dispatch } from "redux";
import { SearchIdAction, SearchIdActionType } from "../../types/searchIdTypes";
import AviasalesService from "../../service/aviasales-service";

const fetchDataSuccess = (searchId: string): SearchIdAction => ({
  type: SearchIdActionType.FETCH_SEARCH_ID_SUCCESS,
  payload: searchId,
});

const fetchDataError = (error: string): SearchIdAction => ({
  type: SearchIdActionType.FETCH_SEARCH_ID_ERROR,
  payload: error,
});

export const fetchSearchIdData = (ignore: boolean) => {
  return async (dispatch: Dispatch<SearchIdAction>) => {
    try {
      const obj = new AviasalesService();

      const searchId = await obj.getSearchId();

      if (!ignore) {
        dispatch(fetchDataSuccess(searchId));
      }
    } catch (err) {
      dispatch(fetchDataError("Произошла ошибка во время получения идентификатора поиска"));
    }
  };
};
