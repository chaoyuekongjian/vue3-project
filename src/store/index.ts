import { useUserStoreForSetup } from './useUserStoreForSetup';
import { useUserStoreForOption } from './useUserStoreForOption';
import { roleStore } from './role-store';

export interface IAppStore {
  useUserStoreForSetup: ReturnType<typeof useUserStoreForSetup>;
  useUserStoreForOption: ReturnType<typeof useUserStoreForOption>;
  roleStore: ReturnType<typeof roleStore>;
}

const appStore: IAppStore = {} as IAppStore;

export const registerStore = () => {
  appStore.useUserStoreForSetup = useUserStoreForSetup()
  appStore.useUserStoreForOption = useUserStoreForOption()
  appStore.roleStore = roleStore()
}

export default appStore;