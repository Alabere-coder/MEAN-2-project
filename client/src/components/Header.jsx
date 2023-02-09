import { FaSignInAlt, FaSignOutAlt, FaUser} from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="header">
        <div className="logo">
            <Link to='/'>GoalSetter</Link>
        </div>
        <ul>
            <li>
                <Link to='/login'>
                    <FaSignInAlt /> LOGIN
                </Link>
            </li>
        </ul>
        <ul>
            <li>
                <Link to='/register'>
                    <FaUser /> REGISTER
                </Link>
            </li>
        </ul>
    </header>
  )
}

export default Header