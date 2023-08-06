import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import categoriasReducer from './categorias/categoriasSlice';
import testesReducer from './testes/testesSlice';
import subtestesReducer from './subtestes/subtestesSlice';
import selectedTestsReducer from './testes/selectedTestsSlice';

// Seu middleware personalizado
const customMiddleware = (storeAPI:any) => (next:any) => (action:any) => {
  console.log('Despachando ação:', action);  
  return next(action);
};

const store = configureStore({
  reducer: {
    categorias: categoriasReducer,
    testes: testesReducer,
    subtestes: subtestesReducer,
    selectedTests: selectedTestsReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(customMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
