import "./button.styles.scss";

const BUTTON_TYPE_CLASSES = {
  inverted: "inverted",
  google: "google-sign-in",
};

const Button = ({ children, buttonType, ...additionProps }) => {
  return (
    <button
      className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
      {...additionProps}
    >
      {children}
    </button>
  );
};

export default Button;
