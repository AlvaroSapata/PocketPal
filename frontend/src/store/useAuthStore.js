import { create } from "zustand";
import { axiosInstance } from "../lib/axios";

export const useAuthStore = create((set) => ({
  authUser: null,
  isSigningUp: false,
  isLoggingIn: false,
  isUpdatingProfile: false,

  isCheckingAuth: true,

  checkAuth: async () => {
    try {
      const res = await axiosInstance.get("/api/auth/check-auth");

      set({ authUser: res.data });
    } catch (err) {
      console.error("Error in checkAuth",err);
    } finally {
      set({ isCheckingAuth: false });
    }
  },

  signup: async(data) => {
    
  }
}));
