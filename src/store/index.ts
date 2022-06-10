import { createPinia } from 'pinia';
import { useUserStore } from './user';

export interface IAppStore {
  useUserStore: ReturnType<typeof useUserStore>;
}

const appStore: IAppStore = {} as IAppStore;

export const registerStore = () => {
  appStore.useUserStore = useUserStore()
}

export default appStore;