import { createContext } from 'react';

interface AppContextType {
  sharedData: SharedDataProps; // замените any на конкретный тип ваших данных
  setSharedData: (data: any) => void;
}

interface SharedDataProps {
  seanceInfo?: {
    seanceDate: string;
    seanceTime: string;
    hallName: string;
  };
}

export const AppContext = createContext<AppContextType | undefined>(undefined);
