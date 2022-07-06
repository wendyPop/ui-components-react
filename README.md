
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

1. git 리포지토리 생성 및 연결
2. eslint 설정 및 babel preset 추가
3. 절대경로 사용을 위한 jsconfig.json 추가
4. 라우트 처리 및 컴포넌트 분리
   1. react-router-dom@6 설치
   2. history@5 설치
5. CSS 모듈 처리
6. SCSS 적용중
7. ~~글로벌 scss (prepend data) 적용중~~
   1. scss @use 를 활용하여 App.js 임포트하면 자동으로 믹스인등이 모두 적용됨





### CSS 모듈 처리

Radio.module.scss 또는 Radio.module.css 처럼
xxx.module.css 로 작명

```jsx
import * as React from 'react'
import styles from 'assets/css/Paging.module.scss'

const Pagination = () => {
  return (
    <>
      <div className={styles.bgColor}>
        <p className={styles.Box}>페이지네이션</p>
        <section>
            뭔가 내용
        </section>
      </div>
    </>
  )
}
export default Pagination
```
styles.키값으로 조회해야하는 불편함이 있는데,
classnames 이라는 라이브러리의 도움을 받을 수 있다.


#### 라우트처리 use case
```javascript
import {
   Routes,
   Route,
   Outlet,
   Link,
   useNavigate,
   BrowserRouter,
   useLocation,
   useParams,
   useMatch
} from 'react-router-dom';

<BrowserRouter>
   <Routes>
      <Route path="/" element={<Layout />} >
         <Route path="/Home" element={<Home />}>
            <Route path="ChildHome/:id" element={<ChildHome />} />
         </Route>
         <Route path="/about" element={<About />} />
         <Route path="/dashboard" element={<Dashboard />} />
      </Route>
   </Routes>
</BrowserRouter>

```

```json
{
//   "node-sass": "^7.0.1",
//   "sass-loader": "^13.0.0"
   "sass": "^1.52.2"
}
```
```scss
@use 'mixin.scss';
@use 'Reset.scss';
@use 'Common.scss';
```
