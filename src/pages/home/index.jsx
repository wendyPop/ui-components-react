import { Outlet, useNavigate } from 'react-router-dom'
import * as React from 'react'

const Home = () => {

  const navigater = useNavigate()

  React.useEffect(() => {
    navigater('/Home')
  }, [])

  return (
    <div>
      <h2>Home</h2>
      <Outlet />
      {/* 자식 라우트의 값을 */}
      <button onClick={() => {navigater('ChildHome/child', { state: { param: '파라미터' } })}}>
        title
      </button>
    </div>
  )
}

export default Home
