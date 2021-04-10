import { TextField } from "@material-ui/core";

const FloatingInput = ({
  type,
  label,
  name,
  input,
  className,
  meta,
}) => {
  return (
    <TextField
      {...input}
      fullWidth
      required
      id={name}
      type={type}
      label={label}
      className={className}
      error={meta.error}
      helperText={meta.warning || meta.error}
    />
  );
};

export default FloatingInput;
