# TodoList

## 사용 언어 및 API

- React
- React-Route-Dom
- Styled-Componets
- Axios

## 사용한 React API && Tech

- function component
- Contenxt API(useReducer)
- React Hooks
- useState

## 데이터 명세서

1. User

- userID: String / PK / NotNull
- password: String / / NotNull

2. TodoList

- userID: String / PK, FK /
- listNum: INT / PK /
- content: String
- done: Boolean

## API 명세서

1. userAPI - [src/api/userAPI.js]<br />
   로그인과 회원가입을 통한 서버와의 통신을 담당하는 API
   중복 확인과 아이디, 비밀번호 오류 시 로그인 기능을 수행하지 않게 해줌

2. todoAPI - [src/api/todoAPI.js]<br />
   todoList의 백엔드와의 통신을 위한 API이며,<br />
   모든 함수의 반환값은 현재 userID의 최신 DB Table 값을 반환하여 줌

## 이슈 발생과 해결 방법

### _*1. context API와 비동기 통신의 연결 이슈*_

context API와 useReducer를 활용해 dispatch에서 TodoList의 CRUD를 구현하려 하였으나<br />
비동기 문법의 이해 부족과 부족한 실력으로 해결할 수 없는 오류로 인해<br />
백엔드에서 업데이트된 List를 반환하고 그 값을 받아 다시 LOAD하는 방향으로 로직을 변경함<br />

이로 인해 TodoList.jsx에서 사용한 useEffect는 Mount시 user의 List를 그려주고 다시 실행하지 않으며<br />
생성, 수정, 삭제 이벤트 발생 시 백엔드와의 통신 후 받아온 List를 context의 state에 저장하고 다시 랜더링을 하게 되었음<br />
따라서, dispatch에선 오로지 최신 state의 정보만을 return하는 LOAD type만 사용하게 변경함

### _*2. user context API가 꼭 필요한가?*_

user 정보를 사용하는데 마찬가지로 contextAPI를 이용하려 하였으나, <br />
백엔드에서 통과된 userID를 localStorage에 저장하는 방식을 채택함으로써, <br />
userID가 필요한 부분에서 localStorage의 값을 가져와 사용하는 것으로 로직을 구성하였음

### _*3. Axios의 put, delete 사용 불가*_

서버에서 post가 아닌 put이나 delete를 사용할 경우 데이터를 정상적으로 받지 못하는 이슈가 발생하여
CRUD기능 전부 post를 사용하도록 변경함

## 소감

공부해가며 진행한 첫 React Project이고,<br />
Redux와 Redux-Saga를 사용해보지 못한 부분에서 큰 아쉬움을 느낌<br />
또한, BE 2 / FE 1 / Mobile 1로 진행한 팀 프로젝트로써,<br />
팀 단위로 진행하며 백엔드 개발자와의 호흡과 일정에 맞추기 위하여 팀원들의 업무를 조율하고
다독이며 팀장의로서의 책임감과 임무에 대해 경험하며,<br />
팀원간의 커뮤니케이션과 팀장의 리더쉽에 대한 고난과 중요성에 대해 배울 수 있는 귀중한 시간이음
