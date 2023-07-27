import React, { FC, useState,useContext, useEffect, useRef } from 'react';
import { Formik, Field, ErrorMessage, useFormikContext, FormikValues } from 'formik';
type ContentType = {
    type: string;
    breakoutBottom?: boolean;
    breakoutTop?: boolean;
    children: { text: string }[];
  }
  export const CheckBoxPasso4: FC = () => {
    const [descricaoSelecionada, setDescricaoSelecionada] = React.useState<string[]>([]);
    const { values, handleChange, setFieldValue } = useFormikContext<FormikValues>();      
    const editorRef = useRef<any>(null);
    const [editorContent, setEditorContent] = useState<{ type: string; children: { text: string; }[]; }[]>([]);
    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedValue = event.currentTarget.value;
        const isChecked = event.currentTarget.checked;
        let updatedDescription;
        if (isChecked) {
            updatedDescription = [...descricaoSelecionada, selectedValue];
        } else {
            updatedDescription = descricaoSelecionada.filter((value) => value !== selectedValue);
        }
        setDescricaoSelecionada(updatedDescription);
    
        // gerando o conteúdo após a atualização de descricaoSelecionada
        const content = getPasso4EditorContent(updatedDescription);
    
        // Agora você tem o 'content' atualizado cada vez que um checkbox é selecionado ou desmarcado.
        // Você pode usar 'content' de acordo com sua necessidade, como salvar em algum lugar ou usá-lo em algum outro componente, etc.
    };
    useEffect(() => {
        const content = getPasso4EditorContent(descricaoSelecionada);
        console.log('Generated content:', content);
        setEditorContent(content);
      }, [descricaoSelecionada]);
    return (
        <EditorValueContext.Provider value={editorContent}>
        <>
            <div className='row mt-10 p-10'>
                <div className="form-check form-check-custom form-check-solid form-check-lg col-6 mb-5">
                    <Field
                        id='cb1'
                        onChange={handleCheckboxChange}
                        className="form-check-input align-middle"
                        type="checkbox"
                        name="checkboxValue"
                        value="Entrevistas de anamnese sobre a queixa cognitiva;"
                        checked={values.checkboxValue}
                    />
                    <label htmlFor='cb1' className="form-check-label align-middle text-gray-800">Entrevistas de anamnese sobre a queixa cognitiva</label>
                </div>
                <div className="form-check form-check-custom form-check-solid form-check-lg col-6 mb-5">
                    <Field
                        id='cb2'
                        onChange={handleCheckboxChange}
                        className="form-check-input align-middle"
                        type="checkbox"
                        value="Discussão do caso com a coordenadora da atual escola;"
                        checked={values.checkboxValue}
                    />
                    <label htmlFor='cb2' className="form-check-label align-middle text-gray-800">Discussão do caso com a coordenadora da atual escola</label>
                </div>
                <div className="form-check form-check-custom form-check-solid form-check-lg col-6 mb-5">
                    <Field
                        onChange={handleCheckboxChange}
                        className="form-check-input align-middle"
                        type="checkbox" checked={values.checkboxValue}
                        value="Discussão do caso com a fisioterapeuta;"
                        id='cb3'
                    />
                    <label htmlFor='cb3' className="form-check-label align-middle text-gray-800">Discussão do caso com a fisioterapeuta</label>
                </div>
                <div className="form-check form-check-custom form-check-solid form-check-lg col-6 mb-5">
                    <Field
                        id='cb4'
                        onChange={handleCheckboxChange}
                        className="form-check-input align-middle"
                        type="checkbox" checked={values.checkboxValue}
                        value="Visita escolar com observação em ambiente acadêmico;"
                    />
                    <label htmlFor='cb4' className="form-check-label align-middle text-gray-800">Visita escolar com observação em ambiente acadêmico</label>
                </div>
                <div className="form-check form-check-custom form-check-solid form-check-lg col-6 mb-5">
                    <Field
                        id='cb5'
                        onChange={handleCheckboxChange}
                        className="form-check-input align-middle"
                        type="checkbox" checked={values.checkboxValue}
                        value="Observação clínica durante as sessões de avaliação;"
                    />
                    <label htmlFor='cb5' className="form-check-label align-middle text-gray-800">Observação clínica durante as sessões de avaliação</label>
                </div>
                <div className="form-check form-check-custom form-check-solid form-check-lg col-6 mb-5">
                    <Field
                        id='cb6'
                        onChange={handleCheckboxChange}
                        className="form-check-input align-middle"
                        type="checkbox" checked={values.checkboxValue}
                        value="Entrevista devolutiva para explicação dos resultados e entrega do laudo;"
                    />
                    <label htmlFor='cb6' className="form-check-label align-middle text-gray-800">Entrevista devolutiva para explicação dos resultados e entrega do laudo</label>
                </div>
                <div className="form-check form-check-custom form-check-solid form-check-lg col-6 mb-5">
                    <Field
                        id='cb7'
                        onChange={handleCheckboxChange}
                        className="form-check-input align-middle"
                        type="checkbox" checked={values.checkboxValue}
                        value="Discussão do caso com a terapeuta ocupacional;"
                    />
                    <label htmlFor='cb7' className="form-check-label align-middle text-gray-800">Discussão do caso com a terapeuta ocupacional</label>
                </div>
                <div className="form-check form-check-custom form-check-solid form-check-lg col-6 mb-5">
                    <Field
                        id='cb8'
                        onChange={handleCheckboxChange}
                        className="form-check-input align-middle"
                        type="checkbox" checked={values.checkboxValue}
                        value="Discussão do caso com a psicopedagoga;"
                    />
                    <label htmlFor='cb8' className="form-check-label align-middle text-gray-800">Discussão do caso com a psicopedagoga</label>
                </div>
                <div className="form-check form-check-custom form-check-solid form-check-lg col-6 mb-5">
                    <Field
                        id='cb9'
                        onChange={handleCheckboxChange}
                        className="form-check-input align-middle"
                        type="checkbox" checked={values.checkboxValue}
                        value="Discussão do caso com a fonoaudióloga;"
                    />
                    <label htmlFor='cb9' className="form-check-label align-middle text-gray-800">Discussão do caso com a fonoaudióloga</label>
                </div>
                <div className="form-check form-check-custom form-check-solid form-check-lg col-6 mb-5">
                    <Field
                        id='cb10'
                        onChange={handleCheckboxChange}
                        className="form-check-input align-middle"
                        type="checkbox" checked={values.checkboxValue}
                        value="Mensuração das funções cognitivas através dos testes e instrumentos listados abaixo;"
                    />
                    <label htmlFor='cb10' className="form-check-label align-middle text-gray-800">Mensuração das funções cognitivas através dos testes e instrumentos listados abaixo</label>
                </div>
                <div className="form-check form-check-custom form-check-solid form-check-lg col-6 mb-5">
                    <Field
                        id='cb11'
                        onChange={handleCheckboxChange}
                        className="form-check-input align-middle"
                        type="checkbox" checked={values.checkboxValue}
                        value="Discussão do caso com o médico do caso;"
                    />
                    <label htmlFor='cb11' className="form-check-label align-middle text-gray-800">Discussão do caso com o médico do caso</label>
                </div>
                <div className="form-check form-check-custom form-check-solid form-check-lg col-6 mb-5">
                    <Field
                        id='cb12'
                        onChange={handleCheckboxChange}
                        className="form-check-input align-middle"
                        type="checkbox" checked={values.checkboxValue}
                        value="Entrevista de anamnese;"
                    />
                    <label htmlFor='cb12' className="form-check-label align-middle text-gray-800">Entrevista de anamnese</label>
                </div>
                <div className="form-check form-check-custom form-check-solid form-check-lg col-6 mb-5">
                    <Field
                        id='cb13'
                        onChange={handleCheckboxChange}
                        className="form-check-input align-middle"
                        type="checkbox" checked={values.checkboxValue}
                        value="Discussão do caso com a psicoterapeuta;"
                    />
                    <label htmlFor='cb13' className="form-check-label align-middle text-gray-800">Discussão do caso com a psicoterapeuta</label>
                </div>
                <div className="form-check form-check-custom form-check-solid form-check-lg col-6 mb-5">
                    <Field
                        id='cb14'
                        onChange={handleCheckboxChange}
                        className="form-check-input align-middle"
                        type="checkbox" checked={values.checkboxValue}
                        value="Análise dos dados clínicos, como exames e relatórios;"
                    />
                    <label htmlFor='cb14' className="form-check-label align-middle text-gray-800">Análise dos dados clínicos, como exames e relatórios</label>
                </div>
                <div className="form-check form-check-custom form-check-solid form-check-lg col-6 mb-5">
                    <Field
                        id='cb15'
                        onChange={handleCheckboxChange}
                        className="form-check-input align-middle"
                        type="checkbox" checked={values.checkboxValue}
                        value="Sessão lúdica;"
                    />
                    <label htmlFor='cb15' className="form-check-label align-middle text-gray-800">Sessão lúdica</label>
                </div>
                <div className="form-check form-check-custom form-check-solid form-check-lg col-6 mb-5">
                    <Field
                        id='cb16'
                        onChange={handleCheckboxChange}
                        className="form-check-input align-middle"
                        type="checkbox" checked={values.checkboxValue}
                        value="Entrevista com familiar;"
                    />
                    <label htmlFor='cb16' className="form-check-label align-middle text-gray-800">Entrevista com familiar</label>
                </div>
                <p>Valores selecionados: {descricaoSelecionada.join(', ')}</p>
                <Selecoes selecoes={descricaoSelecionada} />
            </div>
            {/* Outros elementos de checkbox */}
        </>
        </EditorValueContext.Provider>
    )
}

export const Selecoes: FC<{selecoes: string[]}> = ({selecoes}) => {
    const editorContent = useContext(EditorValueContext);
    useEffect(() => {
        // Faça algo com o conteúdo aqui
    }, [editorContent]); 

    return null; 
};

export const getPasso4EditorContent = (selecoes: string[]) => {
    // Inicia com os parágrafos vazios
    let content = [
        { type: "paragraph", children: [{ text: "" }] },       
    ];

    // Adiciona um parágrafo para cada seleção
    for (let selecao of selecoes) {
        content.push({ type: "paragraph", children: [{ text: selecao }] });
    }

    return content;
};

export const EditorValueContext = React.createContext<{ type: string; children: { text: string; }[]; }[]>([]);