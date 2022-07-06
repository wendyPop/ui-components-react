import { Link, Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <div className={'root'}>
        <nav>
          <ul>
            <li><Link to="/Home"># home</Link></li>
            <li><Link to="/radio"># radio</Link></li>
            <li><Link to="/pagination"># pagination</Link></li>
          </ul>
        </nav>
        <section className={'outlet-area'}>
          <Outlet />
        </section>
      </div>
    </>
  )
}

export default Layout
