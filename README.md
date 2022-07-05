
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

1. git 리포지토리 생성 및 연결
2. eslint 설정 및 babel preset 추가
3. 절대경로 사용을 위한 jsconfig.json 추가
4. 라우트 처리
   1. react-router-dom@6 설치
   2. history@5 설치
5. SCSS 처리중
   
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
   "node-sass": "^7.0.1",
   "sass": "^1.52.2",
   "sass-loader": "^13.0.0"
}
```
