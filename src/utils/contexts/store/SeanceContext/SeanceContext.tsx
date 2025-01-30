import { createContext, useState, ReactNode, useContext, React } from 'react';

interface SeanceInfo {
  filmId: string;
  seance: {
    date: string;
    time: string;
  };
  selectedHallAndTime: any;
}

interface SeanceContextType {
  seanceInfo: SeanceInfo;
  setSeanceInfo: (data: SeanceInfo) => void;
}

const SeanceContext = createContext<SeanceContextType | undefined>(undefined);

export const SeanceProvider = ({ children }: { children: ReactNode }) => {
  const [seanceInfo, setSeanceInfo] = useState<SeanceInfo>({
    filmId: '',
    seance: { date: '', time: '' },
    selectedHallAndTime: null,
  });

  return (
    <SeanceContext.Provider value={{ seanceInfo, setSeanceInfo }}>
      {children}
    </SeanceContext.Provider>
  );
};

export const useSeance = () => {
  const context = useContext(SeanceContext);
  if (!context) throw new Error('useSeance must be used within SeanceProvider');
  return context;
};
