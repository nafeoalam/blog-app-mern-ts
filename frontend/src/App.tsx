import { Link, Outlet } from 'react-router-dom'
import './App.css'

const App = () => {
  return (
    <div>
      <h3>Blog App</h3>
      <nav style={{ borderBottom: 'solid 1px', paddingBottom: '1rem' }}>
        <Link to="/home">Home</Link> |{' '}
        <Link to="/blogs">Blog</Link>
      </nav>
      <Outlet />
    </div>
  )
}

export default App