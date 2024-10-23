import { useState } from 'react';
import '../components/ListaDeTarefas.css'

function ListaDeTarefas() {
    const [tarefas, setTarefas] = useState([]);
    const [novaTarefa, setNovaTarefa] = useState('');
    const [erro, setErro] = useState('');

    const adicionarTarefa = () => {
        const tarefaTrimmed = novaTarefa.trim();
        
        if (tarefaTrimmed === '') {
            setErro('A tarefa não pode estar vazia.');
            return;
        }

        if (tarefas.includes(tarefaTrimmed)) {
            setErro('A tarefa já existe na lista.');
            return;
        }

        setTarefas([...tarefas, tarefaTrimmed]);
        setNovaTarefa('');
        setErro(''); // Limpa a mensagem de erro após a adição bem-sucedida
    };

    const removerTarefa = (index) => {
        const novasTarefas = [...tarefas];
        novasTarefas.splice(index, 1);
        setTarefas(novasTarefas);
    };

    return (
       <>
       <section>
            <h2>Lista de Tarefas</h2>
            <input
                type="text"
                value={novaTarefa}
                onChange={(e) => setNovaTarefa(e.target.value)}
                placeholder="Adicione uma nova tarefa"
            />
            <button onClick={adicionarTarefa}>Adicionar</button>
            
            {erro && <p style={{ color: 'red' }}>{erro}</p>}

            {tarefas.length === 0 ? (
                <p>Nenhuma tarefa adicionada.</p>
            ) : (
                <ul>
                    {tarefas.map((tarefa, index) => (
                        <li key={index}>
                            {tarefa}{' '}
                            <button onClick={() => removerTarefa(index)}>Remover</button>
                        </li>
                    ))}
                </ul>
            )}
            </section>
        </>
    );
}

export default ListaDeTarefas;