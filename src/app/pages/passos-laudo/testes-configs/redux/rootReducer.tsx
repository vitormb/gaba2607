import { combineReducers } from '@reduxjs/toolkit';
import categoriasReducer from './categorias/categoriasSlice';
import testesReducer from './testes/testesSlice';
import subtestesReducer from './subtestes/subtestesSlice';
import selectedTestsReducer from './testes/selectedTestsSlice'; // Import the selectedTestsReducer

const rootReducer = combineReducers({
  categorias: categoriasReducer,
  testes: testesReducer,
  subtestes: subtestesReducer,
  selectedTests: selectedTestsReducer, // Add the selectedTestsReducer to the rootReducer
});

export type RootState = ReturnType<typeof rootReducer>; // Export RootState

export default rootReducer;