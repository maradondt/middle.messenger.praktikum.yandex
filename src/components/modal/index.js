import './styles.scss';
import tmpl from './index.hbs';

/**
 *
 * @param {{content?: string}} props
 * @returns {string}
 */
export const Modal = (props) => {
  return tmpl(props);
};
