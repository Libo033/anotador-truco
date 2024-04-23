"use client";
import { createContext, useState, useEffect } from "react";

interface IConfigContext {
  simpleBackground: boolean;
  showNumbers: boolean;
  handleSimpleBackground: (checked: boolean) => void;
  handleShowNumbers: (checked: boolean) => void;
}

const defaultValue: IConfigContext = {
  simpleBackground: false,
  showNumbers: false,
  handleSimpleBackground: (checked: boolean) => {},
  handleShowNumbers: (checked: boolean) => {},
};

export const ConfigContext: React.Context<IConfigContext> =
  createContext(defaultValue);

export const ConfigContextProvider = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  const [simpleBackground, setSimpleBackground] = useState<boolean>(false);
  const [showNumbers, setShowNumbers] = useState<boolean>(false);

  const handleSimpleBackground = (checked: boolean) => {
    setSimpleBackground(checked);
  };

  const handleShowNumbers = (checked: boolean) => {
    setShowNumbers(checked);
  };

  return (
    <ConfigContext.Provider
      value={{
        simpleBackground,
        showNumbers,
        handleShowNumbers,
        handleSimpleBackground,
      }}
    >
      {children}
    </ConfigContext.Provider>
  );
};
