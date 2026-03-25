export type Tech = 
  | "typescript"
  | "react"
  | "javascript"
  | "browser"
  | "network"
  | "htmlcss";

export interface QuestionItem {
  id: string;
  tech: Tech;
  question: string;
  answer: string;
}

export const questions: QuestionItem[] = [
  {
    id: "ts-1",
    tech: "typescript",
    question: "TypeScript를 사용하는 이유는 무엇인가요?",
    answer: "정적 타입을 통해 개발 단계에서 오류를 줄이고 유지보수성을 높일 수 있습니다.",
  },
  {
    id: "ts-2",
    tech: "typescript",
    question: "interface와 type의 차이를 설명해보세요.",
    answer: "둘 다 타입 정의에 사용되지만 interface는 객체 구조 정의와 확장에 강하고, type은 유니온이나 인터섹션 같은 표현이 더 유연합니다.",
  },
  {
    id: "react-1",
    tech: "react",
    question: "state와 props의 차이를 설명해보세요.",
    answer: "props는 부모가 전달하는 값이고, state는 컴포넌트 내부에서 관리하는 값입니다.",
  },
  {
    id: "react-2",
    tech: "react",
    question: "React에서 key가 왜 필요한가요?",
    answer: "리스트 렌더링에서 요소를 식별해 효율적으로 비교하고 업데이트하기 위해 필요합니다.",
  },
];