import { createSelector } from 'reselect';

const selectForm = state => state.get('form');

export const getData = createSelector(
  selectForm,
  globalState => globalState.data,
);
