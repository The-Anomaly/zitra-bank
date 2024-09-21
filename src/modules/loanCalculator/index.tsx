import { SeamlessSavings } from "components";
import styles from "./styles.module.scss";
import { Input } from "components/input";
import { NairaIcon, PercentageIcon } from "assets";
import { CustomSelect, OptionType } from "components/select";
import { useState } from "react";

const LoanCalculatorUI = () => {
  return (
    <>
      <section className={`container ${styles.container}`}>
        <div className={styles.txtSec}>
          <h1 className={styles.ttl}>Loan Calculator</h1>
          <p className={styles.txt}>
            Use this calculator to get a quick estimate of your loan payments.
            Enter the loan amount, interest rate, and term to see your potential
            monthly payment and total interest over the life of the loan.
          </p>
        </div>
        <LoanCalculatorForm />
      </section>
      <SeamlessSavings />
    </>
  );
};

interface LoanCalculatorFormProps {
  amount: number;
}

interface LoanFormErrors {
  amount?: string;
  duration?: string;
  interest?: string;
}
const LoanCalculatorForm = () => {
  const [amount, setAmount] = useState<string | undefined>();
  const [duration, setDuration] = useState<string | undefined>();
  const [interest, setInterest] = useState<OptionType | undefined>();
  const [errors, setErrors] = useState<LoanFormErrors | undefined>();
  const [result, setResult] = useState<{
    monthlyPayment: number;
    totalInterest: number;
  }>({ monthlyPayment: 0, totalInterest: 0 });

  const generateNumbers = () => {
    const result: number[] = [];
    for (let i: number = 3; i <= 10; i += 0.5) {
      result.push(i);
    }
    return result;
  };

  const interestOptions: OptionType[] = generateNumbers().map((num) => ({
    label: `${num}`,
    value: num,
  }));

  const validateFields = (e) => {
    e.preventDefault();

    const errors: LoanFormErrors = {};

    if (!amount) errors.amount = "Required";
    if (!duration) errors.duration = "Required";
    if (!interest) errors.interest = "Required";

    if (Object.keys(errors).length > 1) {
      setErrors(errors);
    } else {
      setErrors(undefined);
      onSubmit();
    }
  };

  function calculateLoan(
    principal: number,
    interestRate: number, // Annual interest rate in percentage
    loanDurationMonths: number
  ): { monthlyPayment: number; totalInterest: number } {
    // Convert annual interest rate to a monthly interest rate (in decimal form)
    const monthlyInterestRate = interestRate / 100 / 12;

    // Calculate monthly payment using the amortization formula
    const monthlyPayment =
      (principal *
        monthlyInterestRate *
        Math.pow(1 + monthlyInterestRate, loanDurationMonths)) /
      (Math.pow(1 + monthlyInterestRate, loanDurationMonths) - 1);

    // Calculate total payment over the duration
    const totalPayment = monthlyPayment * loanDurationMonths;

    // Calculate total interest by subtracting the principal from the total payment
    const totalInterest = totalPayment - principal;

    return {
      monthlyPayment: parseFloat(monthlyPayment.toFixed(2)),
      totalInterest: parseFloat(totalInterest.toFixed(2)),
    };
  }

  const onSubmit = () => {
    if (amount && duration && interest) {
      const loanAmount = parseFloat(amount);
      const interestRate = interest.value;
      const loanDuration = parseInt(duration);

      const result = calculateLoan(loanAmount, interestRate, loanDuration);
      setResult(result);
    }
  };

  return (
    <div className={styles.loanCalc}>
      <form>
        <Input
          icon={<NairaIcon />}
          placeholder="Enter a loan amount"
          label="Loan Amount"
          type="number"
          value={amount}
          onChange={(event) => setAmount(event.target.value)}
          error={errors?.amount}
        />
        <Input
          placeholder="How long you would like to take this loan"
          label="Loan term in months"
          type="number"
          value={duration}
          onChange={(event) => setDuration(event.target.value)}
          error={errors?.duration}
        />
        <CustomSelect
          icon={<PercentageIcon />}
          label="Interest rate per annum"
          placeholder="Select a rate"
          onChange={setInterest}
          options={interestOptions}
          value={interest}
          error={errors?.interest}
        />
        <button onClick={validateFields} className={styles.calcBtn}>
          Calculate
        </button>
      </form>
      <div className={styles.loanInfo}>
        <p className={styles.loanInfo__ttl}>Monthly payments</p>
        <p className={styles.loanInfo__amt}>
          <span style={{ fontFamily: "sans-serif" }}>₦</span>
          {result.monthlyPayment.toLocaleString()}
        </p>
        <div className={styles.loanBreakdown}>
          <div>
            <p>Total principal paid</p>{" "}
            <p>
              <span style={{ fontFamily: "sans-serif" }}>₦</span>
              {parseFloat(amount ?? "0").toLocaleString()}
            </p>
          </div>
          <div>
            <p>Total interest paid</p>{" "}
            <p>
              <span style={{ fontFamily: "sans-serif" }}>₦</span>
              {result.totalInterest.toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { LoanCalculatorUI };
