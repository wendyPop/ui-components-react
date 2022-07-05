import { Link, Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <div>
        <nav>
          <ul>
            <li><Link to="/Home">Home</Link></li>
            <li><Link to="/radio">Radio Button</Link></li>
            <li><Link to="/pagination">Pagination</Link></li>
          </ul>
        </nav>
        <hr />
        <Outlet />
      </div>
    </>
  )
}

export default Layout
