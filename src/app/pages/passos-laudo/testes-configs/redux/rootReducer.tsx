import { combineReducers } from '@reduxjs/toolkit';
import categoriasReducer from './categorias/categoriasSlice';
import testesReducer from './testes/testesSlice';
import subtestesReducer from './subtestes/subtestesSlice';

const rootReducer = combineReducers({
  categorias: categoriasReducer,
  testes: testesReducer,
  subtestes: subtestesReducer,
});

export default rootReducer;