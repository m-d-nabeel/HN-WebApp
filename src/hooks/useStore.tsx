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
  searchStoreText?: string;
  setData: (data: NewsData) => void;
  setSearchStoreText: (searchText: string) => void;
}

export const useZStore = create<ModalStore>((set) => ({
  data: {},
  searchStoreText: "",
  setData: (data: NewsData) => set({ data }),
  setSearchStoreText: (searchStoreText: string) => set({ searchStoreText }),
}));
