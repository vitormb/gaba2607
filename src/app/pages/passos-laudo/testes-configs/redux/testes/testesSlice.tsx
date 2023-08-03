import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Defina a interface para o tipo Teste
export interface Teste {
  id: string;
  nome: string;
  subtestes: string[];
  categoriaId: string;
}

// Defina o estado inicial
const initialState: Teste[] = [];

const testesSlice = createSlice({
  name: 'testes',
  initialState,
  reducers: {
    initializeTestes(state, action: PayloadAction<Teste[]>) {
      // preenche o estado inicial com os testes pré-criados
      return action.payload;
    },
    addTeste(state, action: PayloadAction<Teste>) {
      // adiciona um novo teste ao estado
      state.push(action.payload);
    },
    updateTeste(state, action: PayloadAction<{ id: string; changes: Partial<Teste> }>) {
      // encontra o teste pelo ID e atualiza com as mudanças fornecidas
      const { id, changes } = action.payload;
      const teste = state.find((teste) => teste.id === id);
      if (teste) {
        Object.assign(teste, changes);
      }
    },
  },
});

export const { initializeTestes, addTeste, updateTeste } = testesSlice.actions;

export default testesSlice.reducer;