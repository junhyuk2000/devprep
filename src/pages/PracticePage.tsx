import { Link } from "react-router-dom";

export default function PracticePage() {
  return (
    <div>
      <h1>Practice Page</h1>
      <p>질문 보고 답변하는 페이지</p>

      <div style={{ display: "flex", gap: "12px", marginTop: "20px" }}>
        <Link to="/setup">설정으로</Link>
        <Link to="/result">결과 보기</Link>
      </div>
    </div>
  );
}