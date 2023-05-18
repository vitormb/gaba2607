// buscarPacientes.ts
import axios from 'axios';
import { Paciente } from './PacienteModel';

export async function buscarPacientes({ id }: { id: number }): Promise<Paciente[]> {
  const response = await axios.get<Paciente[]>('http://127.0.0.1:3333/pacientes/${id}');
  return response.data;
}
