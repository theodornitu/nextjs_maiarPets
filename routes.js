import { dAppName } from './config';
import Home from './pages/dapp';
import Dashboard from './pages/dashboard';
import Transaction from './pages/transaction';
import withPageTitle from './pages/PageTitle';

export const routeNames = {
  home: '/dapp',
  dashboard: '/dashboard',
  transaction: '/transaction',
  ledger: '/ledger',
  walletconnect: '/walletconnect'
};

const routes = [
  {
    path: routeNames.home,
    title: 'Home',
    component: Home
  },
  {
    path: routeNames.dashboard,
    title: 'Dashboard',
    component: Dashboard,
    authenticatedRoute: true
  },
  {
    path: routeNames.transaction,
    title: 'Transaction',
    component: Transaction
  }
];

const mappedRoutes = routes.map((route) => {
  const title = route.title
    ? `${route.title} • Elrond ${dAppName}`
    : `Elrond ${dAppName}`;

  const requiresAuth = Boolean(route.authenticatedRoute);
  const wrappedComponent = withPageTitle(title, route.component);

  return {
    path: route.path,
    component: wrappedComponent,
    authenticatedRoute: requiresAuth
  };
});

export default mappedRoutes;