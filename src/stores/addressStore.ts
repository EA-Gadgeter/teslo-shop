import { create } from "zustand";
import { persist } from "zustand/middleware";

interface State {
  address: {
    firstName: string;
    lastName: string;
    address: string;
    address2?: string;
    postalCode: string;
    city: string;
    country: string;
    phone: string;
  }

  // eslint-disable-next-line no-unused-vars
  setAddress: (address: State["address"]) => void;
}

export const addressStore = create<State>()(
  persist(
    (set, get) => ({
      address: {
        firstName: "",
        lastName: "",
        address: "",
        address2: "",
        postalCode: "",
        city: "",
        country: "",
        phone: ""
      },

      setAddress(address) {
        set({ address });
      },
    }),

    {
      name: "address" // Nombre a utilizar en localStorage
    }
  )
);
