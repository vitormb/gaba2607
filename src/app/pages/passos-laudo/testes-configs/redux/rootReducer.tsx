import { combineReducers } from '@reduxjs/toolkit';
import categoriasReducer from './categorias/categoriasSlice';
import testesReducer from './testes/testesSlice';
import subtestesReducer from './subtestes/subtestesSlice';
import selectedTestsReducer from './testes/selectedTestsSlice'; 

const rootReducer = combineReducers({
  categorias: categoriasReducer,
  testes: testesReducer,
  subtestes: subtestesReducer,
  selectedTests: selectedTestsReducer, 
});

export type RootState = ReturnType<typeof rootReducer>; 

export default rootReducer;