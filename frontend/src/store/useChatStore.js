import { create } from "zustand";
import toast from "react-hot-toast";
import { axiosInstance } from "../lib/axios";

export const useChatStore = create((set) => ({
  messages: [],
  users: [],
  selectedUser: null,
  isUsersLoading: false,
  isMessagesLoading: false,

  getUsers: async () => {
    set({ isUsersLoading: true });
    try {
      const res = await axiosInstance.get("/messages/users");
      set({ users: res.data });
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      set({ isUsersLoading: false });
    }
  },

  getMessages: async (userId) => {
    set({ isMessagesLoading: true });
    try {
      const res = await axiosInstance.get(`/messages/${userId}`);
      set({ messages: res.data });
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      set({ isMessagesLoading: false });
    }
  },
  sendMessage: (messageData) => {
    set(async (state) => {
      const { selectedUser, messages } = state; // Ahora usamos el parámetro 'state'

      // Realizamos la llamada asincrónica fuera de 'set'
      try {
        const res = await axiosInstance.post(
          `/messages/send/${selectedUser._id}`,
          messageData
        );
        // Actualizamos el estado con los nuevos mensajes
        return { messages: [...messages, res.data] };
      } catch (error) {
        toast.error(error.response?.data?.message || "Error sending message");
        return state; // En caso de error, no actualizamos el estado
      }
    });
  },

  //todo optimize
  setSelectedUser: (selectedUser) => set({ selectedUser }),
}));
