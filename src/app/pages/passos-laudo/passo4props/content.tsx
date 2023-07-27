import { useEffect, useState, FC} from 'react';
import { getPasso4EditorContent } from './checkboxes';

export const Selecoes: FC<{selecoes: string[]}> = ({selecoes}) => {
    const [dataselecionada, setDataselecionada] = useState([selecoes]);
    useEffect(() => {
        const content = getPasso4EditorContent(selecoes);        
        console.log('mynewcontent',content);
        // Faça algo com o conteúdo aqui
    }, [selecoes]); // este useEffect será chamado sempre que 'selecoes' mudar

    return null; // renderize aqui o que você quiser
};