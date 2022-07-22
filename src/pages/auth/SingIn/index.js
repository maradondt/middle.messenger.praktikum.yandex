import template from './index.hbs';
import './styles.scss';
import { Button, Link, Input } from 'components/';

export const SingInPage = (data) => {
  return template({
    login: Input({ id: 'login', label: 'login', disabled: false, value: '' }),
    password: Input({ id: 'password', label: 'password', disabled: false, value: '' }),
    button: Button({ id: 'submit', name: 'Sing in', fluid: true }),
    link: Link({ href: '/singup', text: 'Sing up' }),
  });
};
