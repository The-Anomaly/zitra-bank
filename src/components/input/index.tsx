import { ReactNode } from "react";
import styles from "./styles.module.scss";

interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string;
  error?: string;
  icon?: ReactNode;
}

const Input: React.FC<InputProps> = (props) => {
  const { error, icon,label } = props;
  return (
    <>
      <div className={`${styles.inputParent}`}>
        <label>{label}</label>
        <div className={styles.inputWrap} >
          {icon}
          <input {...props} />
        </div>
        {error ? <p className={styles.errorMessage}>{error}</p> : ""}
      </div>
    </>
  );
};

export { Input };
