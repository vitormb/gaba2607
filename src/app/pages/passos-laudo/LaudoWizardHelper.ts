import * as Yup from 'yup';


export interface ICreateLaudos {  
  id: string,
}

const createLaudosSchemas = [
  Yup.object().shape({}),
  Yup.object().shape({}),
  Yup.object().shape({}),
  Yup.object().shape({}),
  Yup.object().shape({}),
  Yup.object().shape({}),
  Yup.object().shape({}),
  Yup.object().shape({}),
  Yup.object().shape({}),
  Yup.object().shape({}),
  Yup.object().shape({}),
  Yup.object().shape({}),
  Yup.object().shape({}),
  Yup.object().shape({}),
]

const inits: ICreateLaudos = {
  id: '',    
  
};


export { createLaudosSchemas, inits }
