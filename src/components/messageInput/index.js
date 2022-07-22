import './styles.scss';
import tmpl from './index.hbs';
import { TextField } from '../textField';

/**
 *
 * @param {{id: string, disabled?: boolean, value: string}} props
 * @returns {string}
 */
export const MessageInput = ({ id, ...props }) => {
  const input = TextField({
    id,
    value: props.value,
    placeholder: 'message',
  });
  return tmpl({ input, ...props });
};
