import * as React from 'react';

type CityContextState = {
  city: string;
  shouldFetch: boolean;
};

type CityContextValue = {
  state: CityContextState;
  setState: React.Dispatch<React.SetStateAction<CityContextState>>;
};

const defaultCityContextValue: CityContextValue = {
  state: { city: '', shouldFetch: false },
  setState: (state) => {},
};

const CityContext = React.createContext(defaultCityContextValue);

const CityProvider = (props: IProviderProps): JSX.Element => {
  const [state, setState] = React.useState(defaultCityContextValue.state);

  return (
    <CityContext.Provider value={{ state, setState }}>
      {props.children}
    </CityContext.Provider>
  );
};

export { CityContext, CityProvider };

export interface IProviderProps {
  children?: any;
}
