import React from 'react';
import PropTypes from 'prop-types';
import './form-input.styles.scss';

const FormInput = ({
  handleChange,
  label,
  id,
  type,
  required,
  value,
  name,
}) => (
  <div className="group">
    <input
      className="form-input"
      onChange={handleChange}
      id={id}
      type={type}
      required={required}
      value={value}
      name={name}
    />
    {
      label
        ? (
          <label
            htmlFor={id}
            className={`${value.length ? 'shrink' : null} form-input-label`}
          >
            { label }
          </label>
        )
        : null
    }
  </div>
);

FormInput.propTypes = {
  handleChange: PropTypes.func.isRequired,
  label: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  required: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

FormInput.defaultProps = {
  label: '',
  type: 'text',
  required: false,
  value: '',
};

export default FormInput;
