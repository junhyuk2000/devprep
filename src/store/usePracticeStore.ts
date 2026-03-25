import { create } from "zustand"

type Evaluation = "correct" | "review" | "wrong" ;

interface PracticeRecord {
    questionId: string;
    evaluation: Evaluation;
}

interface PracticeState {
    records: PracticeRecord[];

    addRecord: (record: PracticeRecord) => void;
    resetRecord: () => void;
}

export const usePracticeStore = create<PracticeState>((set)=>({
    records : [],

    addRecord: (record) =>
        set((state)=>({
            records: [...state.records, record],
        })),

    resetRecord:() =>
        set({records: []}),
}));