import './styles.scss';
import tmpl from './index.hbs';
import { TextField } from '../textField';

/**
 *
 * @param {{id: string, disabled?: boolean, value: string}} props
 * @returns {string}
 */
export const MessageInput = (props) => {
  const input = TextField({
    id: 'message-text',
    value: props.value,
    placeholder: 'message',
  });
  return tmpl({ input, ...props });
};
