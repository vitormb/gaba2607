import React, { useMemo, useState, useEffect, useRef } from 'react';
import { createEditor, Transforms, Text, Element as SlateElement, Descendant, Path } from 'slate';
import { Editor as SlateEditor } from 'slate';
import { Slate, Editable, withReact } from 'slate-react';
import AIGabaSteps, { IAProps } from '../AI/AIelementRequest';
import {
  Node, Editor, isAtEndOfNode, EditorKit, Plugin, BoldPlugin, ItalicPlugin, BoldButton, ItalicButton, UnderlinePlugin, StrikethroughPlugin, OrderedListButton, UnorderedListButton,
  HeadingToggleButton, BlockquoteButton, TableButton, LinkPlugin, InlineCodePlugin, OrderedListPlugin, UnorderedListPlugin, BlockquotePlugin, H1Plugin, H2Plugin,
  H3Plugin, SuperscriptPlugin, TablePlugin, CodePlugin, HeadingSelect, FontSizeSelect, FontSelect, ColorPlugin, FontsPlugin, Divider, TextAlignLeftButton, TextAlignRightButton,
  TextAlignCenterButton, TextAlignJustifiedButton, ColorPickerButton, HistoryPlugin, ClearFormattingButton, DividerPlugin, createBreakoutPlugin, SelectionToolbar, ConstraintsPlugin,
  SelectionToolbarPlugin, EditorToolbar, EditorToolbarPlugin, SubscriptPlugin, TextAlignPlugin, ImagePlugin, InfoAlertPlugin, ErrorAlertPlugin, WarningAlertPlugin, createInitialLetterPlugin,
  createClearFormattingPlugin, IconButton, HeadingTogglePlugin, EditorProps
} from "@mpkelly/react-editor-kit";
import { DarkThemePlugin } from "./DarkThemePlugin";
import { InsertContextMenuPlugin } from "./InsertContextMenuPlugin";
import { FormatContextMenuPlugin } from "./FormatContextMenuPlugin";

// You will normally need at least one plugin like this below to override CSS
// Most colors can be set as variables.
// See https://github.com/mpkelly/react-editor-kit/blob/master/packages/editor-kit/src/features/theme/DefaultThemePlugin.ts
const AdditionalStyles: Plugin = {
  name: "kitchen-sink-styles",
  globalStyle: `
    :root {
      --action-color:#408CF4;
      --focus-color:#408CF4;
      --editor-ui-font:'Source Sans Pro', sans-serif;
    }
    //not needed in latest version of react-editor-kit
    .rek-icon-button {
      color:var(--primary-text-color);
    }
  `,
  editorStyle: `
    overflow-x:hidden;
    overflow-y:auto;
    font-size:18px;
    font-family: 'Source Sans Pro', sans-serif;

    blockquote {
      border-left-color: var(--action-color);
    }
    
    .rek-resizable {
      margin: 0 auto;
    }
  `
};

const plugins: Plugin[] = [
  BoldPlugin, ItalicPlugin, UnderlinePlugin, StrikethroughPlugin, BlockquotePlugin, H1Plugin, H2Plugin, H3Plugin, SuperscriptPlugin, SubscriptPlugin, OrderedListPlugin,
  UnorderedListPlugin, TablePlugin, CodePlugin, ColorPlugin, FontsPlugin, createBreakoutPlugin(), DividerPlugin, HistoryPlugin, ConstraintsPlugin, EditorToolbarPlugin,
  TextAlignPlugin, ImagePlugin, InfoAlertPlugin, WarningAlertPlugin, InlineCodePlugin, LinkPlugin, SelectionToolbar, SelectionToolbarPlugin, ErrorAlertPlugin, AdditionalStyles,
  DarkThemePlugin, createClearFormattingPlugin(), createInitialLetterPlugin(), InsertContextMenuPlugin, FormatContextMenuPlugin, HeadingTogglePlugin];

const editorStyle = {
  width: "100%", height: "100%", padding: 0, overflow: "auto", color: "var(--bs-stepper-label-title-color)"
};

const editorWrapperStyle = {
  width: "100%", height: "100%", display: "flex", justifyContent: "center", overflow: "hidden", background: "var(--bs-gray-100)"
};
type KitchenSinkEditorProps = {
  pacienteData: PacienteData;
  content: any; // substitua 'any' pelo tipo correto
  setFieldValue: () => void;
  pacienteDataContent: any; // substitua 'any' pelo tipo correto
};
interface PacienteData {
  id: number;
  nome: string;
  idade: number;
  genero: string;
  nomeCompleto: string; // adicionar propriedade
  dataNascimento: string; // adicionar propriedade
}

const CustomColors = [
  ["#F78DA7", "#CF2E2E", "#FC6901", "#FCB901", "#7BDCB5", "#28D084"],
  ["#8ED1FC", "#0993E3", "#9B51E0", "#FFFFFF", "#ABB8C3", "#2B2B3E"]
];

/*
Custom props da AI

/* Editor bkp callings */

