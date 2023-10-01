// @ts-nocheck
import { create } from 'zustand';
import { VIEW_MODE } from "@/enums/enums";


interface GlobalStore {
    viewMode: VIEW_MODE | undefined;
    setViewMode: (mode: VIEW_MODE | undefined) => void;
}

export const useGlobalStore = create<GlobalStore>((set) => ({
    viewMode: undefined,
    setViewMode: (viewMode) => set(() => ({ viewMode }))
    }));
