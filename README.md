# 원티드 프리온보딩 1차 과제 - 투두 리스트 앱 best practice

## 🚀🚀 [배포 보러가기](https://best-todos-3team.web.app/)
## 1. 소개

- 원티드 프리온보딩 프론트엔드 코스 6기 1-1 과제
- 투두 리스트 앱의 best practice
- 기간 : 2022/08/30 ~ 2022/09/01
- 진행방식: 팀원의 사전과제 repo 중 하나를 선정해 best practice를 논의하고 리팩토링

<br>

## 2. 실행 방법

1. `Clone`

   ```markdown
   $ git clone https://github.com/Wanted-Pre-Onboarding-Frontend-3/todo-app-best-practice.git
   ```

2. `Install`

   ```markdown
   // npm
   $ npm install

   // yarn
   $ yarn install
   ```

3. `Set` .env

   1. package.json과 같은 디렉토리에 `.env` 파일을 생성합니다.

   2. `.env` 파일 안에 아래와 같이 작성합니다.

   ```
   REACT_APP_BASE_URL = 'https://n38lcff1wk.execute-api.ap-northeast-2.amazonaws.com'
   ```

4. `start` the project

   ```markdown
   // npm
   $ npm start
   
   // yarn
   $ yarn start
   ```

<br><br>

## 3. 역할
| 이름   | 역할                                                                                                                                                                                                         |
| ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 김리후 | 팀원 / <br> 절대경로 설정 https://github.com/Wanted-Pre-Onboarding-Frontend-3/todo-app-best-practice/pull/18, <br> 전체적인 코드 정리 https://github.com/Wanted-Pre-Onboarding-Frontend-3/todo-app-best-practice/pull/27 |
| 김지현 | 팀원 / styles 폴더 구조개선                                                                                                                                                                                  |
| 서수민 | 팀원 / best practice 논의                                                                                                                                                                                       |
| 이경준 | 팀원 / 프로젝트 Deploy, 서버측 base url 환경변수로 변경                                                                                                                                                             |
| 이혜성 | **팀장** / axios Autorization 헤더 리팩토링 https://github.com/Wanted-Pre-Onboarding-Frontend-3/todo-app-best-practice/pull/16                                                                                   |
| 문선화 | 팀원 / redirect 리팩토링                                                                                                                                                                                     |
| 홍성준 | 팀원 / eslint, prettierrc 설정, 라이브러리 대체 로직 구현, 버튼 활성화 리팩토링                                                                                                                                                                                           |


<br><br>

## 4. 디렉토리 구조

```
📦src
 ┣ 📂api
 ┃ ┣ 📜api.ts
 ┃ ┣ 📜auth.ts
 ┃ ┣ 📜axios-instance.ts
 ┃ ┗ 📜todo.ts
 ┣ 📂components
 ┃ ┣ 📂icon
 ┃ ┃ ┣ 📜check.tsx
 ┃ ┃ ┗ 📜trash.tsx
 ┃ ┣ 📂text
 ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┗ 📜styles.ts
 ┃ ┣ 📂text-field
 ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┗ 📜styles.ts
 ┃ ┣ 📜Layout.tsx
 ┃ ┣ 📜LinkButton.tsx
 ┃ ┣ 📜Modal.tsx
 ┃ ┣ 📜PrivateRoute.tsx
 ┃ ┗ 📜TodoList.tsx
 ┣ 📂page
 ┃ ┣ 📂sign
 ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┣ 📜sign-in.tsx
 ┃ ┃ ┣ 📜sign-up.tsx
 ┃ ┃ ┗ 📜style.ts
 ┃ ┣ 📜main.tsx
 ┃ ┗ 📜todos.tsx
 ┣ 📂router
 ┃ ┗ 📜index.tsx
 ┣ 📂styles
 ┃ ┣ 📂colors
 ┃ ┃ ┗ 📜index.ts
 ┃ ┣ 📂font
 ┃ ┃ ┗ 📜index.ts
 ┃ ┣ 📂typography
 ┃ ┃ ┣ 📜font-size.ts
 ┃ ┃ ┣ 📜font-weight.ts
 ┃ ┃ ┣ 📜get-line-clamp-css.ts
 ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┗ 📜text-decoration-css.ts
 ┃ ┗ 📜index.ts
 ┣ 📂utils
 ┃ ┣ 📜storage.ts
 ┃ ┗ 📜styled.util.ts
 ┣ 📜.env.development
 ┣ 📜App.css
 ┣ 📜App.tsx
 ┣ 📜index.css
 ┗ 📜index.js
 ```


디렉토리 구조는 아래의 역할에 따라 구성했습니다.

<br>

| 구분        | 설명                                           |
| ----------- | ---------------------------------------------- |
| /api        | api 호출 함수를 모아둔 폴더                    |
| /page       | 페이지 단위의 컴포넌트 관리                    |
| /components | 여러 페이지에서 동시에 사용되는 컴포넌트  관리 |
| /router     | 라우팅 처리를 담당                             |
| /utils      | 전역 상태, 전역 함수를 관리                    |
| /styles     | 전역 스타일을 관리                             |

<br>

components 폴더의 경우 하위에 UI/Layout 폴더를 추가해 정리하자는 의견이 있었습니다. 논의해본 결과 팀원 모두 폴더 추가를 통해 명확한 역할 분리를 하는 것에는 동의하나, 이번 과제 규모에서는 불필요한 부분이라고 생각되어 현재와 같은 구조로 확정하였습니다.

