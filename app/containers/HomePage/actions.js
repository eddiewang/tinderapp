import {
  SUBMIT_FORM,
} from './constants';

export function submitForm(email, password) {
  return {
    type: SUBMIT_FORM,
    payload: {
      email,
      password,
    },
  };
}