export const KitchenSinkEditor = (props: KitchenSinkEditorProps) => {

  const editor = useMemo(() => withReact(createEditor()), []);
  const { pacienteData, content, setFieldValue } = props;
  const [value, setValue] = useState<Node[]>(content);  
  const [buttonText, setButtonText] = useState("Solicitar para AI");  
  const [pergunta, setPergunta] = useState('');
  const [resposta, setResposta] = useState('');
  const [isLoading, setIsLoading] = useState(false);  
  const [editorContent, setEditorContent] = useState(pacienteDataContent);
  const handleAddText = (text:any) => {
    console.log('aaaaa')
    return {
      children: [{ text }]
    };
  };

  const handleValueChange = (value:any) => {
    console.log(JSON.stringify(value));
    console.log('valorfinal::', value);
    setValue(value);
    props.setFieldValue('content', value); // updates the Formik field
  };

  const handleAIGabaClick = async () => {
    try {
      setIsLoading(true);

      const API_KEY = "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"; // secure -> environment variable
      const APIBody = {
        "prompt": pergunta + "\nA:",
        "temperature": 0.9,
        "max_tokens": 1500,
        "top_p": 1,
        "n": 1,
        "stop": "\n"
      };

      // Rest of the code for the request to AI Gaba...
      const apiResponse: Response = await fetch("https://api.openai.com/v1/engines/davinci/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + API_KEY
        },
        body: JSON.stringify(APIBody)
      });

      const data = await apiResponse.json();

      // Call the function to add the answer to the editor after the request is completed
      if (editor) {
        setIsLoading(false);
        setResposta(data.choices[0].text.trim());
        setButtonText("Criar novamente");
        addRespostaToEditor(editor, data.choices[0].text.trim());
      }

    } catch (error) {
      console.error("Error:", error);
      setIsLoading(false);
    }
  }; 

  const handlePerguntaChange = (newContent: string) => {
    setPergunta(newContent);
  };

  const handleSelectChange = (newPergunta: string) => {
    setPergunta(newPergunta);
    // Remova a próxima linha se a resposta não precisa ser igual à pergunta
    setResposta(newPergunta);
  };

  const handleRespostaChange = (newResposta: string) => {
    setResposta(newResposta);
  };



  function addRespostaToEditor(editor: SlateEditor, text: string) { 
    if (editor.children && editor.children.length > 0) {
        const point = SlateEditor.end(editor, [editor.children.length - 1]);
        Transforms.insertText(editor, text, { at: point });
    } else if(editor.children) { 
        Transforms.insertNodes(editor, [{
          children: [{ text: text }],
        }]);
    }
    else {
        // editor.children does not exist, handle appropriately.
        // For example, you might initialize the editor here:
        editor.children = [{ children: [{ text: "" }] }];
        Transforms.insertNodes(editor, [{
          children: [{ text: text }],
        }]);
    }
}

const pacienteDataToObject = (data: any) => {
  // Transforma o objeto em um array de pares chave/valor
  const entries = Object.entries(data);

  // Cria uma string contendo todas as entradas, separadas por vírgulas
  const text = entries.map(([key, value], index) => {
    // Adiciona uma vírgula após o valor se não for o último item no array
    const comma = index !== entries.length - 1 ? ', ' : '';

    return `${key}: ${value}${comma}`;
  }).join('');

  // Retorna um único objeto de parágrafo contendo todas as entradas
  return [{
    type: 'paragraph',
    breakoutTop: true,
    breakoutBottom: false,
    children: [{ text }],
  }];
};

useEffect(() => {
  setValue(pacienteDataToObject(pacienteData));
}, []);

const [newValue, setNewValue] = useState<Node[]>(content); // substituí 'transformValue(content)' por 'content'

