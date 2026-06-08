import { useInterviewStore } from "../store/useInterviewStore";
import { usePracticeStore } from "../store/usePracticeStore"
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function ResultPage() {
  
  const navigate = useNavigate();
  const records = usePracticeStore((state)=> state.records);

  useEffect(() => {
    if (records.length === 0) {
      navigate("/setup", { replace: true });
    }
  }, [records, navigate]);
  
  if (records.length === 0) {
    return null;
  }

  const resetInfo = useInterviewStore((state)=> state.resetInfo);

  const correct = records.filter((item) => item.evaluation === "correct");
  const review = records.filter((item) => item.evaluation === "review");
  const wrong = records.filter((item) => item.evaluation === "wrong");

  const totalCount = records.length;

  const correctPercent = totalCount === 0 ? 0 : (correct.length / totalCount) * 100;
  const reviewPercent = totalCount === 0 ? 0 : (review.length / totalCount) * 100;
  const wrongPercent = totalCount === 0 ? 0 : (wrong.length / totalCount) * 100;

  const resetPractice = usePracticeStore((state)=> state.resetPractice);
  const resetRecords = usePracticeStore((state)=> state.resetRecords);

  ///////////////////////////////////////////////////////////////////////////

  const techStats : Record<string, { correct: number, review: number, wrong: number }> = {};

  const practiceQuestions = usePracticeStore((state)=>state.practiceQuestions)

  records.forEach((records) => {
      const matchedQuestion = practiceQuestions.find((question)=>(
        question.id === records.questionId
      ));

      if(!matchedQuestion) return;

      const tech = matchedQuestion.tech;

      if(!techStats[tech]){
        techStats[tech] = {
          correct: 0,
          review: 0,
          wrong: 0,
        };
      }

      techStats[tech][records.evaluation]++;
  });

  const techStatsArray = Object.entries(techStats);

  const weakTechs = techStatsArray.filter(([, stat]) => {
    return stat.wrong > 0 || (stat.correct === 0 && stat.review > 0);
  })
  .map(([tech]) => tech);

  ///////////////////////////////////////////////////////////////////////////
  const setMode = usePracticeStore((state)=> state.setMode);
  const setPracticeQuestions = usePracticeStore((state)=> state.setPracticeQuestions);

  const reviewTarget = records.filter((record)=>(
    record.evaluation === "review" || record.evaluation === "wrong"
  ));

  const reviewPractice = reviewTarget.map((record)=>(
    practiceQuestions.find((question)=>(
      question.id === record.questionId
    ))
  )).filter((q)=>q !== undefined);

return (
  <section className="min-h-[calc(100vh-64px)] bg-[#020b26] px-6 py-12 text-white">
    <div className="mx-auto w-full max-w-5xl">
      <h1 className="mb-10 text-4xl font-bold tracking-tight">연습 결과</h1>

      <div className="grid gap-6 lg:grid-cols-[1.8fr_1fr]">

        {/* 왼쪽 */}
        <div className="space-y-6">

          {/* 🔹 위 카드 (살짝 줄임) */}
          <div className="rounded-[24px] border border-[#1b2a52] bg-[#081633] px-6 py-5">
            <p className="mb-8 text-2xl font-semibold">총 문제 : {records.length}</p>

            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-24 text-lg font-semibold">정확</div>
                <div className="h-8 flex-1 rounded-md bg-[#111f42]">
                  <div
                    className="h-full rounded-md bg-[#3c6869] transition-all duration-500 ease-out"
                    style={{ width: `${correctPercent}%` }}
                  />
                </div>
                <div className="w-6 text-right text-lg font-bold">{correct.length}</div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-24 text-lg font-semibold">복습 필요</div>
                <div className="h-8 flex-1 rounded-md bg-[#111f42]">
                  <div
                    className="h-full rounded-md bg-[#c39134] transition-all duration-500 ease-out"
                    style={{ width: `${reviewPercent}%` }}
                  />
                </div>
                <div className="w-6 text-right text-lg font-bold">{review.length}</div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-24 text-lg font-semibold">틀림</div>
                <div className="h-8 flex-1 rounded-md bg-[#111f42]">
                  <div
                    className="h-full rounded-md bg-[#8f434f] transition-all duration-500 ease-out"
                    style={{ width: `${wrongPercent}%` }}
                  />
                </div>
                <div className="w-6 text-right text-lg font-bold">{wrong.length}</div>
              </div>
            </div>
          </div>

          {/* 🔹 요약 카드 (높이 보강) */}
          <div className="rounded-[24px] border border-[#1b2a52] bg-[#081633] p-6">
            <h2 className="mb-3 text-lg font-semibold">요약</h2>

            <div className="grid grid-cols-3 gap-4 py-4 text-center">
              <div>
                <p className="text-xs text-[#8fa6d8]">정확률</p>
                <p className="text-lg font-bold text-white">
                  {correctPercent.toFixed(0)}%
                </p>
              </div>

              <div>
                <p className="text-xs text-[#8fa6d8]">복습</p>
                <p className="text-lg font-bold text-yellow-400">
                  {review.length + wrong.length}
                </p>
              </div>

              <div>
                <p className="text-xs text-[#8fa6d8]">약점</p>
                <p className="text-lg font-bold text-red-400">
                  {weakTechs.length}
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* 오른쪽 */}
        <div className="rounded-[24px] border border-[#1b2a52] bg-[#081633] p-6">
          <h2 className="mb-6 text-2xl font-bold">카테고리 분석</h2>

          {techStatsArray.map(([tech, stat]) => {
            const techStatTotal = stat.correct + stat.review + stat.wrong;

            const statCorrectPercent = (stat.correct / techStatTotal) * 100;
            const statReviewPercent = (stat.review / techStatTotal) * 100;
            const statWrongPercent = (stat.wrong / techStatTotal) * 100;

            return (
              <div className="space-y-6" key={tech}>
                <div className="border-b border-[#1b2a52] pb-4">
                  <div className="mb-1 flex justify-between">
                    <span className="text-lg font-semibold">{tech}</span>
                    <span className="text-xs text-[#7f92c2]">
                      {techStatTotal}문제
                    </span>
                  </div>

                  <div className="mb-1 flex h-2 rounded-full bg-[#111f42]">
                    <div
                      className="rounded-l-full bg-[#3c6869]"
                      style={{ width: `${statCorrectPercent}%` }}
                    />
                    <div
                      className="rounded-r-full bg-[#c39134]"
                      style={{ width: `${statReviewPercent}%` }}
                    />
                    <div
                      className="rounded-r-full bg-[#8f434f]"
                      style={{ width: `${statWrongPercent}%` }}
                    />
                  </div>

                  <p className="text-xs text-[#8fa6d8]">
                    {stat.correct} 정확 / {stat.review} 복습 필요 / {stat.wrong} 틀림
                  </p>
                </div>
              </div>
            );
          })}

          <div className="mt-8 border-t border-[#1b2a52] pt-5">
            <p className="mb-3 text-lg font-semibold">약점 분석</p>

            {weakTechs.length > 0 ? (
              <div className="flex flex-wrap gap-2">
                {weakTechs.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-slate-700 px-3 py-1 text-xs text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            ) : (
              <p className="text-sm text-[#c7d4f7]">없음</p>
            )}
          </div>
        </div>
      </div>

      <div className="mt-8 space-y-4">
        <button
          className="w-full rounded-lg bg-gradient-to-r from-[#4f7df7] to-[#5d5fef] py-4 text-lg font-semibold text-white transition hover:brightness-110"
          onClick={() => {
            if (reviewPractice.length === 0) {
              alert("복습할 문제가 없습니다 👍");
              return;
            }

            resetRecords();
            setPracticeQuestions(reviewPractice);
            setMode("review");
            navigate("/practice");
          }}
        >
          복습 시작 ({review.length + wrong.length}문제)
        </button>

        <p className="text-center text-sm text-[#7f92c2]">
          복습이 필요하거나 틀린 문제를 다시 풀어봅니다
        </p>

        <button
          className="w-full rounded-lg bg-[#1a2747] py-4 text-lg font-semibold text-[#dce6ff] transition hover:bg-[#22345d]"
          onClick={() => {
            navigate("/");
            resetPractice();
            resetRecords();
            resetInfo();
          }}
        >
          홈으로 돌아가기
        </button>
      </div>
    </div>
  </section>
);
}