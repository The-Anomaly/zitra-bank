import * as React from "react";
import styles from "./styles.module.css";
import { CloseCircle, ArrowCircleDown } from "assets";

interface FAQITemProps extends FAQListProp {
  active: number;
  state: number;
  changeActive: (state: number) => void;
}

interface FAQListProp {
  question: string;
  answer: any;
}

const FAQItem: React.FC<FAQITemProps> = ({
  active,
  state,
  changeActive,
  question,
  answer,
}) => {
  const contentEl = React.useRef<HTMLDivElement>(null);
  return (
    <div
      className={`${styles.faqItem} ${
        active === state ? styles.activeItem : styles.inactiveItem
      }`}
    >
      <button
        onClick={() => changeActive(active === state ? -1 : state)}
        className={styles.faqBtn}
      >
        <span>{question}</span>{" "}
        {state === active ? <CloseCircle /> : <ArrowCircleDown />}
      </button>
      <div
        ref={contentEl}
        className={styles.faqBody}
        style={
          active === state && contentEl.current
            ? { height: contentEl.current.scrollHeight }
            : { height: "0px" }
        }
      >
        <div>{answer}</div>
      </div>
    </div>
  );
};

const Questions = () => {
  const [active, setActive] = React.useState(-1);

  const faqs: FAQListProp[] = [
    {
      question: "What is Zitra Bank?",
      answer: `Zitra is a licensed Bank that provides Savings, Investments, loans and Bill payment services, It is your all-in-one wealth creation partner dedicated to helping you achieve your financial goals, this is done by providing services catered to your specific needs.`,
    },
    {
      question: "Is Zitra a licensed Bank?",
      answer: `Yes, Zitra is a licensed Microfinance bank by the Central Bank of Nigeria and Asset Management Company by the Security and Exchange Commission.`,
    },
    {
      question: "Does Zitra have a physical place of Business?",
      answer: `Yes, We do. Our Head Office is located at No 59, Landbridge avenue, Victoria Island Lagos.`,
    },

    {
      question: "How do I download the Zitra Bank mobile app?",
      answer: `From Apple App Store for iOS and Google Play Store for Android.`,
    },
    {
      question: "How secure is the Zitra Bank app?",
      answer: `The Zitra Bank App uses encryption, secure login protocols to ensure the safety of your information and transactions.`,
    },
    {
      question: "What should I do if I forget my app password or username?",
      answer: `If you forget your password or username, you can use the "Forgot Password" or "Forgot Username" option on the app's login screen. Follow the instructions provided to reset your password or retrieve your username.`,
    },
    {
      question: "How secure is my money?.",
      answer: `The Zitra Bank App uses encryption, secure login protocols to ensure the safety of your information and transactions.`,
    },
    {
      question: "Are my card details safe?",
      answer: `Yes, we work with Nigeria Inter-Bank Settlement System to secure your card details.`,
    },
    {
      question: "Why should I provide my BVN?",
      answer: `This allows us to confirm your identity and opens up further app features. Your BVN does not grant us access to your transactions, account, or any other private information.`,
    },
    {
      question: "What features are available on the Zitra Bank app?",
      answer: `Includes wallets, savings, investments, loans, payments and virtual cards. Others include balance checking, transfers, mobile deposits, bill payments, transaction history, real-time alerts and account management etc`,
    },
    {
      question: "What is Z-Wallet?",
      answer: `Z-wallet is a secure digital wallet that helps you manage your finances allowing you to make quick and secure transactions, pay bills, save and invest. Z-Wallet makes everyday banking more efficient and accessible. In addition, you can fund your savings and investments using the funds in your wallet.`,
    },
    {
      question: "How do I fund my wallet?",
      answer: `To fund your wallet, simply click "Fund Wallet" from your Wallet to fund from your linked card. Alternatively, you can fund your wallet by making transfers from other banking apps straight to your Zitra account.`,
    },
    {
      question: "What is my wallet account number?",
      answer: `This is a 10 digit NUBAN assigned to your Zitra account through which you can fund your Zitra account. This number is displayed by selecting the Wallet Option.`,
    },
    {
      question: "How do I withdraw from my wallet?",
      answer: `Zitra offers seamless and instant withdrawal / transfer to other 3rd party. From Wallet click on withdraw, this allows you to easily withdraw money to any Zitra account, your linked accounts, other bank accounts and saved beneficiaries.`,
    },
    {
      question: "What Savings products are available on the Zitra App",
      answer: `There are 3 savings products i.e. Z-Flex allow for flexible access to your funds at anytime, Z-Stash – a high yield target savings plan that allows you take on specific projects and Z-Vault – A long term savings plan that allows you to lock in your saving for a predefined period of time`
    },
    {
      question: "How do I start saving on Zitra Bank?",
      answer: `Download the app from the Google Play or Apple stores, then activate your account. You can link your debit card or make a direct bank transfer to your Zitra account to fund your Zitra wallet. After that, you are free to use any of our savings options.`,
    },
    {
      question: "How much can I start with?",
      answer: `You can start saving with as little as N1000 and above`,
    },
    {
      question: "How do I make deposit to my Savings?",
      answer: `To deposit into your preferred saving, fund your Wallet by bank transfer or with your linked card then go to your preferred savings and create a plan, input the name of your goal and how much you would like to save, this amount will be deducted from your wallet and be credited to your Z-flex. You can also set autosave for both wallet and linked bank card`
    },
    {
      question:
        "Can I cancel my savings plan and request for a withdrawal at any time?",
      answer: `Yes, you can cancel your savings plan at any time with the exception of the Z-Vault. Also, depending on the savings product, a breaking fee may be charged on the amount withdrawn.
`,
    },
    {
      question: "Do I have to log in every time I want to save?",
      answer: `No, you do not have to. You can use our Autosave option.`,
    },
    {
      question: "Can I increase my savings anytime?",
      answer: `Yes, you can increase your savings amount by going to your saving setting, click on Edit plan and adjust your savings amount.`,
    },
    {
      question: "What is Add Money and how does it work?",
      answer: `This quick action allows you to easily fund your wallet by card, transfer or USSD`,
    },
    {
      question: "What are my withdrawal days?",
      answer: `There are no specified withdrawal dates but the date you have specified when you commence your savings plan.`,
    },
    {
      question: "Can I pause and continue savings anytime?",
      answer: `Yes, you can pause your savings plan and resume anytime.`,
    },
    {
      question:
        "What happens if there are no money on my debit card or Wallet?",
      answer: `There will be no debit on your wallet or Card.`,
    },
    {
      question:
        "What account will be credited if I withdraw funds from my savings?",
      answer: `Withdrawal from your saving will be credited to your Zitra Wallet.`,
    },
    {
      question: "Can I have more than one savings plan?",
      answer: `Yes, you can create multiple plans to suits to needs.`,
    },
    {
      question: "What if I don’t want interest?",
      answer: `For our dear Customers who do not wish to have interest on their savings, interest can be disabled while creating your savings plan. Simply click the disable button where you have “Do you want your savings to have interest?”.`,
    },
    {
      question: "What is Z- flex?",
      answer: `The Z-Flex is the savings solution for you that allows for flexible automated or manual savings. Earn competitive interest rate subject to a maximum of 3 withdrawals in a month. Interest is forfeited once withdrawals exceed the allowable limit.`,
    },
    {
      question: "When will the interest and and savings amount be paid?",
      answer: `Interest is calculated daily and paid when your plan has matured.`,
    },
    {
      question:
        "Before the savings mature, is it possible to take money out of my Z-stach plan?",
      answer: `Yes, you can but you will lose your interest and be charged a breaking fee`,
    },
    {
      question: "How do I withdraw my savings?",
      answer: (
        <>
          You can withdraw from your savings as follows:
          <ul>
            <li>Z-flex savings - a maximum of 3 times within a month,</li>
            <li>
              Z-Stash – at the maturity of your savings plan (pre-withdrawal
              will attract a breaking fee)
            </li>
            <li>Z-Vault – You cannot withdraw from until maturity.</li>
          </ul>
        </>
      ),
    },
    {
      question: "Where is my virtual card usable?",
      answer: `On websites that accept Verve cards, you can use your virtual card to make transactions.`,
    },
    {
      question: "How do I create my virtual card?",
      answer: `From settings, click Virtual Card, create card, enter the name you want to appear on card(this must be the same as the name on your BVN and your Zitra account) then create your card Pin, send in your request. Kindly note your virtual card will be made available after 24 hours of making your request.`,
    },
    {
      question: "What is my card pin?",
      answer: `Your card pin is the 4- digit pin you create when requesting your card. Kindly use something that will be easy to remember.`,
    },
    {
      question: "Will I be charged for requesting a card?",
      answer: `Yes, you will be charged a processing fee.`,
    },
    {
      question: "How do I block my Virtual Card?",
      answer: `From settings, click on virtual card and click the block card option this immediately blocks access to payments using your card.`,
    },
    {
      question: "For what duration is the virtual card valid?",
      answer: `Your virtual card has a validity of 3 years. You will be contacted to confirm if you will like to renew once the card expires.`,
    },
    {
      question: "What types of payment can I make on my Zitra Bank App",
      answer: `You can carry out the following, Utility Bills: Electricity, water, gas, etc.,Cable TV and Internet Bills, Phone Bills, School fees payment, Insurance Services, Religious Body payments, Taxes and levies etc`,
    },
    {
      question: "How can I make payments on the Zitra App",
      answer: `By clicking on the Bill Payment from the quick action, select preferred bill, select the biller, input amount, input your Zitra pin to confirm transaction.`,
    },
    {
      question: "How can I make a complaint on issues about the Zitra App?",
      answer: `You can navigate to the help menu and contact Zitra via any of the preferred channels including In-App, Phone Calls, Email, WhatsApp, and any of Zitra’s Social Media handles`,
    },
    {
      question: "What should I do if I forget my app password or username?",
      answer: `If you forget your password or username, you can use the "Forgot Password" or "Forgot Username" option on the app's login screen. Follow the instructions provided to reset your password or retrieve your username.`,
    },
    {
      question: "Can I access a loan with Zitra from my app?",
      answer: `Yes, you can access a loan against your savings . With Zitra you can get an Overdraft loan, short and long tenor loans. Your Regular savings and Investments on the Zitra App qualify you for a loan.`,
    },
  ];

  return (
    <>
      <section className={`container ${styles.faqWrapper}`}>
        <div className={`${styles.faqContainer}`}>
          <div className={styles.faqList}>
            {faqs.map((item, index) => (
              <FAQItem
                {...item}
                key={index}
                state={index}
                active={active}
                changeActive={(x) => setActive(x)}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export { Questions };
