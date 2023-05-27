import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import { MobileNavbar } from "./mobileNavbar/MobileNavbar";
import logo from "../../assets/images/logo.png";
import { useTranslation } from "react-i18next";

const Navbar = ({ scroll }) => {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [nav, setNav] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navBarHandler = () => setNav((prevState) => !prevState);

  return (
    <>
      <div className={styles.div}>
        <header className={scrolled ? `${styles.scrolled}` : ""}>
          <img onClick={() => scroll("component1")} src={logo} alt="logo" />
          <MobileNavbar
            openHandler={nav}
            closeHandler={navBarHandler}
            scroll={scroll}
          />
          <nav className={styles.menu}>
            <ul
              className={
                nav ? [styles.menu, styles.active].join(" ") : [styles.menu]
              }
            >
              <li
                onClick={() => scroll("component1")}
                className={styles.navMenu}
              >
                {t("nav.main")}
              </li>
              <li
                onClick={() => scroll("component2")}
                className={styles.navMenu}
              >
                {t("nav.video")}
              </li>
              <li
                onClick={() => scroll("component3")}
                className={styles.navMenu}
              >
                {t("nav.questions")}
              </li>
              <li
                className={styles.navMenu}
                onClick={() => scroll("component4")}
              >
                {t("nav.kurman")}
              </li>
              <li
                className={styles.navMenu}
                onClick={() => scroll("component5")}
              >
                {t("nav.more")}
              </li>
              <li>
                <span
                  style={{ color: i18n.language === "ky" ? "#3b71ca" : "" }}
                  onClick={() => changeLanguage("ky")}
                >
                  КЫР
                </span>{" "}
                |{" "}
                <span
                  style={{ color: i18n.language === "ru" ? "#3b71ca" : "" }}
                  onClick={() => changeLanguage("ru")}
                >
                  РУ
                </span>
              </li>
            </ul>
          </nav>
          <div onClick={navBarHandler} className={styles.burgerBtn}>
            <div className={`${styles.burger} ${nav && styles.active}`}>
              <span></span>
              <span className={styles.shortLine}></span>
              <span></span>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default Navbar;
