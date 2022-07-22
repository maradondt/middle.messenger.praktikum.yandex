import './styles.scss';
import tmpl from './index.hbs';
import { UserImage } from '../userImage';
/**
 *
 * @param {{
 * id: string,
 * countUnread?:number,
 * name: string,
 * date: string,
 * message: string,
 * src?:string
 * }} props
 * @returns {string}
 */
export const ChatItem = ({ src, ...props }) => {
  const img = UserImage({ src });
  return tmpl({ img, ...props });
};
