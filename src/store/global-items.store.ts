// @ts-nocheck
import { create } from 'zustand';
import { persist, createJSONStorage } from "zustand/middleware";
import { tempData } from "@/constants/constants";


interface GlobalStore {
    selectedTableData: any;
    setTableData: (newData: any) => void;
    getData: () => any;
}

export const useGlobalStore = create<GlobalStore>(persist(
    (set, get) => ({
        selectedTableData: tempData,
        setTableData: (newData) => {
            set((state) => ({ selectedTableData: [{ ...newData } ,...state.selectedTableData] }))
        },
        getData: () => {
            return get().selectedTableData
        }
    }),{
        name: "storaged", // name of the item in the storage (must be unique)
        storage: createJSONStorage(() => sessionStorage),
        skipHydration: true,
    }));


// const useGlobalStore = create((set) => {
//     return {
//         selectedTableData: tempData,
//         setTableData: () => set((state) => ({ selectedTableData: [...state.selectedTableData] })),
//     };
// });
