import React, { createContext, ReactNode, useContext, useState } from 'react';

interface SelectedSeatProps {
  price: number;
  id: number;
  seatId: number;
}

interface SelectedSeatsDataContextProps {
  selectedSeatsData: SelectedSeatProps[];
  setSelectedSeatsData: (data: SelectedSeatProps[]) => void;
}

const SelectedSeatsDataContext = createContext<
  SelectedSeatsDataContextProps | undefined
>(undefined);

export const SelectedSeatsDataProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [selectedSeatsData, setSelectedSeatsData] = useState<
    SelectedSeatProps[]
  >([]);

  return (
    <SelectedSeatsDataContext.Provider
      value={{ selectedSeatsData, setSelectedSeatsData }}
    >
      {children}
    </SelectedSeatsDataContext.Provider>
  );
};

export const useSelectedSeatContext = () => {
  const context = useContext(SelectedSeatsDataContext);
  if (!context)
    throw new Error(
      'useSelectedSeatContext must be used within SelectedSeatsDataProvider'
    );
  return context;
};
