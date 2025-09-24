
import React, { useState } from 'react';

// Validation patterns
const VALIDATION_PATTERNS = {
  email: {
    pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
    message: 'Please enter a valid email address'
  },
  password: {  
    pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    message: 'Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special character'
  },
  username: {
    pattern: /^[a-zA-Z0-9_]{4,20}$/,
    message: 'Username must be 4-20 characters and can only contain letters, numbers, and underscores'
  },
  phone: {
    pattern: /^\+?[1-9]\d{1,14}$/,
    message: 'Please enter a valid phone number'
  },
  url: {
    pattern: /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-])\/?$/,
    message: 'Please enter a valid URL'
  }
};

const CustomInput = ({
  type = 'text',
  label ,
  value ,
  onChange,
  validationType,
  name = '',
  id = '',
  labelClass,
  required = false,
  disabled = false,
  success = false,
  className = '',
  helperText = '',
  customError = '',
  ...props
}) => {
  const [focused, setFocused] = useState(false);
  const [touched, setTouched] = useState(false);
  
  // Get validation pattern and message if type is specified
  const validation = VALIDATION_PATTERNS[validationType];
  
  // Determine if input is invalid
  const isInvalid = touched && validation?.pattern && !validation.pattern.test(value);
  
  // Get error message
  const errorMessage = customError || (isInvalid ? validation?.message : '');
  
  // Handle blur event
  const handleBlur = () => {
    setFocused(false);
    setTouched(true);
  };

  return (
    <div className="relative ">
      <div className="relative">
        <input
          type={type}
          id={id || name}
          name={name}
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={handleBlur}
          className={`
            peer
            w-full
            px-3
            py-2
            border
            rounded-full
            bg-transparent
            text-sidebar
            focus:outline-none
            focus:ring-1
            focus:border-none
            transition-all
            ${isInvalid ? 'border-red-500 focus:ring-red-200' : 
              success ? 'border-green-500 focus:ring-green-200' :
              'border-gray-300 focus:ring-footer'}
            ${disabled ? 'bg-gray-50 cursor-not-allowed' : ''}
            ${className}
          `}
         
          disabled={disabled}
          required={required}
          {...props}
        />
        
        <label
          htmlFor={id || name}
          className={`
            absolute
            left-4
            top-2
            transition-all
            pointer-events-none
            transform
            text-gray-500
            peer-focus:-translate-y-5
            peer-focus:px-3
            peer-valid:px-3
            peer-focus:bg-purple-50
            peer-valid:bg-purple-50
            peer-valid:-translate-y-5
            peer-focus:text-sm
            peer-valid:text-sm
           
            ${isInvalid ? 'text-red-500' : 
              success ? 'text-green-600' :
              focused ? 'text-footer' : 'text-footer'}
            ${disabled ? 'text-gray-400' : ''}
          `}
        >
          {label}
          {/* {required && <span className="text-red-500 ml-1">*</span>} */}
        </label>
      </div>

      {/* Helper text */}
      {helperText && !errorMessage && (
        <p className="mt-1 text-sm text-gray-500">{helperText}</p>
      )}

      {/* Error message */}
      {errorMessage && (
        <p className="mt-1 text-sm text-red-500">{errorMessage}</p>
      )}

      {/* Success message */}
      {success && !errorMessage && (
        <p className="mt-1 text-sm text-green-600">Looks good!</p>
      )}
    </div>
  );
};

export default CustomInput;
