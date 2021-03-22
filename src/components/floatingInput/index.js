import useStyles from "./style";

const FloatingInput = ({
  type,
  placeholder,
  label,
  name,
  input,
  className,
  inputClassName,
  inputContainerClassName,
  value,
  onChange
}) => {
  const classes = useStyles();
  return (
    <div className={inputContainerClassName}>
      <div className={`${classes.floatingLabelWrap}  ${className}`}>
        <input
          {...input}
          type={type}
          name={name}
          className={`${classes.input}  ${inputClassName}`}
          id={name}
          placeholder={placeholder}
          onChange={onChange}
        />
        <label
          htmlFor={name}
          className={`${classes.label} ${value ? classes.active : ""}`}
        >
          {label}
        </label>
      </div>
      {/* {meta?.touched && meta?.error} */}
    </div>
  );
};

export default FloatingInput;