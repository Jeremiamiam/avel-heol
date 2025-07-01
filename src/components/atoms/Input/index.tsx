import React, { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

interface BaseProps {
  label?: string;
  error?: string;
  helperText?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

interface InputProps extends BaseProps, React.InputHTMLAttributes<HTMLInputElement> {
  as?: 'input';
}

interface TextareaProps extends BaseProps, React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  as: 'textarea';
}

type CombinedProps = InputProps | TextareaProps;

const baseInputStyles = `
  input input-bordered w-full
  bg-base-100 text-base-content
  border-base-300 focus:border-primary focus:outline-none
  transition-colors duration-200
`;

const baseTextareaStyles = `
  textarea textarea-bordered min-h-[100px] resize-y w-full
  bg-base-100 text-base-content
  border-base-300 focus:border-primary focus:outline-none
  transition-colors duration-200
`;

const errorStyles = 'border-error focus:border-error';

const iconStyles = `
  absolute top-1/2 transform -translate-y-1/2
  flex items-center justify-center
  w-5 h-5 pointer-events-none
`;

export const Input = forwardRef<HTMLInputElement | HTMLTextAreaElement, CombinedProps>(
  ({ className, label, error, leftIcon, rightIcon, helperText, as = 'input', ...props }, ref) => {
    const isTextarea = as === 'textarea';
    
    const inputClasses = twMerge(
      isTextarea ? baseTextareaStyles : baseInputStyles,
      error && errorStyles,
      leftIcon && 'pl-10',
      rightIcon && 'pr-10',
      className
    );

    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium mb-1">
            {label}
          </label>
        )}
        
        <div className="relative">
          {leftIcon && (
            <span className={twMerge(iconStyles, 'left-3 text-base-content/50')}>
              {leftIcon}
            </span>
          )}
          
          {isTextarea ? (
            <textarea
              ref={ref as React.Ref<HTMLTextAreaElement>}
              className={inputClasses}
              {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
            />
          ) : (
            <input
              ref={ref as React.Ref<HTMLInputElement>}
              className={inputClasses}
              {...(props as React.InputHTMLAttributes<HTMLInputElement>)}
            />
          )}
          
          {rightIcon && (
            <span className={twMerge(iconStyles, 'right-3 text-base-content/50')}>
              {rightIcon}
            </span>
          )}
        </div>
        
        {(error || helperText) && (
          <p className={twMerge(
            'text-sm mt-1',
            error ? 'text-error' : 'text-base-content/60'
          )}>
            {error || helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
