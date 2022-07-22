import template from './index.hbs';
import './styles.scss';

/**
 *
 * @param {{code: number, description: string, extra?:string}} props
 * @returns
 */
export const ErrorPage = (props) => {
  return template(props);
};
