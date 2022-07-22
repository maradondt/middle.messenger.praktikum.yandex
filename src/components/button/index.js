import './styles.scss';
import tmpl from './index.hbs';

/**
 *
 * @param {{id: string, disabled?: boolean, name: string, fluid?: boolean, color?: string, variant?:string}} props
 * @returns {string}
 */
export const Button = (props) => {
  return tmpl(props);
};
