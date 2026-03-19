const featureList = [
  {
    title: "카테고리 선택",
    description: "React, JavaScript, TypeScript 등 원하는 주제로 연습을 시작하세요.",
  },
  {
    title: "질문 연습",
    description: "실제 면접 스타일의 질문에 답하며 스스로 답변을 정리해보세요.",
  },
  {
    title: "결과 복습",
    description: "자기평가를 바탕으로 부족한 문제를 다시 확인할 수 있습니다.",
  },
];

export default function FeatureCards() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {featureList.map((feature) => (
        <div
          key={feature.title}
          className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6"
        >
          <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
          <p className="mt-3 text-sm leading-6 text-slate-400">
            {feature.description}
          </p>
        </div>
      ))}
    </div>
  );
}