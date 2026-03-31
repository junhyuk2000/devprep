import { create } from "zustand";

export type Job = "frontend" | "backend" | "fullstack" | null;
export type QuestionCount = 5 | 10 | 15 | 20 | 25 | 30 | null;
export type Tech = "typescript" | "react" | "javascript" | "browser" | "network" | "htmlcss";

interface InterviewState {
    job: Job;
    questionCount: QuestionCount;
    selectedTech: Tech[];

    setJob: (job: Job) => void;
    setQuestionCount: (questionCount: QuestionCount) => void;
    toggleTech: (tech: Tech) => void

    resetInfo: ()=> void
}

export const useInterviewStore = create<InterviewState>()((set) => ({
    job : null,
    questionCount : null,
    selectedTech: [],

    setJob: (job) =>set({ 
        job, 
        selectedTech: [],
    }),
    setQuestionCount: (questionCount) =>set({ questionCount }),

    toggleTech: (tech) =>
        set((state) => ({
        selectedTech: state.selectedTech.includes(tech)
            ? state.selectedTech.filter((item) => item !== tech)
            : [...state.selectedTech, tech],
        })),
    
    resetInfo:()=>
        set({
            job: null,
            questionCount: null,
            selectedTech: [],
        })

}))

