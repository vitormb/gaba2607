import { Formik, Field, Form } from "formik";
  

export function CadastroPaciente() {
    return (
        <div className="geral">
        <div className="my-10 col-12">
            <h2>Cadastro de Paciente</h2>
        </div>

        <Formik
          initialValues={{
            "nomeCompleto": "",
            "dataNascimento": "",
            "genero": "",
            "escolaridade": "",
            "escolaInstituicao": "",
            "segmento": "",
            "profissao": "",
            "ocupacao": "",
            "lateralidade": "",
            "fotoPaciente": "",
            "cep": "35170111",
            "cidade": "",
            "estado": "",
            "endereco": "",
            "complemento": "",
            "email": "",
            "telefone": "",
            "cidadeNascimento": "",
            "estadoNascimento": "",
            "paisNascimento": "",
            "nomeResponsavel1": "",
            "generoResponsavel1": "",
            "observacaoResponsavel1": "",
            "nomeResponsavel2": "",
            "generoResponsavel2": "",
            "observacaoResponsavel2": ""
           }}
          onSubmit={async (values) => {
            await new Promise((resolve) => setTimeout(resolve, 500));
            alert(JSON.stringify(values, null, 2));
          }}
        >
          <Form>
            <div className="row">
            <div className="mb-10 col-4">
                <label htmlFor="nomeCompleto">Nome completo:</label>
                <Field
                 placeholder="Nome completo"
                 className="form-control form-control-solid"
                 name="nomeCompleto"
                 type="text" />
            </div>
            <div className="mb-10 col-4">
                <label htmlFor="dataNascimento">Data de nascimento:</label>
                <Field 
                placeholder="Data de nascimento"
                className="form-control form-control-solid"
                name="dataNascimento"
                type="date" />
            </div>
            <div className="mb-10 col-4">
                <label htmlFor="genero">Gênero:</label>
                <Field
                placeholder="Gênero"
                className="form-control form-control-solid"
                name="genero"
                type="text" />
            </div>
            <div className="mb-10 col-4">
                <label htmlFor="escolaridade">Escolaridade:</label>
                <Field 
                placeholder="Escolaridade"
                className="form-control form-control-solid"
                name="escolaridade"
                type="text" />
            </div>
            <div className="mb-10 col-4">
                <label htmlFor="escolaInstituicao">Escola / Instituição:</label>
                <Field 
                placeholder="Escola / Instituição"
                className="form-control form-control-solid"
                name="instituicao"
                type="text" />
            </div>
            <div className="mb-10 col-4">
                <label htmlFor="segmento">Segmento:</label>
                <Field
                placeholder="Segmento"
                className="form-control form-control-solid"
                name="segmento"
                type="text" />
            </div>
            <div className="mb-10 col-4">
                <label htmlFor="profissao">Profissão:</label>
                <Field
                placeholder="Profisssão"
                className="form-control form-control-solid"
                name="profissao"
                type="text" />
            </div>
            <div className="mb-10 col-4">
                <label htmlFor="ocupacao">Ocupação:</label>
            <Field
            placeholder="Ocupação"
            className="form-control form-control-solid"
            name="ocupacao"
            type="text" />
            </div>
            <div className="mb-10 col-4">
                <label htmlFor="lateralidade">Lateralidade:</label>
            <Field 
            placeholder="Selecione"
            className="form-control form-control-solid"
            name="lateralidade"
            as="select">
                <option value="Destro">Destro</option>
                <option value="Canhoto">Canhoto</option>
                <option value="Ambidestro">Ambidestro</option>
            </Field>
            </div>
            <div className="mb-10 col-4">
                <label htmlFor="fotopaciente">Foto do paciente:</label>
                <Field
                placeholder="Foto do paciente"
                className="form-control form-control-solid"
                name="fotoPaciente"
                type="upload" />
            </div>
            <h2>aoba</h2>
            <div className="mb-10 col-4">
                <label htmlFor="cep">CEP:</label>
                <Field
                id="cep"
                placeholder="CEP"
                className="form-control form-control-solid"
                name="cep"
                type="text" />
            </div>
            <div className="mb-10 col-4">
                <label htmlFor="cidade">Cidade:</label>
                <Field
                placeholder="Cidade"
                className="form-control form-control-solid"
                name="cidade"
                type="text" />
            </div>
            <div className="mb-10 col-4">
                <label htmlFor="estado">Estado:</label>
                <Field
                placeholder="Estado"
                className="form-control form-control-solid"
                name="estado"
                type="text" />
            </div>
            <div className="mb-10 col-4">
                <label htmlFor="endereco">Endereço:</label>
                <Field
                placeholder="Endereço"
                className="form-control form-control-solid"
                name="endereco"
                type="text" />
            </div>
            <div className="mb-10 col-4">
                <label htmlFor="complemento">Complemento:</label>
                <Field
                placeholder="Complemento"
                className="form-control form-control-solid"
                name="complemento"
                type="text" />
            </div>
            <div className="mb-10 col-4">
                <label htmlFor="email">E-mail</label>
                <Field
                placeholder="E-mail"
                className="form-control form-control-solid"
                name="email"
                type="email" />
            </div>
            <div className="mb-10 col-4">
                <label htmlFor="telefone">Telefone:</label>
                <Field
                placeholder="Telefone"
                className="form-control form-control-solid"
                name="telefone"
                type="text" />
            </div>
            <div className="mb-10 col-4">
                <label htmlFor="cidadeNascimento">Cidade de nascimento:</label>
                <Field
                placeholder="Cidade de nascimento"
                className="form-control form-control-solid"
                name="cidadeNascimento"
                type="text" />
            </div>
            <div className="mb-10 col-4">
                <label htmlFor="estadoNascimento">Estado de nascimento:</label>
                <Field
                placeholder="Estado de nascimento"
                className="form-control form-control-solid"
                name="estadoNascimento"
                type="text" />
            </div>
            <div className="mb-10 col-4">
                <label htmlFor="paisNascimento">País de nascimento:</label>
                <Field
                placeholder="País de nascimento:"
                className="form-control form-control-solid"
                name="paisNascimento"
                type="text" />
            </div>
            <div className="mb-10 col-4">
                <label htmlFor="nomeResponsavel1">Nome do 1º responsável:</label>
                <Field
                placeholder="Nome do 1º responsável:"
                className="form-control form-control-solid"
                name="nomeResponsavel1"
                type="text" />
            </div>
            <div className="mb-10 col-4">
                <label htmlFor="generoResponsavel1">Gênero - 1º responsável:</label>
                <Field
                placeholder="Gênero - 1º responsável"
                className="form-control form-control-solid"
                name="generoResponsavel1"
                type="text" />
            </div>
            <div className="mb-10 col-4">
                <label htmlFor="observacaoResponsavel1">Observação - 1º responsável:</label>
                <Field
                placeholder="Observação - 1º responsável"
                className="form-control form-control-solid"
                name="observacaoResponsavel1"
                type="text" />
            </div>
            <div className="mb-10 col-4">
                <label htmlFor="nomeResponsavel2">Nome do 2º responsável:</label>
                <Field
                placeholder="Nome do 2º responsável:"
                className="form-control form-control-solid"
                name="nomeResponsavel2"
                type="text" />
            </div>
            <div className="mb-10 col-4">
                <label htmlFor="generoResponsavel2">Gênero - 2º responsável:</label>
                <Field
                placeholder="Gênero - 2º responsável"
                className="form-control form-control-solid"
                name="generoResponsavel2"
                type="text" />
            </div>
            <div className="mb-10 col-4">
                <label htmlFor="observacaoResponsavel2">Observação - 2º responsável:</label>
                <Field
                placeholder="Observação - 2º responsável"
                className="form-control form-control-solid"
                name="observacaoResponsavel2"
                type="text" />
            </div>
            <button className="btn btn-primary" type="submit">Enviar</button>
            </div>
          </Form>
        </Formik>
    </div>
    )
}