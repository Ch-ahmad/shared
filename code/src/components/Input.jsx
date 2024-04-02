import React from 'react';
import { cn } from '../utils/lib/index';
import { MdErrorOutline } from 'react-icons/md';
import { forwardRef } from 'react';
const Input = forwardRef(
  (
    {
      placeholder,
      label,
      inputClassName,
      labelClassName,
      onChange,
      error,
      ...props
    },
    ref
  ) => {
    return (
      <div className="flex flex-col gap-y-[7px]">
        {label && (
          <label className={cn('text-textWhite-primary', labelClassName)}>
            {label}
          </label>
        )}

        <input
          placeholder={placeholder}
          onChange={onChange}
          className={cn(
            'rounded-md border px-[12px]   py-[8px]  text-[16px] outline-none transition-colors focus:ring-2 focus:ring-black disabled:cursor-not-allowed disabled:opacity-50',
            inputClassName
          )}
          ref={ref}
          {...props}
        />
        {error && (
          <div className="flex items-center space-x-[5px] text-[11px]">
            <MdErrorOutline className="size-3 text-red-500" />

            <span className="text-red-500">{error}</span>
          </div>
        )}
      </div>
    );
  }
);

export default Input;
