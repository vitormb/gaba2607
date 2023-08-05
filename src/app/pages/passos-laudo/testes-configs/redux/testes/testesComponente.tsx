import { useSelector } from 'react-redux';
import { RootState } from '../store'; // Import RootState
import { Teste } from '../testes/testesSlice';

const SelectedTestsList = () => {
  const selectedTests = useSelector((state: RootState) => state.selectedTests);

  return (
    <ul>
      {selectedTests.map((test: Teste) => (
        <li key={test.id}>{test.nome}</li>
      ))}
    </ul>
  );
};