const onChange = (value:any) => {
  // Separa os dados do paciente dos dados que o usuário pode editar
  const patientData = pacienteDataToObject(pacienteData);
  const editableData = value.slice(patientData.length);

  setNewValue(editableData);
  console.log('console:',patientData);
};

  return (
    <div>
      <>
    <div className="content-flex">
      <div className="modal fade bg-blur" tabIndex={-1} id="modalAI">
        <div className="modal-dialog modal-dialog-centered mw-900px">
          <div className="modal-content shadow p-5">
            <div className="modal-header">
              <h2 className="modal-title"><b className='text-primary fs-3x'>GABA-AI</b><br />Assistente Digital<br /></h2>
              <div
                className="btn btn-icon btn-sm btn-active-light-danger ms-2"
                data-bs-dismiss="modal"
              >
                <i className="bi bi-x-square-fill fs-1 text-danger"></i>
              </div>
            </div>
            <div className="modal-body">
              <div className='modalAI'>
                <div className='content-flex'>
                  <h5 className='mb-5'>Selecione um padrão:</h5>
                  <div className='row justify-content-between'>
                    <div className='col'>
                      <select
                        className='form-select form-select-solid mb-5'
                        aria-label="Selecione um padrão"
                        name="introducaoai"
                        id="introducaoai"
                        onChange={(e) => handleSelectChange(e.target.value)}>
                        <option value='Segundo o Código de Ética Profissional do Psicólogo, artigo 1 "g" e "h" é um dever do Psicólogo: “Informar, a quem de direito, os resultados decorrentes da prestação de serviços psicológicos, transmitindo somente o que for necessário para a tomada de decisões que afetem o usuário ou beneficiário”;  e, “orientar a quem de direito sobre os encaminhamentos apropriados, a partir da prestação de serviços psicológicos, e fornecer, sempre que solicitado, os documentos pertinentes ao bom termo do trabalho”.'>
                          Introdução 1
                          </option>
                        <option value="Introdução base 2, com nome do paciente aqui.">Introdução 2</option>
                        <option value="Introdução base 3, com nome do paciente aqui.">Introdução 3</option>
                        <option value="Introdução base 4, com nome do paciente aqui.">Introdução 4</option>
                      </select>
                    </div>
                    <div className='col-auto me-auto'>
                    <button
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target="#modalAI"
                        className='btn btn-info btn-pulse-ai me-2'
                        onClick={handleAIGabaClick}
                      >
                        <i className="bi bi-magic"></i>
                        {buttonText}
                      </button>
                    </div>

                    <div className="rounded border d-flex flex-column p-5">
                      <label htmlFor="perguntaTOP" className="form-label">Conteúdo sugerido:</label>
                      <textarea
                        disabled
                        id='perguntaTOP'
                        value={resposta}
                        onChange={(e) => handlePerguntaChange(e.target.value)}
                        className="form-control form-control form-control-solid"
                        data-kt-autosize="true"></textarea>
                    </div>
                  </div>
                </div>

                <div className='bg-secondary hide p-5 d-none'>
                  <AIGabaSteps
                    resposta={resposta}
                    pergunta={pergunta}
                    onPerguntaChange={handlePerguntaChange}
                    onRespostaChange={handleRespostaChange}                    
                  />
                </div>

              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-light"
                data-bs-dismiss="modal"
              >
                Fechar
              </button>
              <button
              type="button"
              className='btn btn-primary me-2'
              onClick={() => handleAddText(resposta)}
              data-bs-dismiss="modal"
            >
              <i className="bi bi-magic"></i>
              Adicionar texto
            </button>
            </div>
          </div>
        </div>
      </div>      
    </div>
    </>
    <EditorKit plugins={plugins}>
      <div className="d-flex align-items-center flex-column w-100 h-100">
        <EditorToolbar>
          <HeadingSelect />
          <Divider />
          <FontSelect />
          <Divider />
          <FontSizeSelect />
          <Divider />
          <BoldButton
            className="material-icons-round"
            ligature="format_bold"
            tooltipText={"Ctrl+B"}
            tooltipOffsets={{ v: 8 }}
          />
          <ItalicButton
            className="material-icons-round"
            ligature="format_italic"
            tooltipText={"Ctrl+I"}
            tooltipOffsets={{ v: 8 }}
          />                              
          <Divider />
          <ColorPickerButton
            className="material-icons-round"
            ligature="palette"
            colors={CustomColors}
          />
          <Divider />
          <TextAlignLeftButton
            className="material-icons-round"
            ligature="format_align_left"
          />
          <TextAlignCenterButton
            className="material-icons-round"
            ligature="format_align_center"
          />
          <TextAlignRightButton
            className="material-icons-round"
            ligature="format_align_right"
          />
          <TextAlignJustifiedButton
            className="material-icons-round"
            ligature="format_align_justify"
          />
          <Divider />
          <OrderedListButton
            className="material-icons-round"
            ligature="format_list_numbered"
          />
          <UnorderedListButton
            className="material-icons-round"
            ligature="format_list_bulleted"
          />
          <Divider />
          <HeadingToggleButton
            className="material-icons-round"
            ligature="format_size"
          />
          <BlockquoteButton
            className="material-icons-round"
            ligature="format_quote"
          />
          <TableButton className="material-icons-round" ligature="border_all" />          
          <Divider />
          <ClearFormattingButton
            className="material-icons-round"
            ligature="format_clear"
          />
          <IconButton
            className=" material-icons-round"
            ligature={"print"}
            tooltipText={"Imprimir"}
            tooltipOffsets={{ v: 8 }}
          />
        </EditorToolbar>
        <SelectionToolbar>
          <BoldButton className="material-icons-round" ligature="format_bold" />
          <ItalicButton
            className="material-icons-round"
            ligature="format_italic"
          />                    
        </SelectionToolbar>
        <div style={editorWrapperStyle} id="editor">
        <Editor
          value={[...pacienteDataToObject(pacienteData), ...newValue]}
          onChange={onChange}
          style={editorStyle}
          placeholder={"Digite o conteúdo do paciente"}
          autoFocus
        />
        </div>
        <button 
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#modalAI"
          className='btn btn-info btn-pulse-ai me-2'
        >
          <i className="bi bi-magic"></i>
          AI Gaba
        </button>
      </div>
    </EditorKit>    
    </div>
  );
};

const initialValue = KitchenSinkEditor;