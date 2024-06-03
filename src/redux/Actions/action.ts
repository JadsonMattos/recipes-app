import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { RootState } from '../../types/types';
import api from '../../utils/api';

export type Dispatch = ThunkDispatch<RootState, null, AnyAction>;

export const setSearchResults = (data: any) => ({
  type: 'SET_SEARCH_RESULTS',
  payload: {
    data,
  },
});

export const searchRecipes = (
  params: string,
  baseUrl: string,
  type?: string | null,
) => async (dispatch: Dispatch) => {
  try {
    const data = await api(params, baseUrl, type);
    dispatch(setSearchResults(data.meals || data.drinks));
  } catch (error) {
    console.error('Erro na pesquisa:', error);
  }
};
