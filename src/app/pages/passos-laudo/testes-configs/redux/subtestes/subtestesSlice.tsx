import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Subteste {
  id: string;
  nome: string;
  resultado: number;
  testeId: string;
}
interface SubtestesState {
  subtestes: Subteste[];
}
const initialState: SubtestesState = {
  subtestes: [],
};
const subtestesSlice = createSlice({
  name: 'subtestes',
  initialState,
  reducers: {
    addSubteste: (state, action: PayloadAction<Subteste>) => {
      state.subtestes.push(action.payload);
    },
    updateSubteste: (state, action: PayloadAction<{ id: string; changes: Partial<Subteste> }>) => {
      const { id, changes } = action.payload;
      const subteste = state.subtestes.find((subteste) => subteste.id === id);
      if (subteste) {
        Object.assign(subteste, changes);
      }
    },
  },
});

export const { addSubteste, updateSubteste } = subtestesSlice.actions;

export default subtestesSlice.reducer;