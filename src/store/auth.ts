import { create } from "zustand";

interface AuthState {
  isAuthenticated: boolean;
  setAuthenticated: (value: boolean) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: true, // Set to true for testing (will be replaced with actual auth later)
  setAuthenticated: (value: boolean) => set({ isAuthenticated: value }),
}));
