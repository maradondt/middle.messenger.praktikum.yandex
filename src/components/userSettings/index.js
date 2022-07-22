import './styles.scss';
import tmpl from './index.hbs';

/**
 *
 * @param {{ actions: string,
 * first_name:string, second_name:string, display_name:string, login:string, email:string, phone:string }} props
 * @returns {string}
 */
export const UserSetting = (props) => {
  return tmpl(props);
};
