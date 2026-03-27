import { useInterviewStore } from "../store/useInterviewStore";
import { usePracticeStore } from "../store/usePracticeStore";
import { questions } from "../data/questions";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function PracticePage() {
  
  const navigate = useNavigate();

  const selectedTech = useInterviewStore((state) => state.selectedTech);
  const questionCount = useInterviewStore((state) => state.questionCount);

  const practiceQuestionsFromStore = usePracticeStore((state) => state.practiceQuestions);
  const setPracticeQuestions = usePracticeStore((state) => state.setPracticeQuestions); 

  function shuffleArray<T>(array: T[]): T[] {
    const copied = [...array];

    for (let i = copied.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [copied[i], copied[j]] = [copied[j], copied[i]];
    }

    return copied;
  }

  useEffect(()=> {
    if (practiceQuestionsFromStore.length > 0) return;
    if (questionCount === null) return;

    // 1. selectedTech 기반 선택한 문제 filter
    const filtered = questions.filter((item)=>
      selectedTech.includes(item.tech)
    );
    // 2. filter로 생성된 배열 셔플
    const shuffled = shuffleArray(filtered);
    // 3. questionCount 값 만큼 배열 slice
    const finalQuestions = shuffled.slice(0, questionCount);
    // 4. 최종 배열 set
    setPracticeQuestions(finalQuestions);
  },[practiceQuestionsFromStore.length, selectedTech, questionCount, setPracticeQuestions]);


  // 현재 index
  const currentIndex = usePracticeStore((state)=> state.currentIndex);
  // currentIndex + 1
  const goNext = usePracticeStore((state)=> state.goNext);

  // 답안 보기
  const [isAnswerVisible, setIsAnswerVisible] = useState(false);

  // 전체 배열 > 현재 index 문제
  const currentQuestion = practiceQuestionsFromStore[currentIndex];

  // 자기 평가
  const [selectedEvaluation, setSelectedEvaluation] = useState<
    "correct" | "review" | "wrong" | null
  >(null);

  const addRecord = usePracticeStore((state) => state.addRecord);

  const [isFinishing, setIsFinishing] = useState(false);

  // 다음 문제 버튼 동작
  const handleNext = () => {
    if (!currentQuestion || !selectedEvaluation) return;

    addRecord({
      questionId: currentQuestion.id,
      evaluation: selectedEvaluation,
    });

    const isLastQuestion = currentIndex === practiceQuestionsFromStore.length - 1;

    if (isLastQuestion) {
      setIsFinishing(true);

      setTimeout(() => {
        navigate("/result");
      }, 1000);

      return;
    }

    setIsAnswerVisible(false);
    setSelectedEvaluation(null);
    goNext();
  };

  if (isFinishing) { return ( <section className="min-h-[calc(100vh-64px)] bg-slate-950 text-white"> <div className="mx-auto flex min-h-[calc(100vh-64px)] max-w-7xl items-center justify-center px-6"> <p className="text-lg font-medium text-slate-300"> 결과 산출중입니다... </p> </div> </section> ); }

  return (
    <section className="min-h-[calc(100vh-64px)] bg-slate-950 text-white">
      <div className="mx-auto flex w-full max-w-7xl flex-col px-6 py-10">
        {/* 상단 타이틀 */}
        <header className="mb-8">
          <h1 className="text-4xl font-bold tracking-tight">Practice</h1>
          <p className="mt-4 text-sm text-slate-400">Question {currentIndex + 1} of {practiceQuestionsFromStore.length}</p>

          {/* 진행 바 */}
          {/* <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-white">
            <div className="h-full w-[36%] rounded-full bg-blue-500" />
          </div> */}
        </header>

        {/* 본문 레이아웃 */}
        <div className="grid gap-8 lg:grid-cols-[1.7fr_0.78fr]">
          {/* 왼쪽 질문 영역 */}
          <section className="rounded-3xl bg-slate-900/90 p-8 shadow-[0_0_0_1px_rgba(255,255,255,0.04)]">
            <h2 className="text-3xl font-semibold leading-relaxed text-slate-100 break-keep">
              {currentQuestion?.question}
            </h2>

            <div className="mt-8 rounded-2xl bg-slate-800/80 p-6">
              <div className="min-h-[220px] text-base leading-8 text-slate-400 break-keep">
                <p>답변을 자유롭게 작성해보세요</p>
                <p className="mt-2">
                  핵심 개념을 먼저 정리한 뒤 문장으로 풀어 써도 좋습니다
                </p>
              </div>

              <button
                type="button"
                className="mt-6 flex h-12 w-full items-center justify-center rounded-xl bg-indigo-500 text-base font-semibold text-white transition hover:bg-indigo-400"
                onClick={()=>setIsAnswerVisible(true)}
              >
                답변 확인하기
              </button>
            </div>
          </section>

          {/* 오른쪽 사이드 */}
          <aside className="rounded-3xl bg-indigo-950/40 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.04)]">
            {/* 모범 답안 */}
            <section>
              <h3 className="text-2xl font-semibold text-slate-100">모범 답안</h3>

              <div className="mt-5 min-h-[132px] text-sm leading-7 text-slate-300">
                <ul className="space-y-2">
                  { isAnswerVisible  &&
                    <li>{currentQuestion?.answer}</li>
                  }
                </ul>
              </div>
            </section>

            <div className="my-6 h-px bg-white/10" />

            {/* 자기 평가 */}
            <section>
              <h3 className="text-2xl font-semibold text-slate-100">자기 평가</h3>

              <div className="mt-5 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedEvaluation("correct")}
                  className={`rounded-lg px-5 py-2 text-sm font-medium text-white transition
                    ${
                      selectedEvaluation === "correct"
                        ? "bg-emerald-500"
                        : "bg-emerald-700/70 hover:bg-emerald-600"
                    }
                  `}
                >
                  정확
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedEvaluation("review")}
                  className={`rounded-lg px-5 py-2 text-sm font-medium text-white transition
                    ${
                      selectedEvaluation === "review"
                        ? "bg-amber-400"
                        : "bg-amber-600/80 hover:bg-amber-500"
                    }
                  `}
                >
                  복습필요
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedEvaluation("wrong")}
                  className={`rounded-lg px-5 py-2 text-sm font-medium text-white transition
                    ${
                      selectedEvaluation === "wrong"
                        ? "bg-rose-500"
                        : "bg-rose-700/70 hover:bg-rose-600"
                    }
                  `}
                >
                  틀림
                </button>
              </div>
            </section>

            <div className="my-6 h-px bg-white/10" />

            {/* 다음 문제 */}
            <button
              type="button"
              className="flex h-12 w-full items-center justify-center rounded-xl bg-indigo-500 text-base font-semibold text-white transition hover:bg-indigo-400 disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={handleNext}
              disabled={!selectedEvaluation}
            >
              다음 문제
            </button>
          </aside>
        </div>
      </div>
    </section>
  );
}