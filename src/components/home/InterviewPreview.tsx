export default function InterviewPreview() {
  return (
    <div className="w-[380px] overflow-hidden rounded-2xl border border-slate-700 bg-white shadow-lg">
      <div className="flex items-center justify-between border-b border-slate-200 px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-200 text-sm">
            👨‍💼
          </div>
          <span className="text-sm font-medium text-slate-800">Interviewer</span>
        </div>

        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
        </div>
      </div>

      <div className="space-y-6 px-4 py-5">
        <div className="max-w-[280px] rounded-2xl bg-slate-100 px-4 py-3 text-sm text-slate-700">
          브라우저의 작동원리를 설명해주세요
        </div>

        <div className="flex items-center gap-3">
          <div className="h-10 flex-1 rounded-xl bg-slate-100" />
          <button
            type="button"
            className="rounded-lg bg-blue-500 px-4 py-2 text-sm font-medium text-white"
          >
            답변하기
          </button>
        </div>
      </div>
    </div>
  );
}