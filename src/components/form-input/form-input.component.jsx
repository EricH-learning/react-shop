import "./form-input.styles.scss";

const FormInput = ({ label, ...additionProps }) => {
  return (
    <div className="group">
      {label ? (
        <label
          className={`${
            additionProps.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      ) : null}

      <input className="form-input" {...additionProps} />
    </div>
  );
};

export default FormInput;
