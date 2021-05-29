import create from 'zustand'
import { 
  persist,
  devtools
} from 'zustand/middleware'
import AsyncStorage from '@react-native-async-storage/async-storage';

let store = (set) => ({
  isLoggedIn: false,
  setIsLoggedIn: (status) => set((state) => ({ isLoggedIn: status })),
});

if (__DEV__) {
  store = devtools(store);
}
store = persist(store, {
  name: "async-storage",
  getStorage: () => AsyncStorage,
});

const useStore = create(store);

export default useStore;