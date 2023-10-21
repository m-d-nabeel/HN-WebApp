import { create } from "zustand";

interface newsData {
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
  data: newsData;
  setData: (data: any) => void;
}

export const useZuzStore = create<ModalStore>((set) => ({
  data: {},
  setData: (data: any) => set({ data }),
}));
