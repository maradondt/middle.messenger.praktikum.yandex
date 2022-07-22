import './styles.scss';
import tmpl from './index.hbs';

/**
 *
 * @param {{id?: string, href: string, text: string, arrow?: boolean}} props
 * @returns {string}
 */
export const Link = (props) => {
  return tmpl(props);
};
