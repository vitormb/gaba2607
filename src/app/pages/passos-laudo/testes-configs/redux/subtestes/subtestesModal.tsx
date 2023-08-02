import { useSelector } from 'react-redux';
import { RootState } from '../store';

import Modal from 'react-modal';

interface SubtestesModalProps {
    testeId: string;
    onClose: () => void;
    onSubtesteUpdate: (subtesteId: string, newScore: number) => void;
}

interface Subteste {
    id: string;
    nome: string;
    descricao: string;
    resultado: number;
}

export function SubtestesModal({ testeId, onClose, onSubtesteUpdate }: SubtestesModalProps) {
    const teste = useSelector((state: RootState) => state.testes.testes.find(teste => teste.id === testeId));
    
    const subtestes = teste 
        ? useSelector((state: RootState) => 
            teste.subtestes
                .map((id: string) => state.subtestes.subtestes.find(subteste => subteste.id === id))
                .filter(Boolean)
                .map((subteste: Subteste) => (
                    <tr key={subteste.id}>
                        <td>{subteste.nome}</td>
                        <td>{subteste.descricao}</td>
                        <td>
                            <input
                                type="number"
                                value={subteste.resultado}
                                onChange={(e) => onSubtesteUpdate(subteste.id, Number(e.target.value))}
                            />
                        </td>
                    </tr>
                ))
        ) 
        : [];

    // Se teste ou subtestes forem undefined, retorne null ou algum componente de fallback
    if (!teste || !subtestes.length) {
        return null; // ou algum componente de fallback
    }

    return (
      <Modal isOpen={true} onRequestClose={onClose}>
        <h1>Subtestes</h1>
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Descrição</th>
              <th>Pontuação</th>
            </tr>
          </thead>
          <tbody>
            {subtestes}
          </tbody>
        </table>
        <button onClick={onClose}>Fechar</button>
      </Modal>
    );
}