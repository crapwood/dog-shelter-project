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
    filterBreed: string | undefined;
    setFilterBreed: (breed: string ) => void;
    filterGender: string | undefined;
    setFilterGender: (gender: string ) => void;
    filterSize: boolean;
    setFilterSize: (filterSize: boolean) => void;
    filterDiskit: string | undefined;
    setFilterDiskit: (filterDiskit: string ) => void;
    filterChipNum: string | undefined;
    setFilterChipNum: (filterChipNum: string ) => void;
    filterCabin: string | undefined;
    setFilterCabin: (filterCabin: string ) => void;
    filterStatus: string | undefined;
    setFilterStatus: (filterStatus: string ) => void;
}

export const useGlobalStore = create<GlobalStore>((set) => ({
    viewMode: undefined,
    setViewMode: (viewMode) => set(() => ({ viewMode })),
    selectedRowFromGrid: undefined,
    setSelectedRowFromGrid: (selectedRowFromGrid) => set(() => ({ selectedRowFromGrid })),
    filterName: "",
    setFilterName: (filterName) => set(()=> ({filterName})),
    filterBreed: "",
    setFilterBreed: (filterBreed) => set(()=> ({filterBreed})),
    filterGender: "",
    setFilterGender: (filterGender) => set(()=> ({filterGender})),
    filterSize: "",
    setFilterSize: (filterSize) => set(()=> ({filterSize})),
    filterDiskit: "",
    setFilterDiskit: (filterDiskit) => set(()=> ({filterDiskit})),
    filterChipNum: "",
    setFilterChipNum: (filterChipNum) => set(()=> ({filterChipNum})),
    filterCabin: "",
    setFilterCabin: (filterCabin) => set(()=> ({filterCabin})),
    filterStatus: "",
    setFilterStatus: (filterStatus) => set(()=> ({filterStatus})),
    }));
