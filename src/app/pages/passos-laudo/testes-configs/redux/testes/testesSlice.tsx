import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the interface for the Teste type

export interface Teste {
  id: string;
  nome: string;
  categoriaId: any;
  subtestes: string[];
}

// Define the interface for the Testes state
export interface TestesState {
  testes: Teste[];
  selectedTesteId: string | null;
}

// Define the initial state
const initialState: TestesState = {
  testes: [],
  selectedTesteId: null,
};

const testesSlice = createSlice({
  name: 'testes',
  initialState,
  reducers: {
    initializeTestes(state, action: PayloadAction<Teste[]>) {
      // Fills the initial state with the pre-created tests
      state.testes = action.payload;
    },
    selectTeste(state, action: PayloadAction<string | null>) {
      // Updates the selected test
      state.selectedTesteId = action.payload;
    },
    addTeste(state, action: PayloadAction<Teste>) {
      // Adds a new test to the state
      state.testes.push(action.payload);
    },
    updateTeste(state, action: PayloadAction<{ id: string; changes: Partial<Teste> }>) {
      // Finds the test by ID and updates it with the provided changes
      const { id, changes } = action.payload;
      const teste = state.testes.find((teste) => teste.id === id);
      if (teste) {
        Object.assign(teste, changes);
      }
    },
  },
});

export const { initializeTestes, addTeste, updateTeste, selectTeste } = testesSlice.actions;
export default testesSlice.reducer;
