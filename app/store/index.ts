import {create} from "zustand";
import {macbookColors} from "@/app/constants";

type MacbookStoreState = {
    color: string;
    scale: number;
}

type MacbookStoreAction = {
    setColor: (color: MacbookStoreState['color']) => void;
    setScale: (scale: MacbookStoreState['scale']) => void;
    reset: () => void;
}

const defaultColor = macbookColors[1].value;

const useMacbookStore = create<MacbookStoreState & MacbookStoreAction>((set) => ({
    color: defaultColor,
    setColor: (color: string) => set({color}),

    scale: 0.08,
    setScale: (scale: number) => set({scale}),

    reset: () => set({
        color: defaultColor,
        scale: 0.08,
    }),
}));

export default useMacbookStore;
