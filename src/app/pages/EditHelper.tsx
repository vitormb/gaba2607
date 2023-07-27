import React, { useState, useEffect } from "react";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import axios from "axios";
import { number } from "yup";

interface EditPaciente {
  getid: number;
  id: string;
  nomeCompleto: string;
  dataNascimento: string;
  genero: string;
  escolaridade: string;
  segmento: string;
  profissao: string;
  ocupacao: string;
  lateralidade: string;
  organizacao: string;
  email: string;
  cidadeNascimento: string;
  estadoNascimento: string;
  paisNascimento: string;
  enderecos: Endereco[];
  telefones: Telefones[];
  responsaveis: Responsaveis[];
}

interface Endereco {
  cidade: string;
  cep: string;
  estado: string;
  endereco: string;
  bairro: string;
  complemento: string;
}

interface Telefones {
  telefone: string;
  isWhatsapp: boolean;
}

interface Responsaveis {
  id: string;
  nome: string;
  genero: string;
  telefone: string;
  observacao: string;
  isWhatsapp: boolean;
}

const PacienteEdit: React.FC = () => {
  const [data, setData] = useState<EditPaciente | undefined>();
  const id = "13"; // Replace with the actual patient ID

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:3333/pacientes/${id}`
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [id]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await axios.put(`http://127.0.0.1:3333/pacientes/${id}`, data);
      console.log("Patient data updated successfully");
    } catch (error) {
      console.error("Error updating patient data:", error);
    }
  };

  if (!data) {
    return <div>Carregando...</div>;
  }

  return (
    <div>
      <h1>Edit Page</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input
          defaultValue={data.nomeCompleto}
          name="firstName"
          type="text"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PacienteEdit;
