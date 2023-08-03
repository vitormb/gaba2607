import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Defina a interface para o tipo Subteste
export interface Subteste {
  id: string;
  nome: string;
  descricao: string;
  resultado: number;
  testeId: string;
}

// Defina o estado inicial
const initialState: Subteste[] = [];

const subtestesSlice = createSlice({
  name: 'subtestes',
  initialState,
  reducers: {
    initializeSubtestes(state, action: PayloadAction<Subteste[]>) {
      // preenche o estado inicial com os subtestes pré-criados
      return action.payload;
    },
    addSubteste(state, action: PayloadAction<Subteste>) {
      // adiciona um novo subteste ao estado
      state.push(action.payload);
    },
    updateSubteste(state, action: PayloadAction<{ id: string; changes: Partial<Subteste> }>) {
      // encontra o subteste pelo ID e atualiza com as mudanças fornecidas
      const { id, changes } = action.payload;
      const subteste = state.find((subteste) => subteste.id === id);
      if (subteste) {
        Object.assign(subteste, changes);
      }
    },
  },
});

export const { initializeSubtestes, addSubteste, updateSubteste } = subtestesSlice.actions;

export default subtestesSlice.reducer;