// src/pages/HomePage.tsx
import { useNavigate } from "react-router-dom";
import FeatureCards from "../components/home/FeatureCards";
import InterviewPreview from "../components/home/InterviewPreview";

export default function HomePage() {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/setup");
  };

  return (
    <section className="min-h-[calc(100vh-64px)] flex items-center bg-slate-950">
      <div className="mx-auto w-full max-w-6xl px-6 py-12">
        <div className="flex flex-col justify-between gap-12 lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            <h1 className="text-3xl font-bold leading-snug text-white md:text-4xl">
              프론트엔드 기술 면접 연습을 위한 학습 도구 DevPrep
            </h1>

            <div className="mt-6 space-y-3 text-lg leading-relaxed text-slate-300">
              <p>실제 면접에서 나올 수 있는 질문을 확인하고</p>
              <p>답변을 정리하며 스스로 실력을 점검해보세요.</p>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <InterviewPreview />
          </div>
        </div>

        <div className="mt-16">
          <FeatureCards />
        </div>

        <div className="mt-16 flex flex-col items-center gap-4">
          <p className="text-base text-slate-400">
            지금 바로 DevPrep으로 면접 연습을 시작해보세요
          </p>

          <button
            type="button"
            onClick={handleStart}
            className="rounded-2xl bg-blue-500 px-16 py-4 text-xl font-semibold text-white transition hover:bg-blue-400"
          >
            시작하기
          </button>
        </div>
      </div>
    </section>
  );
}