import { Link, Outlet } from 'react-router-dom'
import './App.css'

const App = () => {
  return (
    <div>
      <h1>Blog App</h1>
      <nav style={{ borderBottom: 'solid 1px', paddingBottom: '1rem' }}>
        <Link to="/home">Home</Link> |{' '}
        <Link to="/blogs">Blog</Link>
      </nav>
      <Outlet />
    </div>
  )
}

export default App