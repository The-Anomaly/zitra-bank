import { ReactNode } from "react";
import { Footer } from "./footer";
import { Navbar, NavbarProps } from "./navbar";

export interface LayoutProps extends NavbarProps {
  children: ReactNode;
}

const Layout = ({ children, active }) => {
  return (
    <>
      <Navbar active={active} />
      {children}
      <Footer />
    </>
  );
};

export { Layout };
