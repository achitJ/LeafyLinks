import { create } from "zustand";
import { persist, createJSONStorage } from 'zustand/middleware'

type GlobalState = {
    darkMode: boolean,
    toggleDarkMode: () => void
};


export const useGlobalStore = create<GlobalState>()(
    persist(
        (set, get) => ({
            darkMode: false,
            toggleDarkMode: () => set({ darkMode: !get().darkMode })
        }),
        {
            name: 'global-storage',
            storage: createJSONStorage(() => localStorage),
            skipHydration: true
        }
    )
); 