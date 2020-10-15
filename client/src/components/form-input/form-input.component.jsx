import React from 'react';
import PropTypes from 'prop-types';
import { FormInputContainer, FormInputGroup, FormInputLabel } from './form-input.styles';

const FormInput = ({
  handleChange,
  label,
  id,
  type,
  required,
  value,
  name,
}) => (
  <FormInputGroup>
    <FormInputContainer
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
          <FormInputLabel
            htmlFor={id}
            shrink={value.length}
          >
            { label }
          </FormInputLabel>
        )
        : null
    }
  </FormInputGroup>
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
