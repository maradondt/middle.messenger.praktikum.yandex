import './styles.scss';
import tmpl from './index.hbs';

/**
 *
 * @param {{id: string, disabled?: boolean, placeholder: string, value: string, icon?:string}} props
 * @returns {string}
 */
export const TextField = (props) => {
  return tmpl(props);
};
