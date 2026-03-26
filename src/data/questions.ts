export type Tech = 
  | "typescript"
  | "react"
  | "javascript"
  | "browser"
  | "network"
  | "htmlcss";

export interface QuestionItem {
  id: string;
  tech: Tech;
  question: string;
  answer: string;
}

export const questions: QuestionItem[] = [
  // Typescript
    {
    id: "ts-1",
    tech: "typescript",
    question: "TypeScript를 사용하는 이유는 무엇인가요?",
    answer: "정적 타입을 통해 컴파일 단계에서 오류를 발견할 수 있고, 코드 안정성과 유지보수성이 향상된다."
  },
  {
    id: "ts-2",
    tech: "typescript",
    question: "interface와 type의 차이는 무엇인가요?",
    answer: "interface는 확장(extends)에 용이하고 선언 병합이 가능하며, type은 유니온/튜플 등 다양한 타입 표현에 유리하다."
  },
  {
    id: "ts-3",
    tech: "typescript",
    question: "any와 unknown의 차이는 무엇인가요?",
    answer: "any는 타입 체크를 무시하지만 unknown은 타입을 확인한 후에만 사용할 수 있어 더 안전하다."
  },
  {
    id: "ts-4",
    tech: "typescript",
    question: "제네릭(Generic)은 무엇인가요?",
    answer: "타입을 함수나 클래스 외부에서 지정할 수 있게 해 재사용성과 타입 안정성을 높이는 문법이다."
  },
  {
    id: "ts-5",
    tech: "typescript",
    question: "타입 단언(Type Assertion)이란?",
    answer: "개발자가 타입을 더 잘 알고 있을 때 타입스크립트에게 특정 타입이라고 알려주는 방식이다."
  },
  {
    id: "ts-6",
    tech: "typescript",
    question: "Union 타입이란?",
    answer: "여러 타입 중 하나가 될 수 있는 타입을 의미한다. 예: string | number"
  },
  {
    id: "ts-7",
    tech: "typescript",
    question: "Intersection 타입이란?",
    answer: "여러 타입을 모두 만족해야 하는 타입을 의미한다."
  },
  {
    id: "ts-8",
    tech: "typescript",
    question: "enum의 특징은 무엇인가요?",
    answer: "관련된 상수 값을 묶어서 사용할 수 있으며 가독성과 유지보수성이 좋아진다."
  },
  {
    id: "ts-9",
    tech: "typescript",
    question: "타입 가드(Type Guard)란?",
    answer: "런타임에서 타입을 좁혀주는 방법으로 typeof, instanceof 등을 사용한다."
  },
  {
    id: "ts-10",
    tech: "typescript",
    question: "Optional 타입은 무엇인가요?",
    answer: "속성이 있을 수도 있고 없을 수도 있음을 나타내며 ?를 사용한다."
  },

  // React
  
  {
    id: "react-1",
    tech: "react",
    question: "React의 핵심 개념은 무엇인가요?",
    answer: "컴포넌트 기반 구조와 Virtual DOM을 통한 효율적인 UI 업데이트이다."
  },
  {
    id: "react-2",
    tech: "react",
    question: "state와 props의 차이는 무엇인가요?",
    answer: "props는 부모로부터 전달받는 값이고 state는 컴포넌트 내부에서 관리되는 값이다."
  },
  {
    id: "react-3",
    tech: "react",
    question: "useState의 역할은 무엇인가요?",
    answer: "컴포넌트에서 상태를 관리하고 변경 시 리렌더링을 발생시킨다."
  },
  {
    id: "react-4",
    tech: "react",
    question: "useEffect는 언제 사용하나요?",
    answer: "사이드 이펙트 처리(데이터 fetching, 이벤트 등록 등)에 사용한다."
  },
  {
    id: "react-5",
    tech: "react",
    question: "Virtual DOM이란?",
    answer: "실제 DOM을 메모리 상에 추상화한 것으로 변경 사항만 비교하여 업데이트한다."
  },
  {
    id: "react-6",
    tech: "react",
    question: "key props는 왜 필요한가요?",
    answer: "리스트 렌더링 시 요소의 변경을 효율적으로 추적하기 위해 필요하다."
  },
  {
    id: "react-7",
    tech: "react",
    question: "컴포넌트 재렌더링 조건은?",
    answer: "state 또는 props가 변경될 때 발생한다."
  },
  {
    id: "react-8",
    tech: "react",
    question: "useMemo의 역할은?",
    answer: "값을 메모이제이션하여 불필요한 재계산을 방지한다."
  },
  {
    id: "react-9",
    tech: "react",
    question: "useCallback은 언제 쓰나요?",
    answer: "함수 재생성을 방지하여 성능 최적화할 때 사용한다."
  },
  {
    id: "react-10",
    tech: "react",
    question: "controlled component란?",
    answer: "입력값을 React state로 관리하는 컴포넌트이다."
  },

  // javascript
  {
    id: "js-1",
    tech: "javascript",
    question: "호이스팅이란 무엇인가요?",
    answer: "변수와 함수 선언이 스코프의 최상단으로 끌어올려진 것처럼 동작하는 자바스크립트의 특성입니다.",
  },
  {
    id: "js-2",
    tech: "javascript",
    question: "var, let, const의 차이는 무엇인가요?",
    answer: "var는 함수 스코프, let과 const는 블록 스코프를 가지며 const는 재할당이 불가능합니다.",
  },
  {
    id: "js-3",
    tech: "javascript",
    question: "클로저(Closure)란 무엇인가요?",
    answer: "함수가 선언된 환경의 변수에 접근할 수 있는 특성입니다.",
  },
  {
    id: "js-4",
    tech: "javascript",
    question: "이벤트 루프(Event Loop)는 무엇인가요?",
    answer: "비동기 작업을 처리하기 위해 콜 스택과 큐를 관리하는 자바스크립트의 실행 구조입니다.",
  },
  {
    id: "js-5",
    tech: "javascript",
    question: "Promise란 무엇인가요?",
    answer: "비동기 작업의 완료 또는 실패를 처리하기 위한 객체입니다.",
  },
  {
    id: "js-6",
    tech: "javascript",
    question: "async/await는 무엇인가요?",
    answer: "Promise를 기반으로 비동기 코드를 동기처럼 작성할 수 있게 해주는 문법입니다.",
  },
  {
    id: "js-7",
    tech: "javascript",
    question: "얕은 복사와 깊은 복사의 차이는 무엇인가요?",
    answer: "얕은 복사는 참조값을 공유하고, 깊은 복사는 완전히 새로운 객체를 생성합니다.",
  },
  {
    id: "js-8",
    tech: "javascript",
    question: "this는 무엇을 가리키나요?",
    answer: "함수가 호출되는 방식에 따라 달라지는 실행 컨텍스트의 객체를 가리킵니다.",
  },
  {
    id: "js-9",
    tech: "javascript",
    question: "스코프(Scope)란 무엇인가요?",
    answer: "변수에 접근할 수 있는 범위를 의미합니다.",
  },
  {
    id: "js-10",
    tech: "javascript",
    question: "실행 컨텍스트란 무엇인가요?",
    answer: "코드가 실행되는 환경으로 변수, 함수, this 등의 정보를 포함합니다.",
  },

  // browser
  {
    id: "browser-1",
    tech: "browser",
    question: "브라우저의 렌더링 과정은 어떻게 이루어지나요?",
    answer: "HTML 파싱 → DOM 생성 → CSSOM 생성 → Render Tree 생성 → Layout → Paint 순으로 진행됩니다.",
  },
  {
    id: "browser-2",
    tech: "browser",
    question: "DOM이란 무엇인가요?",
    answer: "HTML 문서를 객체 구조로 표현한 것입니다.",
  },
  {
    id: "browser-3",
    tech: "browser",
    question: "Reflow와 Repaint의 차이는 무엇인가요?",
    answer: "Reflow는 레이아웃 변경, Repaint는 스타일 변경을 의미합니다.",
  },
  {
    id: "browser-4",
    tech: "browser",
    question: "LocalStorage와 SessionStorage 차이는?",
    answer: "LocalStorage는 영구 저장, SessionStorage는 세션 종료 시 삭제됩니다.",
  },
  {
    id: "browser-5",
    tech: "browser",
    question: "쿠키(Cookie)란 무엇인가요?",
    answer: "브라우저에 저장되는 작은 데이터로 서버와 함께 전송됩니다.",
  },
  {
    id: "browser-6",
    tech: "browser",
    question: "이벤트 버블링이란?",
    answer: "이벤트가 자식에서 부모로 전파되는 현상입니다.",
  },
  {
    id: "browser-7",
    tech: "browser",
    question: "이벤트 캡처링이란?",
    answer: "이벤트가 부모에서 자식으로 내려가는 과정입니다.",
  },
  {
    id: "browser-8",
    tech: "browser",
    question: "CSR과 SSR 차이는?",
    answer: "CSR은 클라이언트 렌더링, SSR은 서버에서 HTML 생성 후 전달합니다.",
  },
  {
    id: "browser-9",
    tech: "browser",
    question: "브라우저 캐시란?",
    answer: "리소스를 저장하여 재요청 시 빠르게 로드하는 기능입니다.",
  },
  {
    id: "browser-10",
    tech: "browser",
    question: "웹 스토리지란?",
    answer: "LocalStorage와 SessionStorage를 포함한 클라이언트 저장소입니다.",
  },
  // network
  {
    id: "network-1",
    tech: "network",
    question: "HTTP란 무엇인가요?",
    answer: "클라이언트와 서버 간 통신을 위한 프로토콜입니다.",
  },
  {
    id: "network-2",
    tech: "network",
    question: "GET과 POST 차이는?",
    answer: "GET은 조회, POST는 데이터 전송에 사용됩니다.",
  },
  {
    id: "network-3",
    tech: "network",
    question: "HTTP 상태코드 200은?",
    answer: "요청이 성공적으로 처리되었음을 의미합니다.",
  },
  {
    id: "network-4",
    tech: "network",
    question: "HTTP 상태코드 404는?",
    answer: "요청한 리소스를 찾을 수 없음을 의미합니다.",
  },
  {
    id: "network-5",
    tech: "network",
    question: "HTTPS란 무엇인가요?",
    answer: "HTTP에 SSL/TLS 암호화가 적용된 프로토콜입니다.",
  },
  {
    id: "network-6",
    tech: "network",
    question: "REST API란 무엇인가요?",
    answer: "자원을 URI로 표현하고 HTTP 메서드로 처리하는 API 설계 방식입니다.",
  },
  {
    id: "network-7",
    tech: "network",
    question: "CORS란 무엇인가요?",
    answer: "다른 출처 간 리소스 요청을 제한하는 보안 정책입니다.",
  },
  {
    id: "network-8",
    tech: "network",
    question: "DNS란 무엇인가요?",
    answer: "도메인 이름을 IP 주소로 변환하는 시스템입니다.",
  },
  {
    id: "network-9",
    tech: "network",
    question: "TCP와 UDP 차이는?",
    answer: "TCP는 신뢰성 보장, UDP는 빠르지만 신뢰성은 낮습니다.",
  },
  {
    id: "network-10",
    tech: "network",
    question: "쿠키와 세션 차이는?",
    answer: "쿠키는 클라이언트 저장, 세션은 서버에 저장됩니다.",
  },
  // htmlcss
  {
    id: "html-1",
    tech: "htmlcss",
    question: "시맨틱 태그란 무엇인가요?",
    answer: "의미를 가지는 HTML 태그로 구조를 명확하게 합니다.",
  },
  {
    id: "html-2",
    tech: "htmlcss",
    question: "div와 span의 차이는?",
    answer: "div는 block, span은 inline 요소입니다.",
  },
  {
    id: "html-3",
    tech: "htmlcss",
    question: "display 속성 종류는?",
    answer: "block, inline, inline-block, flex 등이 있습니다.",
  },
  {
    id: "html-4",
    tech: "htmlcss",
    question: "flexbox란 무엇인가요?",
    answer: "1차원 레이아웃을 구성하는 CSS 방식입니다.",
  },
  {
    id: "html-5",
    tech: "htmlcss",
    question: "grid와 flex 차이는?",
    answer: "grid는 2차원, flex는 1차원 레이아웃입니다.",
  },
  {
    id: "html-6",
    tech: "htmlcss",
    question: "position 속성 종류는?",
    answer: "static, relative, absolute, fixed, sticky가 있습니다.",
  },
  {
    id: "html-7",
    tech: "htmlcss",
    question: "z-index는 무엇인가요?",
    answer: "요소의 쌓임 순서를 제어합니다.",
  },
  {
    id: "html-8",
    tech: "htmlcss",
    question: "반응형 웹이란?",
    answer: "화면 크기에 따라 레이아웃이 변하는 웹입니다.",
  },
  {
    id: "html-9",
    tech: "htmlcss",
    question: "box-sizing이란?",
    answer: "요소의 크기 계산 방식을 정의합니다.",
  },
  {
    id: "html-10",
    tech: "htmlcss",
    question: "margin과 padding 차이는?",
    answer: "margin은 바깥 여백, padding은 내부 여백입니다.",
  },
];