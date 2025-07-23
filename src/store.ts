import { create } from "zustand";

interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder?: string;
  searchText?: string;
}

interface GameQueryStore {
  gameQuery: GameQuery;
  setSearchText: (searchText: string) => void;
  setGenreId: (genreId: number) => void;
  setPlatformId: (platformId: number) => void;
  setSortOrder: (sortOrder: string) => void;
  setRefresh : () => void;
}

const useGameQueryStore = create<GameQueryStore>((set) => ({

  gameQuery: {},

  setSearchText: (searchText) => set(() => ({ gameQuery: { searchText } })),

  setGenreId: (genreId) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, genreId } })),

  setPlatformId: (platformId) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, platformId } })),

  setSortOrder: (sortOrder) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, sortOrder } })),

  setRefresh: () => 
    set(() => ({ gameQuery: {} }))

}));


export default useGameQueryStore;


// ------------------------------- Hover Store

interface hoverStateObject {
  hover: boolean;
  game_id?: number;
}

interface hoverStore {
  hover: hoverStateObject;
  setHover: (hover_set: boolean, id: number) => void;
}

export const useHoverStore = create<hoverStore>((set) => ({

  hover: { hover: false},

  setHover: (hover_set, id) => 
    set(() => ({ hover: { hover: hover_set, game_id: id } }))
}))

