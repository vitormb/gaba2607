import React, { useState, useEffect } from 'react';

const API_KEY = "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"; // secure -> environment variable

export interface IAProps {
  resposta: string;
  pergunta: string;
  onPerguntaChange: (pergunta: string) => void;
  onRespostaChange: (resposta: string) => void;  
}

interface AIGabaStepsProps extends IAProps { }

export function AIGabaSteps({
  resposta,
  pergunta,
  onPerguntaChange,
  onRespostaChange,  
}: AIGabaStepsProps) {
  const [isLoading, setIsLoading] = useState(false);

  // Função callOpenAIAPI movida para o EditorMain

  useEffect(() => {
    onPerguntaChange(pergunta);
    onRespostaChange(resposta); // Chame a função onRespostaChange quando a resposta for atualizada
  }, [pergunta, resposta]);

  return (
    <div className="App">
      {/* Remove o botão "AI Gaba" daqui */}
      <div>
        Pergunta: {pergunta}
      </div>
      <div>
        Resposta: {resposta}
      </div>
    </div>
  );
}

export default AIGabaSteps;