import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Defina a interface para o tipo Categoria
export interface Categoria {
  id: string;
  nome: string;
  testes: string[];
}

// Defina o estado inicial
const initialState: Categoria[] = [];

const categoriasSlice = createSlice({
  name: 'categorias',
  initialState,
  reducers: {
    initializeCategorias(state, action: PayloadAction<Categoria[]>) {
      // preenche o estado inicial com as categorias pré-criadas
      return action.payload;
    },
    addCategoria(state, action: PayloadAction<Categoria>) {
      // adiciona uma nova categoria ao estado
      state.push(action.payload);
    },
    addTesteToCategoria(state, action: PayloadAction<{ categoriaId: string; testeId: string }>) {
      // encontra a categoria pelo ID e adiciona o ID do teste à lista de testes
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