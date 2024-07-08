import {
  LeftArrowCircle,
  WalletIcon,
  VaultIcon,
  FlexIcon,
  SaveIcon,
  LoanIcon,
} from "assets";
import styles from "./styles.module.scss";
import { ReactNode, useRef } from "react";

const Products = () => {
  const products: ProductType[] = [
    {
      icon: <FlexIcon />,
      title: "Z - Flex",
      shortText: "Open a Zitra savings account with a minimum of ₦1K.",
      longText: (
        <>
          Save towards a goal like a vacation, buying a new car, emergency fund
          etc.
          <br />
          Set up automated transfers to fund your savings regularly and earn
          competitive interest rates on your savings.
        </>
      ),
      backgroundColor: "#d1e2fa",
      stackBackgroundColor: "#89ade1",
      stackCardBackground: `linear-gradient(
        0deg,
        rgba(38, 120, 242, 0.12) 0%,
        rgba(38, 120, 242, 0.12) 100%
      ),
      #fff`,
    },
    {
      icon: <VaultIcon />,
      title: "Z - Vault",
      shortText: "You can open a Z-Vault account with a minimum of ₦50K.",
      longText: (
        <>
          With just ₦50K, you can choose from 3 months, 6 months, or 1 year
          fixed-terms with high interest rates.
          <br />
          You can also access your money for an emergency for a nominal cost.
        </>
      ),
      backgroundColor: "#E9CCFF",
      stackBackgroundColor: "#A683C1",
      stackCardBackground: `linear-gradient(
        0deg,
        rgba(152, 38, 242, 0.12) 0%,
        rgba(152, 38, 242, 0.12) 100%
      ),
      #fff`,
    },
    {
      icon: <SaveIcon />,
      title: "Z - Save",
      shortText:
        "Automatic payments, makes it easy to save more and track your spending.",
      longText: (
        <>
          You can get insights into your spending habits and saving patterns.
          <br />
          Share your saving goals and progress with friends and family for
          motivation.
        </>
      ),
      backgroundColor: "#FFD6E7",
      stackBackgroundColor: "#C0819D",
      stackCardBackground: `linear-gradient(
        0deg,
        rgba(222, 32, 112, 0.12) 0%,
        rgba(222, 32, 112, 0.12) 100%
      ),
      #fff`,
    },
    {
      icon: <LoanIcon />,
      title: "Get access to loans of up to ₦5 million",
      shortText: "You can open a Z-Vault account with a minimum of ₦50K.",
      longText: (
        <>
          You can get up to ₦5 million for 12 months, customise the amount and
          duration of your loan to fit your needs. Easy and secure documentation
          process, with quick turn around time and competitive interests{" "}
        </>
      ),
      backgroundColor: "#D6FFCC",
      stackBackgroundColor: "#94DA84",
      textColor: "#060616",
      stackCardBackground: `linear-gradient(
        0deg,
        rgba(41, 148, 17, 0.12) 0%,
        rgba(41, 148, 17, 0.12) 100%
      ),
      #fff`,
    },
    {
      icon: <LoanIcon />,
      title: "Business Loan",
      shortText: "Get access to loans upwards of ₦5 million",
      longText: (
        <>
          You can get upwards of ₦5 million for your businesses, with quick
          turnaround time, no hidden charges and a flexible repayment structure{" "}
        </>
      ),
      backgroundColor: "#113409",
      stackBackgroundColor: "#0D2707",
      titleColor: "#ffffff",
      textColor: "#ffffff",
      stackCardBackground: `linear-gradient(
        0deg,
        rgba(41, 148, 17, 0.12) 0%,
        rgba(41, 148, 17, 0.12) 100%
      ),
      #fff`,
    },
  ];

  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      const scrollAmount = Math.min(
        carouselRef.current.scrollLeft,
        carouselRef.current.clientWidth
      );
      carouselRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      const maxScrollLeft =
        carouselRef.current.scrollWidth - carouselRef.current.clientWidth;
      const scrollAmount = Math.min(
        maxScrollLeft - carouselRef.current.scrollLeft,
        carouselRef.current.clientWidth
      );
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <>
      <section id="products" className={styles.bg}>
        <div className={`container ${styles.heading}`}>
          <h2 className={styles.heading__ttl}>
            Products that meet all your life goals
          </h2>
          <div className={styles.heading__btns}>
            <LeftArrowCircle role="button" onClick={scrollLeft} />
            <LeftArrowCircle role="button" onClick={scrollRight} />
          </div>
        </div>
        <div ref={carouselRef} className={styles.products}>
          {products.map((product) => (
            <Product {...product} key={product.title} />
          ))}
        </div>
      </section>
    </>
  );
};

interface ProductType {
  icon: ReactNode;
  title: string;
  shortText: string;
  longText: string | ReactNode;
  backgroundColor: string;
  stackBackgroundColor: string;
  textColor?: string;
  titleColor?: string;
  stackCardBackground?: string;
}
const Product = ({
  icon,
  backgroundColor,
  stackBackgroundColor,
  title,
  shortText,
  longText,
  textColor,
  titleColor,
  stackCardBackground,
}: ProductType) => {
  return (
    <>
      <div
        style={{ backgroundColor: backgroundColor }}
        className={styles.product}
      >
        <div
          style={{ backgroundColor: stackBackgroundColor }}
          className={styles.product__stackWrap}
        >
          <div
            style={{ background: stackCardBackground }}
            className={styles.product__stack}
          >
            {icon}
            <div>
              <p>{title}</p>
              <p>{shortText}</p>
            </div>
          </div>
        </div>
        <div className={styles.product__content}>
          <p style={{ color: titleColor }}>{title}</p>
          <p style={{ color: textColor }}>{longText}</p>
          <button>Learn More</button>
        </div>
      </div>
    </>
  );
};

export { Products };
