import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Categoria {
  id: string;
  nome: string;
  testes: string[]; // IDs dos testes
}

interface CategoriasState {
  categorias: Categoria[];
}

const initialState: CategoriasState = {
  categorias: [],
};

const categoriasSlice = createSlice({
  name: 'categorias',
  initialState,
  reducers: {
    addCategoria: (state, action: PayloadAction<Categoria>) => {
      state.categorias.push(action.payload);
    },
  },
});

export const { addCategoria } = categoriasSlice.actions;

export default categoriasSlice.reducer;