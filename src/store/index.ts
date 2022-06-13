import { useUserStoreForSetup } from './useUserStoreForSetup';
import { useUserStoreForOption } from './useUserStoreForOption';
import { roleStore } from './role-store';
import { permission } from './permission'

export interface IAppStore {
  useUserStoreForSetup: ReturnType<typeof useUserStoreForSetup>;
  useUserStoreForOption: ReturnType<typeof useUserStoreForOption>;
  roleStore: ReturnType<typeof roleStore>;
  permission: ReturnType<typeof permission>;
}

const appStore: IAppStore = {} as IAppStore;

export const registerStore = () => {
  appStore.useUserStoreForSetup = useUserStoreForSetup()
  appStore.useUserStoreForOption = useUserStoreForOption()
  appStore.roleStore = roleStore()
  appStore.permission = permission()
}

export default appStore;