import { createContext, useState, ReactNode, useContext, React } from 'react';

interface SuccessPaymentProps {
  success: boolean;
  reason: string;
  order: {
    filmName: string;
    orderNumber: number;
    tickets: [
      {
        filmId: string;
        row: number;
        column: number;
        seance: {
          date: string;
          time: string;
        };
        phone: string;
        status: string;
      },
    ];
    person: {
      firstname: string;
      lastname: string;
      middlename: string;
      phone: string;
    };
    status: string;
  };
}

interface SuccessContextType {
  successPayment: SuccessPaymentProps;
  setSuccessPayment: (data: SuccessPaymentProps) => void;
}

const PaymentContext = createContext<SuccessContextType | undefined>(undefined);

export const PaymentProvider = ({ children }: { children: ReactNode }) => {
  const [successPayment, setSuccessPayment] = useState<SuccessPaymentProps>();

  return (
    <PaymentContext.Provider value={{ successPayment, setSuccessPayment }}>
      {children}
    </PaymentContext.Provider>
  );
};

export const usePayment = () => {
  const context = useContext(PaymentContext);
  if (!context)
    throw new Error('usePayment must be used within PaymentProvider');
  return context;
};
