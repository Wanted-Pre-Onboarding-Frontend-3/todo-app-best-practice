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
| 김리후 | 절대경로 설정 https://github.com/Wanted-Pre-Onboarding-Frontend-3/todo-app-best-practice/pull/18, <br> 전체적인 코드 정리 https://github.com/Wanted-Pre-Onboarding-Frontend-3/todo-app-best-practice/pull/27 |
| 김지현 | 팀원 / styles 폴더 구조개선                                                                                                                                                                                  |
| 서수민 | 역할 적어주세요                                                                                                                                                                                              |
| 이경준 | 프로젝트 Deploy, 서버측 base url 환경변수로 변경                                                                                                                                                             |
| 이혜성 | 팀장 / axios Autorization 헤더 리팩토링 https://github.com/Wanted-Pre-Onboarding-Frontend-3/todo-app-best-practice/pull/16                                                                                   |
| 문선화 | 팀원 / redirect 리팩토링                                                                                                                                                                                     |
| 홍성준 | 역할 적어주세요                                                                                                                                                                                              |


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

#### 1. 폴더 구조 개선

- 스타일과 관련한 파일들을 styles 폴더에 모아, 역할에 맞는 폴더구조를 만들고자 했습니다.

<br>

#### 2. axios Athorization 헤더 추가 로직 리팩토링

- 기존 코드 : TodoList, todos 컴포넌트에서 api를 호출할 때마다 Athorization 헤더를 설정하는 코드가 중복되었음.
- axios interceptors를 이용해 Athorization 헤더 추가 https://github.com/Wanted-Pre-Onboarding-Frontend-3/todo-app-best-practice/pull/16


<br>

#### 3. 절대경로 import

- 기존 코드 : 절대 경로 미설정으로 경로 확인이 상대적으로 복잡하다는 의견
- `tsconfig.json`에 baseUrl: src를 추가하여 **src 경로를 기준**으로 절대 경로를 참조하도록 적용, 가독성 높임



<br>

#### 4. API Base URL 환경변수화

- CRA(Create React APP)에서는 기본적으로 사용자가 [환경변수](https://create-react-app.dev/docs/adding-custom-environment-variables/)를 추가할 수 있습니다.
- 환경변수는 빌드타임에 포함되어 번들링됩니다. (일반 상수처럼 클라이언트 측에서 노출된다는 점은 같습니다.)


<br>

#### 5. PrivateProvider

- todos와 로그인/회원가입 컴포넌트에서 토큰 체크 후 리다이렉트 하는 방식에서 PrivateRoute 컴포넌트 통해 리다이렉트 하는 방식으로 변경하였습니다. 전역상태에 영향을 받는 리다이렉트 처리는 여러 컴포넌트에 하나의 컴포넌트로 처리할 수 있다면 관리 측면에서 효율적일 것이라고 판단하였습니다.


<br>

#### 6. react-hook-form 라이브러리 대체

- @@@@@@ 설명추가 @@@@@@ (성준님)

<br>

#### 7. prettier 설정

- @@@@@@ 설명추가 @@@@@@ (성준님)

#### 8. api 관리 
- api에서 호출하는 서버 주소와, 헤더에 공통으로 들어갈 정보들을 담은 인스턴스를 생성해 서버 주소가 변경되거나, api 조건이 바뀌는 경우에 한 곳에서 관리할 수 있고, 여러컴포넌트에서 재사용할 수 있도록 하는 것이 좋다고 생각했습니다.
- API를 역할 별로 분리해서 관리하는 방법과, http 메소드별로 작성한 케이스도 함께 살펴보았고, 프로젝트 규모에 따라 유연하게 사용해보면 좋을 것 같다는 의견을 나눴습니다. https://github.com/Wanted-Pre-Onboarding-Frontend-3/todo-app-best-practice/pull/3#discussion_r959244725
- Best Practice로 뽑힌 repo에서는 API를 하나로 통합해 자동완성 기능을 사용할 수 있도록 한 점이  코드 작성시 편리한 점에서 팀원들이 참고할 만한 예시라고 생각하였습니다.


#### 9. 가독성 증가
- state와 hook, 함수 사이의 줄바꿈 처리
- import 종류별로 재정렬

#### 10. 유저 사용성 측면에서 논의
- 아이디 생성 후 1.'/todo'로 페이지 이동 2. '/login'로 이동 중 어떤 것이 사용성 측면에서 좋을지에 관한 논의 

#### 11. 과제 요건 충족 
- 과제 요건 중 '/'에 로그인/회원가입 기능을 구현하라는 조건이 있어, 1. 이를 명확히 지켜야 할지 2. 경로명에 충분히 기능이 드러나는 경우 그대로 둬도 좋을 지에 관한 논의 

