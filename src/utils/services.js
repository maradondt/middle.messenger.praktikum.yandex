import { createBrowserHistory } from 'history';

const hist = createBrowserHistory();

export const useServices = () => {
  return {
    history: hist,
    location,
  };
};
