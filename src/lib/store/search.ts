import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { storage } from '../storage';

interface SearchState {
  searchValue: string;
  searchHistory: string[];
  setSearchValue: (value: string) => void;
  addToSearchHistory: (value: string) => void;
  clearSearchHistory: () => void;
}

export const useSearchStore = create<SearchState>()(
  persist(
    (set) => ({
      searchValue: '',
      searchHistory: [],
      setSearchValue: (value) => set({ searchValue: value }),
      addToSearchHistory: (value) =>
        set((state) => {
          const updatedHistory = state.searchHistory.includes(value)
            ? state.searchHistory
            : [...state.searchHistory, value].slice(-10);
          return { searchHistory: updatedHistory };
        }),
      clearSearchHistory: () => set({ searchHistory: [] }),
    }),
    {
      name: 'search-storage',
      storage: {
        getItem: (name) => {
          const value = storage.getString(name);
          return value ? JSON.parse(value) : null;
        },
        setItem: (name, value) => {
          storage.set(name, JSON.stringify(value));
        },
        removeItem: (name) => {
          storage.delete(name);
        },
      },
    },
  ),
);

export const CATEGORY_MAPPING = {
  electronics: 'Fresh Fruits & Vegetables',
  jewelery: 'Cooking Oil & Grease',
  "men's clothing": 'Meat & Fish',
  "women's clothing": 'Bakery & Snacks',
};

export const CATEGORY_STYLES = [
  { color: '#53B1751A', borderColor: '#53B175B2', image: require('../../../assets/fruits.png') },
  { color: '#F8A44C1A', borderColor: '#F8A44CB2', image: require('../../../assets/oil.png') },
  { color: '#F7A59340', borderColor: '#F7A593', image: require('../../../assets/meat.png') },
  { color: '#D3B0E040', borderColor: '#D3B0E0', image: require('../../../assets/bakery.png') }
];