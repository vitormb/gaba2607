import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the interface for the Categoria type
export interface Categoria {
  id: string;
  nome: string;
  testes: string[];
}

// Define the initial state
const initialState: Categoria[] = [];

const categoriasSlice = createSlice({
  name: 'categorias',
  initialState,
  reducers: {
    initializeCategorias(state, action: PayloadAction<Categoria[]>) {
      // Fills the initial state with the pre-created categories
      return action.payload;
    },
    addCategoria(state, action: PayloadAction<Categoria>) {
      // Adds a new category to the state
      state.push(action.payload);
    },
    addTesteToCategoria(state, action: PayloadAction<{ categoriaId: string; testeId: string }>) {
      // Finds the category by ID and adds the test ID to the test list
      const { categoriaId, testeId } = action.payload;
      const categoria = state.find((categoria) => categoria.id === categoriaId);
      if (categoria) {
        categoria.testes.push(testeId);
      }
    },
  },
});

export const { initializeCategorias, addCategoria, addTesteToCategoria } = categoriasSlice.actions;

export default categoriasSlice.reducer;