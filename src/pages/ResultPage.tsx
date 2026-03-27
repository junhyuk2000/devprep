import { useInterviewStore } from "../store/useInterviewStore";
import { usePracticeStore } from "../store/usePracticeStore"
import { useNavigate } from "react-router-dom";

export default function ResultPage() {
  const navigate = useNavigate();


  const records = usePracticeStore((state)=> state.records);
  const resetInfo = useInterviewStore((state)=> state.resetInfo);

  const correct = records.filter((item) => item.evaluation === "correct");
  const review = records.filter((item) => item.evaluation === "review");
  const wrong = records.filter((item) => item.evaluation === "wrong");

  const totalCount = records.length;

  const correctPercent = totalCount === 0 ? 0 : (correct.length / totalCount) * 100;
  const reviewPercent = totalCount === 0 ? 0 : (review.length / totalCount) * 100;
  const wrongPercent = totalCount === 0 ? 0 : (wrong.length / totalCount) * 100;

  const resetPractice = usePracticeStore((state)=> state.resetPractice)
  const resetRecords = usePracticeStore((state)=> state.resetRecords)
  return (
    <section className="min-h-[calc(100vh-64px)] bg-[#020b26] px-6 py-12 text-white">
      <div className="mx-auto w-full max-w-5xl">
        <h1 className="mb-10 text-4xl font-bold tracking-tight">연습 결과</h1>

        <div className="grid gap-6 lg:grid-cols-[1.8fr_1fr]">
          <div className="rounded-[24px] border border-[#1b2a52] bg-[#081633] p-6">
            <p className="mb-8 text-2xl font-semibold">총 문제 : {records.length}</p>

            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-24 text-lg font-semibold">정확</div>
                <div className="h-8 flex-1 rounded-md bg-[#111f42]">
                  <div 
                    className="h-full rounded-md bg-[#3c6869] transition-all duration-500 ease-out" 
                    style={{ width : `${correctPercent}%`}}
                  />
                </div>
                <div className="w-6 text-right text-lg font-bold">{correct.length}</div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-24 text-lg font-semibold">복습 필요</div>
                <div className="h-8 flex-1 rounded-md bg-[#111f42]">
                  <div 
                    className="h-full rounded-md bg-[#c39134] transition-all duration-500 ease-out" 
                    style={{ width : `${reviewPercent}%`}}
                  />
                </div>
                <div className="w-6 text-right text-lg font-bold">{review.length}</div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-24 text-lg font-semibold">틀림</div>
                <div className="h-8 flex-1 rounded-md bg-[#111f42]">
                  <div 
                    className="h-full rounded-md bg-[#8f434f] transition-all duration-500 ease-out" 
                    style={{ width : `${wrongPercent}%`}}
                    />
                </div>
                <div className="w-6 text-right text-lg font-bold">{wrong.length}</div>
              </div>
            </div>
          </div>

          <div className="rounded-[24px] border border-[#1b2a52] bg-[#081633] p-6">
            <h2 className="mb-6 text-2xl font-bold">카테고리 분석</h2>

            <div className="space-y-6">
              <div className="border-b border-[#1b2a52] pb-4">
                <div className="mb-1 flex justify-between">
                  <span className="text-lg font-semibold">React</span>
                  <span className="text-xs text-[#7f92c2]">(2문제)</span>
                </div>

                <div className="mb-1 flex h-2 rounded-full bg-[#111f42]">
                  <div className="w-[50%] rounded-l-full bg-[#3c6869]" />
                  <div className="w-[50%] rounded-r-full bg-[#c39134]" />
                </div>

                <p className="text-xs text-[#8fa6d8]">
                  1 정확 / 1 복습 필요 / 0 틀림
                </p>
              </div>

              <div className="border-b border-[#1b2a52] pb-4">
                <div className="mb-1 flex justify-between">
                  <span className="text-lg font-semibold">Browser</span>
                  <span className="text-xs text-[#7f92c2]">(4문제)</span>
                </div>

                <div className="mb-1 flex h-2 rounded-full bg-[#111f42]">
                  <div className="w-[25%] rounded-l-full bg-[#3c6869]" />
                  <div className="w-[25%] bg-[#c39134]" />
                  <div className="w-[50%] rounded-r-full bg-[#8f434f]" />
                </div>

                <p className="text-xs text-[#8fa6d8]">
                  1 정확 / 1 복습 필요 / 2 틀림
                </p>
              </div>

              <div>
                <div className="mb-1 flex justify-between">
                  <span className="text-lg font-semibold">Network</span>
                  <span className="text-xs text-[#7f92c2]">(1문제)</span>
                </div>

                <div className="mb-1 flex h-2 rounded-full bg-[#111f42]">
                  <div className="w-[100%] rounded-full bg-[#c39134]" />
                </div>

                <p className="text-xs text-[#8fa6d8]">
                  0 정확 / 1 복습 필요 / 0 틀림
                </p>
              </div>
            </div>

            <div className="mt-8 flex justify-between border-t border-[#1b2a52] pt-5">
              <span className="text-lg font-semibold">약점 분석</span>
              <span className="text-sm text-[#c7d4f7]">Browser, Network</span>
            </div>
          </div>
        </div>

        <div className="mt-8 space-y-4">
          <button className="w-full rounded-lg bg-gradient-to-r from-[#4f7df7] to-[#5d5fef] py-4 text-lg font-semibold text-white transition hover:brightness-110">
            복습 시작 ({review.length + wrong.length}문제)
          </button>

          <p className="text-center text-sm text-[#7f92c2]">
            복습이 필요하거나 틀린 문제를 다시 풀어봅니다
          </p>

          <button 
          className="w-full rounded-lg bg-[#1a2747] py-4 text-lg font-semibold text-[#dce6ff] transition hover:bg-[#22345d]"
          onClick={()=>{
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