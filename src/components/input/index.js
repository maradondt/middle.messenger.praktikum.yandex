import './styles.scss';
import tmpl from './index.hbs';

/**
 *
 * @param {{id: string, disabled?: boolean, label: string, value: string}} props
 * @returns {string}
 */
export const Input = (props) => {
  return tmpl(props);
};
