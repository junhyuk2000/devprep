import { create } from "zustand"
import type { QuestionItem } from "../data/questions"

type Evaluation = "correct" | "review" | "wrong" ;
type PracticeMode = "normal" | "review" ;

interface PracticeRecord {
    questionId: string;
    evaluation: Evaluation;
}

interface PracticeState {
    mode: PracticeMode;

    records: PracticeRecord[];
    practiceQuestions: QuestionItem[];
    currentIndex: number;


    setMode: (mode: PracticeMode) => void;
    goNext: () => void;
    setPracticeQuestions: (questions: QuestionItem[])=> void;

    addRecord: (record: PracticeRecord) => void;
    resetRecords: () => void;

    resetPractice:() => void
}

export const usePracticeStore = create<PracticeState>((set)=>({
    mode: "normal",

    records : [],
    practiceQuestions: [],
    currentIndex: 0,

    setMode: (mode) => set({ mode }),

    addRecord: (record) =>
        set((state)=>({
            records: [...state.records, record],
        })),

    resetRecords:() =>
        set({records: []}),

    goNext: () =>
        set((state)=>({
            currentIndex: state.currentIndex + 1
        })),

    setPracticeQuestions: (questions)=>
        set({
            practiceQuestions: questions,
            currentIndex: 0,
        }),
    resetPractice: () =>
        set({
            practiceQuestions: [],
            currentIndex: 0,
            mode: "normal",
        })
}));