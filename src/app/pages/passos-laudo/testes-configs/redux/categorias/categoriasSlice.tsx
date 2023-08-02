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
    addTesteToCategoria: (state, action: PayloadAction<{ categoriaId: string; testeId: string }>) => {
      const { categoriaId, testeId } = action.payload;
      const categoria = state.categorias.find(categoria => categoria.id === categoriaId);
      if (categoria) {
        categoria.testes.push(testeId);
      }
    },
  },
});

export const { addCategoria, addTesteToCategoria } = categoriasSlice.actions;

export default categoriasSlice.reducer;