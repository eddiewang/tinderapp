// These are the pages you can go to.
// They are all wrapped in the App component, which should contain the navbar etc
// See http://blog.mxstbr.com/2016/01/react-apps-with-pages for more information
// about the code splitting business
import { getHooks } from 'utils/hooks';

const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (cb) => (componentModule) => {
  cb(null, componentModule.default);
};

export default function createRoutes(store) {
  // Create reusable async injectors using getHooks factory
  const { injectReducer, injectSagas } = getHooks(store);

  return [
    {
      path: '/',
      name: 'home',
      getComponent(nextState, cb) {
        System.import('containers/HomePage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    }, {
      path: '/login',
      name: 'login',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/LoginPage/reducer'),
          System.import('containers/LoginPage/sagas'),
          System.import('containers/LoginPage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('home', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });
      },
    }, {
      path: '/dashboard',
      name: 'dashboard',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/DashboardPage/reducer'),
          System.import('containers/DashboardPage/sagas'),
          System.import('containers/DashboardPage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('dashboard', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });

        importModules.catch(errorLoading);
      },
    }, {
      path: '/analytics',
      name: 'analytics',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/AnalyticsPage/reducer'),
          System.import('containers/AnalyticsPage/sagas'),
          System.import('containers/AnalyticsPage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('analytics', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });
      },
    }, {
      path: '/matches',
      name: 'matches',
      getComponent(nextState, cb) {
        const importModules = Promise.all([
          System.import('containers/MatchesPage/reducer'),
          System.import('containers/MatchesPage/sagas'),
          System.import('containers/MatchesPage'),
        ]);

        const renderRoute = loadModule(cb);

        importModules.then(([reducer, sagas, component]) => {
          injectReducer('matches', reducer.default);
          injectSagas(sagas.default);
          renderRoute(component);
        });
      },
    }, {
      path: '*',
      name: 'notfound',
      getComponent(nextState, cb) {
        System.import('containers/NotFoundPage')
          .then(loadModule(cb))
          .catch(errorLoading);
      },
    },
  ];
}
