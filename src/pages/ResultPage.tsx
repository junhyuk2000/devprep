import { Link } from "react-router-dom";

export default function ResultPage() {
  return (
    <div>
      <h1>Result Page</h1>
      <p>자기평가 결과와 복습 시작 버튼이 들어갈 페이지</p>

      <div style={{ display: "flex", gap: "12px", marginTop: "20px" }}>
        <Link to="/">홈으로</Link>
        <Link to="/practice">복습 시작</Link>
      </div>
    </div>
  );
}