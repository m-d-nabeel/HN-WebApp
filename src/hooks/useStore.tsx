import { create } from "zustand";

interface NewsData {
  hits?: {
    objectID: string;
    author: string;
    created_at: string;
    title: string;
    url: string;
    updated_at: string;
    [key: string]: any;
  }[];
  [key: string]: any;
}
interface ModalStore {
  data?: NewsData;
  setData: (data: NewsData) => void;
}

export const useZStore = create<ModalStore>((set) => ({
  data: {},
  setData: (data: NewsData) => set({ data }),
}));
