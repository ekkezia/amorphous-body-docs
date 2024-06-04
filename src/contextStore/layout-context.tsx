'use client';

import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from 'react';

export type ILayoutContext = {
  showMenu: boolean
  setShowMenu: Dispatch<SetStateAction<boolean>>
}

export const LayoutContext = createContext<ILayoutContext | null>(null);

export const useLayoutContext = () => {
  const context = useContext(LayoutContext);
  if (!context) {
    throw new Error('useLayoutContext must be used within a LayoutProvider');
  }
  return context;
};

export const LayoutProvider = ({ children }: {
  children: ReactNode
}) => {
  const [showMenu, setShowMenu] = useState<boolean>(false)
  return (
    <LayoutContext.Provider value={{ showMenu, setShowMenu }}>
      {children}
    </LayoutContext.Provider>
  )
}