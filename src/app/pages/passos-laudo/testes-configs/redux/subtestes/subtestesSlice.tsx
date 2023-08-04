import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the interface for the Subteste type
export interface Subteste {
  id: string;
  nome: string;
  descricao: string;
  resultado: number;
  testeId: string;
}

// Define the initial state
const initialState: Subteste[] = [];

const subtestesSlice = createSlice({
  name: 'subtestes',
  initialState,
  reducers: {
    initializeSubtestes(state, action: PayloadAction<Subteste[]>) {
      // Fills the initial state with the pre-created subtests
      return action.payload;
    },
    addSubteste(state, action: PayloadAction<Subteste>) {
      // Adds a new subtest to the state
      state.push(action.payload);
    },
    updateSubteste(state, action: PayloadAction<{ id: string; changes: Partial<Subteste> }>) {
      // Finds the subtest by ID and updates it with the provided changes
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