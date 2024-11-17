import { create } from "zustand";

type Flight = {
  id: string;
  destination: string;
  price: number;
};

type TravelState = {
  flights: Flight[];
  locations: string[];
  addFlight: (flight: Flight) => void;
  addLocation: (location: string) => void;
};

const useStore = create<TravelState>((set) => ({
  flights: [],
  locations: [],
  addFlight: (flight) =>
    set((state) => ({ flights: [...state.flights, flight] })),
  addLocation: (location) =>
    set((state) => ({ locations: [...state.locations, location] })),
}));

export default useStore;
