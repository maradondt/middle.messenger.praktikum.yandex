import './styles.scss';
import tmpl from './index.hbs';

/**
 *
 * @param {{isSelf?:boolean, text:string, imgSrc?: string, userName?:string}} props
 * @returns {string}
 */
export const Message = (props) => {
  return tmpl(props);
};
