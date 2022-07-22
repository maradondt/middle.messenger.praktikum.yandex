import template from './index.hbs';
import './styles.scss';
import { Button, Link, Input } from 'components/';

export const SingInPage = (data) => {
  return template({
    login: Input({ id: 'login', label: 'login', disabled: false }),
    password: Input({ id: 'password', label: 'password', disabled: false }),
    button: Button({ name: 'Sing in', fluid: true }),
    link: Link({ href: '/singup', text: 'Sing up' }),
  });
};
