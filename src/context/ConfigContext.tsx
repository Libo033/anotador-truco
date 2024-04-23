"use client";
import { createContext, useState, useEffect } from "react";

interface IConfigContext {
  simpleBackground: boolean;
  showNumbers: boolean;
}

const defaultValue: IConfigContext = {
  simpleBackground: false,
  showNumbers: false,
};

export const ConfigContext: React.Context<IConfigContext> =
  createContext(defaultValue);

export const ConfigContextProvider = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  const [simpleBackground, setSimpleBackground] = useState<boolean>(false);
  const [showNumbers, setShowNumbers] = useState<boolean>(false);

  return (
    <ConfigContext.Provider value={{ simpleBackground, showNumbers }}>
      {children}
    </ConfigContext.Provider>
  );
};
