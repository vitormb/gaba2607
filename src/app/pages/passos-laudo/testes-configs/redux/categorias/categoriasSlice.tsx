import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Categoria {
  id: string;
  nome: string;
  testes: Teste[];
}

interface Teste {
  id: string;
  nome: string;
  subtestes: Subteste[];
}

interface Subteste {
  id: string;
  nome: string;
  resultado: number;
}

const initialState: Categoria[] = [
  // inicialize com qualquer estado inicial necessário
];

const categoriasSlice = createSlice({
  name: 'categorias',
  initialState,
  reducers: {
    // defina quaisquer reducers necessários aqui
  },
});

export const { /* exporte quaisquer ações necessárias aqui */ } = categoriasSlice.actions;

export default categoriasSlice.reducer;