import logo from '../assets/images/logo-white-sm.svg'
import classes from '../styles/header.module.scss'

const Header = () => {

    return <div className={classes.header}>
        <div className={classes.header__logo}>
            <a href="#">
                <img src={logo} alt="" />
            </a>
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
                <a href="#">Contact</a>
            </li>
        </ul>
    </div>
}

export default Header