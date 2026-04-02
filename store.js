import { create } from "zustand";

export const useMileageAppStore=create((set)=>({
    vehicles:[],
    addVehicles:(value)=>set((state)=>({vehicles:[value, ...state.vehicles]})),
    records:{},
    addRecordForVehicles: (vehicleId, value) =>
        set((state) => ({
            records: {
            ...state.records,
            [vehicleId]: [
                ...(state.records[vehicleId] || []),
                value,
            ],
        },
    })),
}))