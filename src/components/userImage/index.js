import './styles.scss';
import tmpl from './index.hbs';

/**
 *
 * @param {{src?:string}} props
 * @returns {string}
 */
export const UserImage = (props) => {
  return tmpl(props);
};
