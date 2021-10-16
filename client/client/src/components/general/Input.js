import React from "react";
import propType from "prop-types";

function Input({ type, name, placeholder, value, onChange }) {
  return (
    <div>
      <div className="form-group">
        <input
          type={type}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
}

Input.propTypes = {
  name: propType.string,
  placeholder: propType.string,
  value: propType.string.isRequired,
  type: propType.string.isRequired,
  onChange: propType.func.isRequired,
};

export default Input;
