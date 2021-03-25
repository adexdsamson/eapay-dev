import PropTypes from "prop-types";

const Button = ({ label, variant, rounded, className }) => {
  const variation =
    variant === "primary"
      ? "btn-primary-eapay"
      : variant === "secondary"
      ? "btn-primary-eapay"
      : variant === "outline-primary"
      ? "btn-primary-outline-eapay"
      : variant === "outline-secondary"
      ? "btn-secondary-outline-eapay"
      : "";
  const isRounded = rounded ? "btn-rounded-eapay " : "";
  return (
    <button className={`btn ${variation} ${isRounded} ${className}`}>
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  variant: PropTypes.oneOf([
    "primary",
    "secondary",
    "outline-primary",
    "outline-secondary",
  ]),
  rounded: PropTypes.bool,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
};

export default Button;
