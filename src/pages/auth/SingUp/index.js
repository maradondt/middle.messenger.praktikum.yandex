import template from './index.hbs';
import './styles.scss';
import { Button, Link, Input } from 'components/';

export const SingUpPage = (data) => {
  return template({
    email: Input({ value: '', id: 'email', label: 'email', disabled: false }),
    phone: Input({ value: '', id: 'phone', label: 'phone', disabled: false }),
    name: Input({ value: '', id: 'name', label: 'name', disabled: false }),
    surname: Input({ value: '', id: 'surname', label: 'surname', disabled: false }),
    password: Input({ value: '', id: 'password', label: 'password', disabled: false }),
    button: Button({ id: 'submit', name: 'Sing up', fluid: true }),
    link: Link({ href: '/singin', text: 'Already registred? Sing in' }),
  });
};

// email
// phone
// name
// surname
