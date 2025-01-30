import React from 'react';
import { SeanceProvider } from './SeanceContext/SeanceContext';
import { FormDataProvider } from './FormDataContext/FormDataContext';
import { SelectedSeatsDataProvider } from './SelectedSeatsContext';

export const ContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <SeanceProvider>
      <SelectedSeatsDataProvider>
        <FormDataProvider>{children}</FormDataProvider>
      </SelectedSeatsDataProvider>
    </SeanceProvider>
  );
};
