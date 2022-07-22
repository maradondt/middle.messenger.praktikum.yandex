import template from './index.hbs';
import searchIcon from './Union.svg';
import userSettingsIcon from './userSettingsIcon.hbs';
import { ChatItem, Message, UserImage, TextField, MessageInput } from 'components/';
import { chats, messages } from './data';
import './styles.scss';

export const MainPage = (data) => {
  return template({
    items: chats.map(ChatItem).join(''),
    messages: messages.map(Message).join(''),
    chatName: 'James Moss',
    chatImg: UserImage({}),
    search: TextField({ id: 'search', placeholder: 'search', value: '', icon: searchIcon }),
    userSettingsIcon: userSettingsIcon(),
    input: MessageInput({ id: 'message-input', value: '' }),
  });
};
