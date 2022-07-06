import * as React from 'react'
import {
  Routes,
  Route,
  BrowserRouter
} from 'react-router-dom'

import 'assets/css/root.scss'
import Layout from 'components/layout/Layout'

import Home from 'pages/home'
import ChildHome from 'pages/home/child'
import RadioPage from 'pages/radio'
import Pagination from 'pages/pagination'

// 라우트 처리
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route path="/Home" element={<Home />}>
            <Route path="ChildHome/:id" element={<ChildHome />} />
          </Route>
          <Route path="/radio" element={<RadioPage />} />
          <Route path="/pagination" element={<Pagination />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

