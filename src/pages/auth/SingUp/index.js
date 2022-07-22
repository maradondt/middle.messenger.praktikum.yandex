import template from './index.hbs';
import './styles.scss';
import { Button, Link, Input } from 'components/';

export const SingUpPage = (data) => {
  return template({
    login: Input({ value: '', id: 'login', label: 'login', disabled: false }),
    email: Input({ value: '', id: 'email', label: 'email', disabled: false }),
    phone: Input({ value: '', id: 'phone', label: 'phone', disabled: false }),
    name: Input({ value: '', id: 'first_name', label: 'name', disabled: false }),
    surname: Input({ value: '', id: 'second_name', label: 'surname', disabled: false }),
    password: Input({ value: '', id: 'password', label: 'password', disabled: false }),
    button: Button({ id: 'submit', name: 'Sing up', fluid: true }),
    link: Link({ href: '/singin', text: 'Already registred? Sing in' }),
  });
};

// email
// phone
// name
// surname
