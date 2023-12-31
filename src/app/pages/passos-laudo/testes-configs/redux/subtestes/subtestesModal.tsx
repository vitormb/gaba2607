import { useSelector } from 'react-redux';
import { RootState } from '../store';

import Modal from 'react-modal';

interface SubtestesModalProps {
    testeId: string;
    onClose: () => void;
    onSubtesteUpdate: (subtesteId: number, newScore: number) => void;
}

export interface Subteste {
  id: number;
  nome: string;
  descricao: string;
  resultado: number;
  testeId: string;
}

export function SubtestesModal({ testeId, onClose, onSubtesteUpdate }: SubtestesModalProps) {
    const teste = useSelector((state: RootState) => state.testes.testes.find(teste => teste.id === testeId));
    const allSubtestes = useSelector((state: RootState) => state.subtestes);
    
    const subtestes = teste 
    ? teste.subtestes
    .map((testeId: string) => allSubtestes.find((subteste: Subteste) => subteste.testeId === testeId))
        .filter(subteste => subteste !== undefined) as Subteste[]
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
            {subtestes.map((subteste: Subteste) => (
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
            ))}
          </tbody>
        </table>
        <button onClick={onClose}>Fechar</button>
      </Modal>
    );
}