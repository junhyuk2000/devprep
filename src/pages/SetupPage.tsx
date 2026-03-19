import { Link } from "react-router-dom";

export default function SetupPage() {
  return (
    <div>
      <h1>Setup Page</h1>
      <p>과목, 문제 수, 난이도 등을 설정하는 페이지</p>

      <div style={{ display: "flex", gap: "12px", marginTop: "20px" }}>
        <Link to="/">홈으로</Link>
        <Link to="/practice">연습 시작</Link>
      </div>
    </div>
  );
}