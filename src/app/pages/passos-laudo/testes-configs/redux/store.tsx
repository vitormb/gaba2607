import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import categoriasReducer from './categorias/categoriasSlice';
import testesReducer from './testes/testesSlice';
import subtestesReducer from './subtestes/subtestesSlice';

// Seu middleware personalizado
const customMiddleware = (storeAPI:any) => (next:any) => (action:any) => {
  console.log('Despachando ação:', action);  
  return next(action);
};

export default configureStore({
  reducer: {
    categorias: categoriasReducer,
    testes: testesReducer,
    subtestes: subtestesReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(customMiddleware),
});
