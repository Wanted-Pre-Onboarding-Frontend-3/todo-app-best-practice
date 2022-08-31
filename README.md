# 원티드 프리온보딩 1차 과제 - 투두 리스트 앱 best pracgtice

## 🚀🚀 [배포 보러가기](@@@@@@ 배포 URL을 넣어주세요 @@@@@@)
## 1. 소개

- 원티드 프리온보딩 프론트엔드 코스 6기 1-1 과제
- 투두 리스트 앱의 best practice
- 기간 : 2022/08/30 ~ 2022/09/01
- 진행방식: 팀원의 사전과제 repo 중 하나를 선정해 best practice를 논의하고 리팩토링



## 2. 역할
|이름|역할|
|---|---|
|김리후| 역할 적어주세요 |
|김지현| 역할 적어주세요 |
|서수민| 역할 적어주세요 |
|이경준| 역할 적어주세요 |
|이혜성| 팀장 / axios Autorization 헤더 리팩토링 https://github.com/Wanted-Pre-Onboarding-Frontend-3/todo-app-best-practice/pull/16 |
|문선화| 역할 적어주세요 |
|홍성준| 역할 적어주세요 |

@@@@@@ 역할 적어주세요 @@@@@@

## 3. 디렉토리 구조 및 코드 구조

### 디렉토리 구조

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
 ┃ ┣ 📜Layout.tsx
 ┃ ┣ 📜LinkButton.tsx
 ┃ ┣ 📜Modal.tsx
 ┃ ┗ 📜TodoList.tsx
 ┣ 📂page
 ┃ ┣ 📜main.tsx
 ┃ ┣ 📜sign-in.tsx
 ┃ ┣ 📜sign-up.tsx
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

@@@@@@ 디렉토리 구조 설명 추가 @@@@@@

### 코드 구조

@@@@@@ 코드 구조는 무엇을 적을지 논의 필요 @@@@@@

## 5. Best Practice 논의 내용

#### 1. 폴더 구조 개선

- styles 폴더 내부로 스타일과 관련한 파일을 모아, 역할에 맞는 폴더구조를 만들고자 했습니다.

#### 2. axios Athorization 헤더 추가 로직 리팩토링

- axios interceptors를 이용해 Athorization 헤더 추가 https://github.com/Wanted-Pre-Onboarding-Frontend-3/todo-app-best-practice/pull/16

#### 3. 절대경로 import

- @@@@@@ 설명추가 @@@@@@ (리후님)

#### 4. API Base URL 환경변수화

- @@@@@@ 설명추가 @@@@@@ (경준님)

#### 5. PrivateProvider

- @@@@@@ 설명추가 @@@@@@ (선화님)

#### 6. react-hook-form 라이브러리 대체

- @@@@@@ 설명추가 @@@@@@ (성준님)

#### 7. prettier 설정

- @@@@@@ 설명추가 @@@@@@ (성준님)


