import React, { useMemo, useState, useEffect, useRef } from 'react';
import { createEditor, Editor, Transforms, Text, Element as SlateElement, Descendant, Node, Path } from 'slate';
import { Slate, Editable, withReact } from 'slate-react';
import AIGabaSteps, { IAProps } from '../AI/AIelementRequest';

/* Editor bkp callings */
interface EditorMainProps {
  children?: React.ReactNode; // Add the children prop
  initialValue: Descendant[];
  onChange: (value: Descendant[]) => void;
  respostaEditor: string;
}
interface CustomText extends Text {
  [key: string]: any;
}

interface CustomMark {
  [key: string]: any;
}

enum BlockFormats {
  Bold = 'bold',
  Italic = 'italic',
  Underline = 'underline',
  Code = 'code',
  BlockQuote = 'block-quote',
  NumberedList = 'numbered-list',
  BulletedList = 'bulleted-list',
  AlignLeft = 'align-left',
  AlignCenter = 'align-center',
  AlignRight = 'align-right',
  AlignJustify = 'align-justify',
  Paragraph = 'paragraph', // Adicionado o valor 'paragraph' ao enum
  TextGeral = 'text-geral', // Adicionado o valor 'text-geral' ao enum
}

interface CustomElement extends SlateElement {
  type?: BlockFormats;
}

const EditorMain: React.FC<EditorMainProps> = ({ initialValue, onChange }) => {
  const editor = useMemo(() => withReact(createEditor()), []);
  const [value, setValue] = useState<Descendant[]>(initialValue); // Use a separate state for the editor value
  const [focusPoint, setFocusPoint] = useState<null | Range | DOMRect>(null);
  const editorRef = useRef<Editor | null>(null);

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  const handleFocus = () => {
    // Atualize o ponto de foco ao receber um evento de foco no editor
    if (editorRef.current && editor.children && editor.children.length > 0 && window.getSelection) {
      const domSelection = window.getSelection();
      if (domSelection && domSelection.rangeCount > 0) {
        setFocusPoint(domSelection.getRangeAt(0).cloneRange());
      }
    }
  };

  const [buttonText, setButtonText] = useState("Solicitar para AI");  

  // const [value, setValue] = useState<Descendant[]>(initialValue);

  const toggleBlock = (format: BlockFormats) => {
    if (!editor.selection) return;
    type MatchFunction = (node: Node, path: Path) => boolean;
    const isActive = isBlockActive(format);
    if (isActive) {
      Transforms.unwrapNodes(editor, {
        match: (n: Node) => SlateElement.isElement(n) && (n as CustomElement).type === format,
        split: true,
      });
    }else {
      if (format === BlockFormats.NumberedList || format === BlockFormats.BulletedList) {
        const block: CustomElement = { type: format, children: [] };
        Transforms.wrapNodes(editor, block);
      } else {
        const path = Editor.path(editor, editor.selection);
        Transforms.setNodes<CustomElement>(editor, { type: format }, { at: path });
      }
    }
  };

  const isBlockActive = (format: BlockFormats) => {
    if (!editor.selection) return false;
  
    const [match] = Editor.nodes(editor, {
      at: editor.selection,
      match: (n) => SlateElement.isElement(n) && (n as CustomElement).type === format,
    });
  
    return !!match;
  };
  
  const [pergunta, setPergunta] = useState('');
  const [resposta, setResposta] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    console.log('resposta da requisicao:', resposta);
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

  const addRespostaToEditor = () => {
    if (resposta.trim() !== '') {
      Transforms.insertText(editor, resposta);
    }
  };

  const handleChange = (newValue: Descendant[]) => {
    setValue(newValue);
    // Call the onChange prop to handle the editor value changes in the parent component
    onChange(newValue);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' && event.shiftKey) {
      event.preventDefault();
      Transforms.insertText(editor, '\n');
    }
  };

  const isMarkActive = (format: string): boolean => {
    const marks = Editor.marks(editor) as CustomMark;
    return marks ? !!marks[format] : false;
  };

  const toggleMark = (format: string) => {
    const isActive = isMarkActive(format);
  
    if (isActive) {
      Editor.removeMark(editor, format);
    } else {
      Editor.addMark(editor, format, true);
    }
  };

  const renderElement = (props: any): JSX.Element => {
    const { element } = props;
    const format = element.type as BlockFormats;

    switch (format) {
      case BlockFormats.Paragraph:
        return <p {...props.attributes}>{props.children}</p>;
      case BlockFormats.TextGeral:
        return <span className="text-geral">{props.children}</span>;
      default:
        return <p {...props.attributes}>{props.children}</p>;
    }
  };

  const renderLeaf = (props: any): JSX.Element => {
    const leaf = props.leaf as CustomText;
  
    return (
      <span
        {...props.attributes}
        style={{
          fontWeight: leaf.bold ? 'bold' : 'normal',
          fontStyle: leaf.italic ? 'italic' : 'normal',
          textDecoration: leaf.underline ? 'underline' : 'none',
        }}
      >
        {props.children}
      </span>
    );
  };

  const handleAddText = () => {
    if (!editor) return;
    addRespostaToEditor();
  };


  const handleAIGabaClick = async () => {
    try {
      setIsLoading(true);
      // Aguarda 5 segundos antes de mostrar o modal novamente
      setTimeout(() => alert('Carregou'), 5000);

      const API_KEY = "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"; // secure -> environment variable
      const APIBody = {
        "prompt": pergunta + "\nA:",
        "temperature": 0.9,
        "max_tokens": 1500,
        "top_p": 1,
        "n": 1,
        "stop": "\n"
      };

      // Restante do código para a requisição ao AI Gaba...
      const apiResponse: Response = await fetch("https://api.openai.com/v1/engines/davinci/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + API_KEY
        },
        body: JSON.stringify(APIBody)
      });

      const data = await apiResponse.json();

      // Chama a função para adicionar a resposta ao editor após a requisição ser concluída
      if (editor) {
        setIsLoading(false);
        setResposta(data.choices[0].text.trim());
        setButtonText("Criar novamente");
        addRespostaToEditor();
      }

    } catch (error) {
      console.error("Error:", error);
      setIsLoading(false);
    }
  };

  return (
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
                        <option value="Introdução base, com nome do paciente aqui.">Introdução 1</option>
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
              onClick={handleAddText}
              data-bs-dismiss="modal"
            >
              <i className="bi bi-magic"></i>
              Adicionar texto
            </button>
            </div>
          </div>
        </div>
      </div>

      <Slate editor={editor} initialValue={value} onChange={handleChange}>
        <div className='bg-light-secondary rounded border'>
          <div className='bg-light-dark border-gray-700 p-2'>
            <div className="row justify-content-between">
              <div className='col-auto'>
              {Object.values(BlockFormats).map((format) => (
                  <button
                    key={format}
                    type='button'
                    className={`btn btn-dark me-2 ${isBlockActive(format) ? 'active' : ''}`}
                    onClick={() => toggleBlock(format)}
                  >
                    {format}
                  </button>
                ))}
              </div>
              <div className='col-auto'>
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
            </div>
          </div>
          <div className='p-5'>              
              <div onFocus={handleFocus}>
                <Editable
                  renderElement={renderElement}
                  renderLeaf={renderLeaf}
                  onKeyDown={handleKeyDown}
                />
              </div>
            </div>
        </div>
      </Slate>
    </div>
    </>
  );
};

export default EditorMain;
/* Editor bkp callings fim */