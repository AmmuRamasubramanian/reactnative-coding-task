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
    updateRecordForVehicles: (vehicleId, recordId, updatedValue) =>
    set((state) => ({
        records: {
        ...state.records,
        [vehicleId]: (state.records[vehicleId] || []).map((item) =>
            item.id === recordId
            ? { ...item, ...updatedValue }
            : item
        ),
        },
    })),
    removeRecordForVehicles: (vehicleId, recordId) =>
    set((state) => ({
        records: {
        ...state.records,
        [vehicleId]: (state.records[vehicleId] || []).filter(
            (item) => item.id !== recordId
        ),
        },
    })),
    selectedRecordItem:{},
    selectNewRecordItem:(value)=>set((state)=>({selectedRecordItem:value})),
    updateRecordItem:(value)=>set((state)=>({selectedRecordItem:{...state.selectedRecordItem, ...value}}))
}))