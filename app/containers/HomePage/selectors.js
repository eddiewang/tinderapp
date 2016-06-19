import { createSelector } from 'reselect';

const selectHome = () => (state) => state.get('home');

const selectEmail = () => createSelector(
  selectHome(),
  (homeState) => homeState.get('email')
);

const selectPassword = () => createSelector(
  selectHome(),
  (homeState) => homeState.get('password')
);

export {
  selectEmail,
  selectPassword,
};
