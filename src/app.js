import './app.css';
import { SingInPage, SingUpPage, MainPage, ErrorPage } from './pages';
import { addVarsInRoot, useServices } from './utils';
import { colors, shadows } from './shared';
import { Link } from './components';

const routes = {
  '/singin': SingInPage,
  '/singup': SingUpPage,
  '/': MainPage,
  '/404': () =>
    ErrorPage({ code: 404, description: 'oops... Page not found', extra: Link({ href: '/', text: 'Go to chats' }) }),
  '/500': () =>
    ErrorPage({
      code: 500,
      description: 'oops... something went wrong.',
      extra: Link({ href: '/', text: 'Go to chats' }),
    }),
};

export const app = () => {
  const { history } = useServices();
  const root = document.getElementById('root');
  const path = history.location.pathname;

  const html = (routes[path] ?? SingInPage)();
  root.innerHTML = html;

  history.listen(({ location }) => {
    const html = routes[location]();
    root.innerHTML = html;
  });

  addVarsInRoot('color', colors);
  addVarsInRoot('shadow', shadows);
};
