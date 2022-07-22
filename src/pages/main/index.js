import template from './index.hbs';
import searchIcon from './Union.svg';
import userSettingsIcon from './userSettingsIcon.hbs';
import { ChatItem, Message, UserImage, TextField, MessageInput, Modal, UserSetting, Button } from 'components/';
import { actionsData, chats, messages, userData } from './data';
import './styles.scss';

/**
 *
 * @param {{search?: string}} data
 * @returns
 */
export const MainPage = ({ search }) => {
  const searchParams = new URLSearchParams(search);

  const showModal = searchParams.get('showModal') ?? null;
  const actions = actionsData.map(Button).join('');

  const userSettingsContent = UserSetting({ ...userData, actions });
  const userSettingsModal = Modal({ content: userSettingsContent });

  return template({
    items: chats.map(ChatItem).join(''),
    messages: messages.map(Message).join(''),
    chatName: 'James Moss',
    chatImg: UserImage({}),
    search: TextField({ id: 'search', placeholder: 'search', value: '', icon: searchIcon }),
    userSettingsIcon: userSettingsIcon(),
    input: MessageInput({ id: 'message', value: '' }),
    showModal: showModal,
    modal: userSettingsModal,
  });
};
