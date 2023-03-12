import React from 'react';

type StoreProps = {
  nameList: string[] | undefined;
  setNameList: React.Dispatch<React.SetStateAction<string[] | undefined>>;
};

type Children = {
  children?: React.ReactNode;
};

const Store = React.createContext<StoreProps | null>(null);

export const useStoreState = (): StoreProps => {
  const context = React.useContext(Store);

  if (!context) {
    throw new Error('useSugorokuState must be used within StoreStateProvider');
  }

  return context;
};

export const StoreStateProvider: React.FC<Children> = ({ children }) => {
  const [nameList, setNameList] = React.useState<string[] | undefined>();

  const providerValue = {
    nameList,
    setNameList,
  };

  return <Store.Provider value={providerValue}>{children}</Store.Provider>;
};
