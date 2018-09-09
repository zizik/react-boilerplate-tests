import { FORM_REQUEST, FORM_FAILURE, FORM_SUCCESS } from './constants';

export function requestForm(values) {
  return {
    type: FORM_REQUEST,
    values,
  };
}

export function requestFormError(errors) {
  return {
    type: FORM_FAILURE,
    payload: { errors },
  };
}

export function requestFormSuccess(errors) {
  return {
    type: FORM_SUCCESS,
    payload: errors,
  };
}
