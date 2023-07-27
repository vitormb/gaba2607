import React, { useState, useEffect } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const API_KEY = "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"; // secure -> environment variable

function AIGaba() {
    const [pergunta, setPergunta] = useState("");
    const [response, setResponse] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    let editorInstanceRef: ClassicEditor | null = null;

    function buildCompositeText() {
        const nomeInput = document.querySelector('input[name="nome"]') as HTMLInputElement | null;
        const idadeInput = document.querySelector('input[name="idade"]') as HTMLInputElement | null;
        const queixasInput = document.querySelector('input[name="queixas"]') as HTMLInputElement | null;
        const select = document.querySelector('select') as HTMLSelectElement | null;
      
        const nome = nomeInput ? nomeInput.value : "";
        const idade = idadeInput ? idadeInput.value : "";
        const queixas = queixasInput ? queixasInput.value : "";
        const selectValue = select ? select.value : "";
      
        const checkboxValues = Array.from(document.querySelectorAll('.checkbox:checked')).map(checkbox => (checkbox as HTMLInputElement).value);
      
        const compositeText = `O paciente ${nome}, possui ${idade} anos e registrou as seguintes queixas: ${queixas}, também nos informou que segue em tratamento para ${checkboxValues.join(', ')}\n\n`
        
        return compositeText;
      }

    useEffect(() => {
        if (editorInstanceRef && response !== "") {
            editorInstanceRef.setData(response);
        }
    }, [editorInstanceRef, response]);

    async function callOpenAIAPI() {
        console.log("Calling the OpenAI API");

        const APIBody = {
            "prompt":
                "Considere que você possui uma bagagem profunda em psicologia e neurociência. Você é capaz de produzir e analizar laudos neuropsicológicos e está disponível para responder dúvidas em relação as etapas de produção de um projeto de publicações de laudos neuropsicológicos. A partir das proximas perguntas, responda de forma breve, gentil, analítica e usando de um vocabulário amigável. A respeito de dados neuropsicológicos que estejam contidos no escopo de laudos neuropsicológicos, evitando responder perguntas fora deste escopo. Não precisa se apresentar ou dizer sua experiência, produza uma resposta direta a questão a seguir:"
                + pergunta + "com base nestas ponderações, gere uma introdução para Anamnese apresentando o paciente e suas condições relatadas\nA:",
            "temperature": 1.0,
            "max_tokens": 1500,
            "top_p": 1,
            "n": 1,
            "stop": "\n"
        };
        console.log(APIBody);
        setIsLoading(true);

        await fetch("https://api.openai.com/v1/engines/davinci/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + API_KEY
            },
            body: JSON.stringify(APIBody)
        })
            .then((data) => data.json())
            .then((data) => {
                console.log(data);
                setResponse(data.choices[0].text.trim());
                setIsLoading(false);
            })
            .catch((error) => {
                console.error("Error:", error);
                setIsLoading(false);
            });
    }

    console.log(pergunta);    

    return (
        <div className="App">
            <div className="form-group">
                <input className="form-control text-black" type="text" name="nome" />
                <input className="form-control text-black" type="text" name="idade" />
                <input className="form-control text-black" type="text" name="queixas" />
                <select className="form-control text-black">
                    <option value="Produza uma Anaminese">Anamnese</option>
                    <option value="Produza uma Introdução">Introdução</option>
                </select>
                <div className="form-check">
                    <input className="form-check-input checkbox" type="checkbox" value="Depressão" id="depressao" />
                    <label className="form-check-label" htmlFor="depressao">
                        Depressão
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input checkbox" type="checkbox" value="Alegria" id="alegria" />
                    <label className="form-check-label" htmlFor="alegria">
                        Alegria
                    </label>
                </div>
                <button onClick={() => setPergunta(buildCompositeText())} className="btn btn-primary" type="submit">Montar conteúdo</button>
            </div>

            <div>
                <textarea     
                    className='form-control form-control form-control-solid'   
                    value={buildCompositeText()}      
                    onChange={(e) => setPergunta(e.target.value)}
                    placeholder="Digite sua pergunta aqui!"                    
                />
            </div>

            <button onClick={callOpenAIAPI}>Obter resposta da IA</button>
            <div className='text-black'>
                {isLoading && <p>Carregando...</p>}
                <CKEditor
                    editor={ClassicEditor}
                    data={response}
                    onReady={(editor) => {
                        editorInstanceRef = editor;
                    }}
                    onChange={(event, editor) => {
                        const data = editor.getData();
                        setResponse(data);
                    }}
                />
            </div>

        </div>
    );
}

export default AIGaba;