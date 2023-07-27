import React from 'react';
import { useFormik, useFormikContext } from 'formik';


type TesteProps = {
  interpretacao: string;
  referencias: string;
  administracao: string;
  tempoDeAplicacao: string;
  versoesAtualizacoes: string;
  observacao: string;
  pontuacao: number[];
  onSubmit: (values: any) => void;
  children?: React.ReactNode;
  values: any;
};

const Teste: React.FC<TesteProps> = ({
  interpretacao,
  referencias,
  administracao,
  tempoDeAplicacao,
  versoesAtualizacoes,
  observacao,
  pontuacao,
  onSubmit,
  children,
}) => {
  const { handleSubmit } = useFormikContext<any>();

  const formik = useFormik({
    initialValues: {
      interpretacao: interpretacao,
      referencias: referencias,
      administracao: administracao,
      tempoDeAplicacao: tempoDeAplicacao,
      versoesAtualizacoes: versoesAtualizacoes,
      observacao: observacao,
      pontuacao: pontuacao,
    },
    onSubmit: (values) => {
      onSubmit(values);
    },
  });

  return (
    <form onSubmit={handleSubmit}>
      {/* Render form fields */}
      {/* Example: */}
      <label>
        Interpretacao:
        <input
          type="text"
          name="interpretacao"
          value={formik.values.interpretacao}
          onChange={formik.handleChange}
        />
      </label>

      {/* Render sub-tests if any */}
      {children}

      <button type="submit">Submit</button>
    </form>
  );
};

export default Teste;
