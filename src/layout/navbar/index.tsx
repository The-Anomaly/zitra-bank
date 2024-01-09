import { LogoWithText } from "assets";
import styles from "./styles.module.scss";
import { Routes } from "router/routes";
import { useState } from "react";
import { Link } from "react-router-dom";

type tabs = "home" | "about" | "faqs" | "contact";

export interface NavbarProps {
  active: tabs;
}

const Navbar: React.FC<NavbarProps> = ({ active }) => {
  const [showNav, setShowNav] = useState(false);
  const [mobile, setMobile] = useState(window.innerWidth <= 800 ? true : false);
  const [scrollNav, setScrollNav] = useState(false);

  const screenSizeUpdate = () => {
    if (window.innerWidth <= 800) {
      setMobile(true);
    } else if (window.innerWidth > 800) {
      setMobile(false);
      setShowNav(false);
    }
  };
  const handleScroll = () => {
    if (window.scrollY > 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  window.addEventListener("scroll", handleScroll);
  window.addEventListener("resize", screenSizeUpdate);

  const NavLinks: { text: string; state: tabs; link: string }[] = [
    {
      text: "Home",
      state: "home",
      link: Routes.home,
    },
    {
      text: "About us",
      state: "about",
      link: Routes.about,
    },
    {
      text: "FAQ's",
      state: "faqs",
      link: Routes.faqs,
    },
    {
      text: "Contact us",
      state: "contact",
      link: Routes.contact,
    },
  ];

  return (
    <>
      <header
        className={`${styles.navBg} ${
          scrollNav
            ? styles.light
            : active === "home"
            ? styles.colored
            : styles.light
        } ${showNav ? styles.openMenu : ""}`}
      >
        <section
          className={`container ${styles.header}  ${
            scrollNav ? styles.scrollNav : ""
          }`}
        >
          <Link to={Routes.home}>
            <LogoWithText />
          </Link>
          {(showNav && mobile) || !mobile ? (
            <nav className={styles.nav}>
              {NavLinks.map((item, index) => (
                <Link
                  key={index}
                  className={item.state === active ? styles.activeItem : ""}
                  onClick={() => setShowNav(false)}
                  to={item.link}
                >
                  {item.text}
                </Link>
              ))}
            </nav>
          ) : (
            ""
          )}
          <button
            onClick={() => setShowNav(!showNav)}
            className={`${styles.hamburger} ${
              showNav ? styles.closeMenuBtn : ""
            }`}
          >
            <div></div>
            <div></div>
            <div></div>
          </button>
        </section>
      </header>
    </>
  );
};

export { Navbar };
