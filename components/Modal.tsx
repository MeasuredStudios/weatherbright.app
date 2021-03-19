import * as React from 'react';
import 'twin.macro';
import Portal from './Portal';

const Modal = ({ description, explainerText, onCancel, onSubmit }) => {
  React.useEffect(() => {}, []);
  return (
    <>
      <div onClick={onCancel} className="fixed inset-0 bg-black opacity-50" />
      <Portal>
        <div tw="relative px-4 min-h-screen md:flex md:items-center md:justify-center">
          <div tw="bg-black opacity-25 w-full h-full absolute z-10 inset-0" />
          <div tw="bg-white rounded-lg md:max-w-md md:mx-auto p-4 fixed inset-x-0 bottom-0 z-50 mb-4 mx-4 md:relative">
            <div tw="md:flex items-center">
              <div tw="rounded-full border border-gray-300 flex items-center justify-center w-16 h-16 flex-shrink-0 mx-auto">
                <i tw="bx bx-error text-3xl" />
              </div>
              <div tw="mt-4 md:mt-0 md:ml-6 text-center md:text-left">
                <p tw="font-bold">Delete your account</p>
                <p tw="text-sm text-gray-700 mt-1">
                  You will lose all of your data by deleting your account. This
                  action cannot be undone.
                </p>
              </div>
            </div>
            <div tw="text-center md:text-right mt-4 md:flex md:justify-end">
              <button tw="block w-full md:inline-block md:w-auto px-4 py-3 md:py-2 bg-red-200 text-red-700 rounded-lg font-semibold text-sm md:ml-2 md:order-2">
                Delete Account
              </button>
              <button
                tw="block w-full md:inline-block md:w-auto px-4 py-3 md:py-2 bg-gray-200 rounded-lg font-semibold text-sm mt-4
          md:mt-0 md:order-1"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </Portal>
    </>
  );
};

export default Modal;
