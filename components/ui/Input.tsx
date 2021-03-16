import * as React from 'react';
import 'twin.macro';

interface Props extends React.ComponentPropsWithRef<'input'> {
  /**
   * Defines the color of the input
   */
  valid?: boolean;
  /**
   * Defines if the input is disabled
   */
  disabled?: boolean;
  /**
   * Defines the type of the input
   */
  type?: string;
  /**
   * Defines the type of the onChange Function
   */
  value?: any;
  /**
   * Defines the type of the onChange Function
   */
  onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

// const states = {
//   BASE: `p-4 text-gray-700 w-full border border-gray-300 rounded-lg focus:outline-none focus:border-gray-400 focus:ring-0`,
//   ACTIVE: 'focus:border-blue-400 focus:shadow-outline-blue',
//   DISABLED: 'cursor-not-allowed opacity-50 bg-gray-200',
//   VALID: 'border-green-600 focus:border-green-400 focus:shadow-outline-green',
//   INVALID: 'border-red-600 focus:border-red-400 focus:shadow-outline-red',
//   RADIO:
//     'text-gray-700 form-radio focus:border-gray-400 focus:outline-none focus:shadow-outline-blue',
//   CHECKBOX:
//     'text-gray-700 form-checkbox focus:border-gray-400 focus:outline-none focus:shadow-outline-blue',
// };

// const events = {
//   CLICK: 'CLICK',
// };

const Input = React.forwardRef<HTMLInputElement, Props>((props, ref) => {
  return (
    <input
      ref={ref}
      type={props.type}
      name="query"
      placeholder="Enter City"
      maxLength={85}
      required={true}
      value={props.value}
      onChange={props.onChangeHandler}
      tw="p-4 text-gray-700 w-full border border-gray-300 rounded-lg focus:outline-none focus:border-gray-400 focus:ring-0"
    />
  );
});

export default Input;
