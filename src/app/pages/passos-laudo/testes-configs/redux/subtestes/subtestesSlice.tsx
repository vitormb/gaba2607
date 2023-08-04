import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Subteste {
  id: string;
  nome: string;
  descricao: string;
  resultado: number;
  testeId: string;
}

const initialState: Subteste[] = [];

const subtestesSlice = createSlice({
  name: 'subtestes',
  initialState,
  reducers: {
    initializeSubtestes(state, action: PayloadAction<Subteste[]>) {
      return action.payload;
    },
    addSubteste(state, action: PayloadAction<Subteste>) {
      state.push(action.payload);
    },
    updateSubteste(state, action: PayloadAction<{ id: string; changes: Partial<Subteste> }>) {
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