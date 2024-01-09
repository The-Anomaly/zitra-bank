import { ReactNode, useState } from "react";
import { Footer } from "./footer";
import { Navbar, NavbarProps } from "./navbar";

export interface LayoutProps extends NavbarProps {
  children: ReactNode;
}

const Layout = ({ children, active }) => {
  const [clear, setClear] = useState(false);

  const newsletter = async (email) => {
    console.log(email);
  };
  return (
    <>
      <Navbar active={active} />
      {children}
      <Footer clear={clear} submit={newsletter} />
    </>
  );
};

export { Layout };
