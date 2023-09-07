import { create } from 'zustand';
import { tempData } from "@/constants/constants";


interface GlobalStore {
    selectedTableData: any;
    setTableData: (newData: any) => void;
    getData: () => any;
}

export const useGlobalStore = create<GlobalStore>((set, get) => ({
    selectedTableData: tempData,
    // setTableData: (newData) => set((state) => ({selectedTableData: [state.selectedTableData.unshift(newData)]}))
    setTableData: (newData) => set((state) => state.selectedTableData.unshift(newData)),
    getData: () => { return get().selectedTableData}
}));


// const useGlobalStore = create((set) => {
//     return {
//         selectedTableData: tempData,
//         setTableData: () => set((state) => ({ selectedTableData: [...state.selectedTableData] })),
//     };
// });
