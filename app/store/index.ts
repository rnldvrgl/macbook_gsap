import {create} from "zustand";

type MacbookStoreState = {
    color: string;
    scale: number;
}

type MacbookStoreAction = {
    setColor: (color: MacbookStoreState['color']) => void;
    setScale: (scale: MacbookStoreState['scale']) => void;
    reset: () => void;
}

const useMacbookStore = create<MacbookStoreState & MacbookStoreAction>((set) => ({
    color: '#2e2c2e',
    setColor: (color: string) => set({color}),

    scale: 0.08,
    setScale: (scale: number) => set({scale}),

    reset: () => set({
        color: '#2e2c2e',
        scale: 0.08,
    }),
}));

export default useMacbookStore;
