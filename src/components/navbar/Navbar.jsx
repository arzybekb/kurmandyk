import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import { MobileNavbar } from "./mobileNavbar/MobileNavbar";
// import logo from "../../../public/assets/icons/headerLogo.svg";
// import Button from "../UI/button/Button";
// import { ModalWindow } from "../UI/modal/Modal";

const Navbar = ({ scroll }) => {
  const [scrolled, setScrolled] = useState(false);
  const [nav, setNav] = useState(false);

  const [isModal, setIsModal] = useState(false);
  const onOpenModal = () => setIsModal(true);
  const onCloseModal = () => setIsModal(false);

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
      {/* <ModalWindow
        onClose={onCloseModal}
        open={isModal}
        className={styles.modal}
      ></ModalWindow> */}
      <div className={styles.div}>
        <header className={scrolled ? `${styles.scrolled}` : ""}>
          <a onClick={() => scroll("component1")}>
            {/* <Image src={logo} alt="codewise logo" /> */}
            <h1>Logo</h1>
          </a>
          <MobileNavbar openHandler={nav} closeHandler={navBarHandler} />
          <nav className={styles.menu}>
            <ul
              className={
                nav ? [styles.menu, styles.active].join(" ") : [styles.menu]
              }
            >
              <li>
                <a onClick={() => scroll("component1")}>Башкы бет</a>
              </li>
              <li className={styles.navMenu}>
                <a onClick={() => scroll("component2")}>Суроолор</a>
              </li>
              <li>
                <a onClick={() => scroll("component2")}>Хадистер</a>
              </li>
              <li>
                <a href="/">Контакттар</a>
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
          {/* <Button className={styles.btn} onClick={onOpenModal}>
            Contacts Us
          </Button> */}
        </header>
      </div>
    </>
  );
};

export default Navbar;