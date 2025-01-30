import React from 'react';
import { SeanceProvider } from './SeanceContext/SeanceContext';
import { FormDataProvider } from './FormDataContext/FormDataContext';
import { SelectedSeatsDataProvider } from './SelectedSeatsContext';
import { PaymentProvider } from './SuccessPaymentContext';

export const ContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <SeanceProvider>
      <SelectedSeatsDataProvider>
        <FormDataProvider>
          <PaymentProvider>{children}</PaymentProvider>
        </FormDataProvider>
      </SelectedSeatsDataProvider>
    </SeanceProvider>
  );
};
