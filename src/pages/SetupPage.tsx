import { useInterviewStore } from "../store/useInterviewStore";
import { useNavigate } from "react-router-dom"

const JOB_OPTIONS = [
  { label: "FrontEnd", value: "frontend" },
  { label: "BackEnd", value: "backend" },
  { label: "FullStack", value: "fullstack" },
] as const;

const QUESTION_OPTIONS = [
  { label: "5", value: 5 },
  { label: "10", value: 10 },
  { label: "15", value: 15 },
  { label: "20", value: 20 },
  { label: "25", value: 25 },
  { label: "30", value: 30 },
] as const ;

const TECH_OPTIONS = [
  { label: "TypeScript", value: "typescript" },
  { label: "React", value: "react" },
  { label: "JavaScript", value: "javascript" },
  { label: "Browser", value: "browser" },
  { label: "Network", value: "network" },
  { label: "HTML/CSS", value: "htmlcss" },
] as const ;

export default function SetupPage() {
  const job = useInterviewStore((state)=>state.job);
  const questionCount = useInterviewStore((state)=>state.questionCount)
  const selectedTech = useInterviewStore((state)=>state.selectedTech)
  const setJob = useInterviewStore((state)=>state.setJob);
  const setQuestionCount = useInterviewStore((state)=> state.setQuestionCount)
  const toggleTech = useInterviewStore((state)=>state.toggleTech)
  const resetInfo = useInterviewStore((state)=>state.resetInfo)

  const canStart = job !== null && questionCount !== null && selectedTech.length > 0;

  const navigate = useNavigate();
  const handleStartInterview = ()=> {
    if(!canStart) return;
    navigate("/practice")
  };

  return (
    <section className="h-full p-6">
      <div className="mx-auto grid w-full max-w-7xl gap-8 lg:grid-cols-[1.4fr_0.9fr]">
        <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-8 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
          <div className="mb-10">
            <p className="mb-3 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-300">
              Setup Interview
            </p>

            <h1 className="mb-3 text-3xl font-bold tracking-tight sm:text-4xl">
              면접 연습 조건을 설정하세요
            </h1>

            <p className="text-sm leading-6 text-slate-400 sm:text-base">
              직무, 기술 분야, 문제 수를 설정해서
              <br />
              맞춤형 면접 연습을 시작하세요.
            </p>
          </div>

          <div className="space-y-6">
            <section className="rounded-2xl border border-white/10 bg-slate-900/80 p-6">
              <div className="mb-5">
                <h2 className="text-lg font-semibold">직무</h2>
                <p className="mt-1 text-sm text-slate-400">
                  연습할 직무 분야를 선택하세요
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {JOB_OPTIONS.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    className={
                      `rounded-2xl border border-white/10 px-4 py-4 text-sm font-medium transition
                      ${job === option.value 
                        ? "bg-cyan-400 text-black"
                        : "bg-slate-800 text-white hover:bg-slate-700"
                      }
                      `
                    }
                    onClick={() => setJob(option.value)}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </section>

            <section className="rounded-2xl border border-white/10 bg-slate-900/80 p-6">
              <div className="mb-5">
                <h2 className="text-lg font-semibold">문제 수</h2>
                <p className="mt-1 text-sm text-slate-400">
                  한 세션에서 연습할 문제 개수를 선택하세요
                </p>
              </div>

              <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
                {QUESTION_OPTIONS.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    className={`rounded-2xl border border-white/10 px-4 py-4 text-sm font-medium transition 
                      ${questionCount === option.value 
                        ? "bg-cyan-400 text-black"
                        : "bg-slate-800 text-white hover:bg-slate-700"
                      }
                      `
                    }
                    onClick={() => setQuestionCount(option.value)}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </section>

            <section className="rounded-2xl border border-white/10 bg-slate-900/80 p-6">
              <div className="mb-5">
                <h2 className="text-lg font-semibold">기술 분야</h2>
                <p className="mt-1 text-sm text-slate-400">
                  집중해서 연습하고 싶은 기술을 선택하세요
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                {TECH_OPTIONS.map((option) => {
                  const isActive = selectedTech.includes(option.value);

                  return (
                  <button
                    key={option.value}
                    type="button"
                    className={`rounded-full border border-white/10 px-4 py-2.5 text-sm font-medium transition 
                      ${isActive
                        ? "bg-cyan-400 text-black border-cyan-400"
                        : "bg-slate-800 text-white border-white/10 hover:bg-slate-700"
                      }
                    `}
                    onClick={() => toggleTech(option.value)}
                  >
                    {option.label}
                  </button>
                    )})}
                
              </div>
            </section>
          </div>
        </div>

        <aside className="h-fit rounded-3xl border border-white/10 bg-slate-900/70 p-8 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-cyan-300">Session Preview</p>
              <h2 className="mt-2 text-2xl font-bold">선택한 연습 조건</h2>
            </div>


            <button
            type="button"
            className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300 cursor-pointer"
            onClick={()=>resetInfo()}
            >
              ↻
            </button>

          </div>

          <div className="space-y-4">
            <div className="rounded-2xl border border-white/10 bg-slate-800/80 p-5">
              <p className="mb-2 text-sm text-slate-400">직무</p>
              <strong className="text-base font-semibold text-white">
                {job !== null
                ? job
                : "선택해주세요"
                 }
              </strong>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-800/80 p-5">
              <p className="mb-2 text-sm text-slate-400">문제 수</p>
              <strong className="text-base font-semibold text-white">
                {questionCount !== null
                ? `${questionCount} 문제`
                : "선택해주세요"
                }
              </strong>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-800/80 p-5">
              <p className="mb-2 text-sm text-slate-400">기술 분야</p>
              <div className="flex flex-wrap gap-2">
                  {selectedTech.map((tech)=>(
                    <span 
                    key={tech}
                    className="rounded-full border border-white/10 bg-slate-700 px-3 py-1 text-xs text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-cyan-400/10 bg-cyan-400/5 p-5">
            <p className="text-sm leading-6 text-slate-300">
              설정이 완료되면 맞춤형 질문 세트로 바로 면접 연습을 시작할 수 있습니다.
            </p>
          </div>

          <button
            type="button"
            disabled={!canStart}
             className={`
              mt-8 w-full rounded-2xl px-5 py-4 text-sm font-semibold transition
              ${
                canStart
                  ? "bg-cyan-400 text-slate-950 hover:brightness-110"
                  : "cursor-not-allowed bg-slate-700 text-slate-400"
              }
            `}
            onClick={handleStartInterview}
          >
            Start Interview
          </button>
        </aside>
      </div>
    </section>
  );
}