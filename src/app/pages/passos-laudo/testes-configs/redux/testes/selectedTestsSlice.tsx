import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {Teste} from './testesSlice'
import {Subteste} from '../subtestes/subtestesSlice'

const selectedTestsSlice = createSlice({
  name: 'selectedTests',
  initialState: [] as Teste[],
  reducers: {
    addTest: (state, action: PayloadAction<Teste>) => {
      const isTestAlreadyInList = state.some((test) => test.id === action.payload.id)
      if (!isTestAlreadyInList) {
        state.push(action.payload)
      }
    },
    removeTest: (state, action: PayloadAction<Teste>) => {
      return state.filter((test) => test.id !== action.payload.id)
    },
  },
})
export const {addTest, removeTest} = selectedTestsSlice.actions

export default selectedTestsSlice.reducer
