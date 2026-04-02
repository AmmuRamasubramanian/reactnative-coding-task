import { create } from "zustand";

export const useMileageAppStore=create((set)=>({
    vehicles:[],
    addVehicles:(value)=>set((state)=>({vehicles:[value, ...state.vehicles]})),
    records:[],
    addRecord:(value)=>set((state)=>({records:[...state.records, value]})),
}))