<br><br>


## 5. Best Practice 논의 내용

### 5-1. 적용 내용

#### 5-1-1. 폴더 구조 개선


- 스타일과 관련한 파일들을 styles 폴더에 모아, 역할에 맞는 폴더구조를 만들고자 했습니다.


<br>

#### 5-1-2. axios Athorization 헤더 추가 로직 리팩토링

- 기존 코드 : TodoList, todos 컴포넌트에서 api를 호출할 때마다 Athorization 헤더를 설정하는 코드가 중복되었음.
- axios interceptors를 이용해 Athorization 헤더 추가 https://github.com/Wanted-Pre-Onboarding-Frontend-3/todo-app-best-practice/pull/16


<br>

#### 5-1-3. 절대경로 import

- 기존 코드 : 절대 경로 미설정으로 경로 확인이 상대적으로 복잡하다는 의견
- `tsconfig.json`에 baseUrl: src를 추가하여 **src 경로를 기준**으로 절대 경로를 참조하도록 적용, 가독성 높임



<br>

#### 5-1-4. API Base URL 환경변수화

- CRA(Create React APP)에서는 기본적으로 사용자가 [환경변수](https://create-react-app.dev/docs/adding-custom-environment-variables/)를 추가할 수 있습니다.
- 환경변수는 빌드타임에 포함되어 번들링됩니다. (일반 상수처럼 클라이언트 측에서 노출된다는 점은 같습니다.)


<br>

#### 5-1-5. 리다이렉트 방식 변경

- todos와 로그인/회원가입 컴포넌트에서 토큰 체크 후 리다이렉트 하는 방식에서 PrivateRoute 컴포넌트 통해 리다이렉트 하는 방식으로 변경하였습니다. 전역상태에 영향을 받는 리다이렉트 처리는 여러 컴포넌트에 하나의 컴포넌트로 처리할 수 있다면 관리 측면에서 효율적일 것이라고 판단하였습니다.


<br>

#### 5-1-6. 사전 과제 요건 충족 

- 과제 구현과 직접 연관된 라이브러리(react-hook-form)를 사용한 부분이 확인되어 코드 수정을 진행했습니다.
- 이메일, 비밀번호 유효성 만족 시 버튼 활성화 되어야하는 조건을 만족시키지 못한 부분이 있어 수정을 진행했습니다.  


<br>

#### 5-1-7. 가독성 증가
- state와 hook, 함수 사이의 줄바꿈 처리
- import 종류별로 재정렬


<br>

### 5-2. 미적용 내용


#### 5-2-1. api 관리 
- 논의 내용 : api에서 호출하는 서버 주소와, 헤더에 공통으로 들어갈 정보들을 담은 인스턴스를 생성해 서버 주소가 변경되거나, api 조건이 바뀌는 경우에 한 곳에서 관리할 수 있고, 여러컴포넌트에서 재사용할 수 있도록 하는 것이 좋다고 생각했습니다. API를 역할 별로 분리해서 관리하는 방법과, http 메소드별로 작성한 케이스도 함께 살펴보았고, 프로젝트 규모에 따라 유연하게 사용해보면 좋을 것 같다는 의견을 나눴습니다. https://github.com/Wanted-Pre-Onboarding-Frontend-3/todo-app-best-practice/pull/3#discussion_r959244725
- Best Practice로 뽑힌 repo에서는 API를 하나로 통합해 자동완성 기능을 사용할 수 있도록 한 점이 코드 작성시 팀원들이 참고할 만한 예시라고 생각하였습니다.


<br>

#### 5-2-2. 유저 사용성 측면에서 논의
- 논의 내용 : 아이디 생성 후 1.'/todo'로 페이지 이동 2. '/login'로 이동 중 어떤 것이 사용성 측면에서 좋을지에 관한 논의 


<br>

#### 5-2-3. Router 관련 과제 요건 충족 
- 논의 내용 : 과제 요건 중 '/'에 로그인/회원가입 기능을 구현하라는 조건이 있어, 1. 이를 명확히 지켜야 할지 2. 경로명에 충분히 기능이 드러나는 경우 그대로 둬도 좋을 지에 관한 논의 


<br>

#### 5-2-4. JSX prop에 화살표 함수 대신 핸들러 사용
- 기존 코드 : JSX prop에 화살표 함수가 사용됨
- 논의 내용 : 화살표 함수를 사용하면 컴포넌트를 렌더링할 때마다 새로운 함수를 생성하므로 핸들러를 따로 분리하는게 좋을 것 같으며, 가독성면에서도 나을 것 같다는 의견
  <br>
  [참고] react/jsx-no-bind
- 미적용 이유 : 핸들러 - 화살표 함수 사용이 퍼포먼스 상에 큰 차이가 없다는 결론


<br>

#### 5-2-5. api 로직의 재사용성 논의

- 기존 코드 : 여러 파일에서 반복되는 api 호출 로직
- 논의 내용 : api를 호출하며 전반적으로  반복되는 try ~ catch 로직을 뽑아내어 재사용 가능하게 개선해보자는 의견
- 미적용 이유 : 비지니스 로직별로 try ~ catch를 명시해 주는 것이 낫다고 판단
