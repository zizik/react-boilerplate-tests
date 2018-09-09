import { FORM_REQUEST } from './constants';

export function requestForm(values) {
  return {
    type: FORM_REQUEST,
    values,
  };
}
