import { createContext } from 'react';

interface SharedDataProps {
  seanceInfo?: {
    seanceDate: string;
    seanceTime: string;
    hallName: string;
  };
  selectedSeats?: {
    price: number;
    id: number;
    seatId: number;
  }[];
}

interface FormDataProps {
  firstName: string;
  lastName: string;
  phone: number;
  email: string;
  adress: string;
}

interface AppContextType {
  sharedData: SharedDataProps; // замените any на конкретный тип ваших данных
  setSharedData: (data: SharedDataProps) => void;
  formData: FormDataProps;
  setFormData: (data: FormDataProps) => void;
}

export const AppContext = createContext<AppContextType | undefined>(undefined);
