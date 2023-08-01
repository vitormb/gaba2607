import { configureStore } from '@reduxjs/toolkit';
import categoriasReducer from './categorias/categoriasSlice';
import testesReducer from './testes/testesSlice';
import subtestesReducer from './subtestes/subtestesSlice';

export default configureStore({
  reducer: {
    categorias: categoriasReducer,
    testes: testesReducer,
    subtestes: subtestesReducer,
  },
});