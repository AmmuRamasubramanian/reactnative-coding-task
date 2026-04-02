import { create } from "zustand";

export const useMileageAppStore=create((set)=>({
    vehicles:[],
    addVehicles:(value)=>set((state)=>({vehicles:[...state.vehicles, value]}))
}))