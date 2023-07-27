// buscarPacientes.ts

import axios from 'axios';
import { Paciente } from './PacientesModel';

export async function buscarPacientes(): Promise<Paciente[]> {
  const response = await axios.get<Paciente[]>('http://127.0.0.1:3333/pacientes');
  console.log(response.data);
  return response.data;  
}
