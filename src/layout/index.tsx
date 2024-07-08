import { ReactNode, useState } from "react";
import { Footer } from "./footer";
import { Navbar, NavbarProps } from "./navbar";
import { Preloader, Toast } from "components";
import { SENDINBLUE_KEY, SENDINBLUE_LIST_ID } from "config";
import axios from "axios";
import styles from "./styles.module.scss";
import { WhatsappIcon } from "assets";

export interface LayoutProps extends NavbarProps {
  children: ReactNode;
}

const Layout = ({ children, active }) => {
  const [clear, setClear] = useState(false);
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({
    show: false,
    type: false,
    title: "",
    text: "",
  });

  const newsletter = async (email) => {
    setLoading(true);
    const options = {
      method: "POST",
      url: "https://api.sendinblue.com/v3/contacts",
      headers: {
        accept: "application/json",
        "api-key": SENDINBLUE_KEY,
      },
      data: {
        email,
        listIds: [Number(SENDINBLUE_LIST_ID)],
      },
    };

    axios
      .request(options)
      .then((response) => {
        setToast({
          show: true,
          type: true,
          title: "Great",
          text: "You've successfully subscribed to our newsletter!",
        });

        setClear(!clear);
      })
      .catch((error) => {
        setToast({
          show: true,
          type: false,
          title: "Error",
          text: error.response.data.message,
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <>
      <Preloader loading={loading} />
      <Toast
        {...toast}
        closeModal={() => setToast({ ...toast, show: false })}
      />
      <Navbar active={active} />
      {children}
      <a
        className={styles.whatsapp}
        href="https://wa.me/+2347047751368"
        target="blank"
      >
        <WhatsappIcon />
        <p>Chat with us</p>
      </a>
      <Footer clear={clear} submit={newsletter} />
    </>
  );
};

export { Layout };
