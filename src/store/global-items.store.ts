// @ts-nocheck
import { create } from 'zustand';
import { VIEW_MODE } from "@/enums/enums";


interface GlobalStore {
    viewMode: VIEW_MODE | undefined;
    setViewMode: (mode: VIEW_MODE | undefined) => void;
    selectedRowFromGrid: Record<string, string> | undefined;
    setSelectedRowFromGrid: (selectedRowFromGrid: Record<string, string> | undefined) => void;
    filterName: string | undefined;
    setFilterName: (name: string ) => void;
    shouldFilter: boolean;
    setShouldFilter: (shouldFilter: boolean) => void;
}

export const useGlobalStore = create<GlobalStore>((set) => ({
    viewMode: undefined,
    setViewMode: (viewMode) => set(() => ({ viewMode })),
    selectedRowFromGrid: undefined,
    setViewMode: (selectedRowFromGrid) => set(() => ({ selectedRowFromGrid })),
    filterName: "",
    setFilterName: (filterName) => set(()=> ({filterName})),
    shouldFilter: false,
    setShouldFilter: (shouldFilter => set(()=> ({shouldFilter})))
    }));
