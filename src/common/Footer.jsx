import classes from "../styles/footer.module.scss";
import facebook from "../assets/images/facebook.png";
import instagram from "../assets/images/instagram.png";
import twitter from "../assets/images/twitter.png";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <ul className={classes.footer__menu}>
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
      <hr />
      <div className={classes.footer__bottom}>
        <ul className={classes.footer__icons}>
          <li>
            <a href="#">
              <img src={facebook} alt="" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={instagram} alt="" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={twitter} alt="" />
            </a>
          </li>
        </ul>
        <p>Copyright © 2024 ThemeGenix</p>
      </div>
    </div>
  );
};

export default Footer;
