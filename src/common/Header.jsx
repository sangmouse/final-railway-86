import { Link, useNavigate } from 'react-router-dom'
import logo from '../assets/images/logo-white-sm.svg'
import classes from '../styles/header.module.scss'

const Header = () => {
    const navigate = useNavigate()

    const onSignOut = () => {
        window.localStorage.removeItem('username')
        window.localStorage.removeItem('password')
        navigate('/sign-in')
    }

    return <div className={classes.header}>
        <div className={classes.header__logo}>
            <Link to='/'>
                <img src={logo} alt="" />
            </Link>
        </div>
        <ul className={classes.header__menu}>
            <li>
                <a href="#">Home</a>
            </li>
            <li>
                <a href="#">Pages</a>
            </li>
            <li>
                <a href="#">Blog</a>
            </li>
            <li>
                <button onClick={onSignOut}>Sign Out</button>
            </li>
        </ul>
    </div>
}

export default Header