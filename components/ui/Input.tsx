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

const Input = (props: Props): JSX.Element => {
  return (
    <input
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
};

export default Input;
