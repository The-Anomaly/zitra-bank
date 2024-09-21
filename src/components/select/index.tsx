import Select from "react-select";
import styles from "./styles.module.scss";
import { ReactNode } from "react";

export interface OptionType {
  label: any;
  value: any;
}

interface SelectProps {
  label: string;
  error?: string;
  icon?: ReactNode;
  options: OptionType[];
  value: OptionType | undefined;
  onChange: (val: OptionType) => void;
  placeholder?: string;
}

const CustomSelect: React.FC<SelectProps> = (props) => {
  const { label, error, options, onChange, value, placeholder, icon } = props;
  return (
    <div className={`${styles.inputParent}`}>
      <label>{label}</label>
      <div className={styles.inputWrap}>
        {icon}
        <Select
          onChange={(x: any) => onChange(x)}
          className={`${styles.select}`}
          classNamePrefix="formSelect"
          name={"countryCode"}
          options={options}
          value={value}
          placeholder={placeholder}
          styles={{
            container: (baseStyles) => ({
              ...baseStyles,
              width: "100%",
            }),
            control: () => ({
              border: "none",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 6,
              fontSize: "14px",
            //   color: "var(--neutral-40)",
              minHeight: "100%",
              width: "100%",
              paddingLeft: "0px",
              ...styles,
            }),
            placeholder: (baseStyles) => ({
              ...baseStyles,
            //   color: "var(--neutral-50)",
            }),
            indicatorSeparator: () => ({
              display: "none",
            }),
            valueContainer: (base, props) => ({
              ...base,
              paddingLeft: "0px",
            }),
            dropdownIndicator: (base, props) => ({
              ...base,
              border: "1.5px solid #1B1F27",
              padding: "0px",
              borderRadius: "50%",
              color: "#1B1F27",
              fontSize: "12px",
            }),
          }}
        />
      </div>
      {error ? <p className={styles.errorMessage}>{error}</p> : ""}
    </div>
  );
};

export { CustomSelect };
