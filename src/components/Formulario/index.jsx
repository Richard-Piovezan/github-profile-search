import { useState, useEffect } from "react";

const Formulario = () => {
    const [nome, setNome] = useState('');
    const [materiaA, setMateriaA] = useState(0);
    const [materiaB, setMateriaB] = useState(0);
    const [materiaC, setMateriaC] = useState(0);

    useEffect( () => {
        console.log("Componente inicializado");

        return () => {
            console.log("Componente finalizado")
        }
    }, [])

    useEffect(() => {
        console.log('O estado nome foi alterado.');
    }, [nome])

    const alteraNome = (e) => {
        setNome(estadoAnterior => {
            return e.target.value;
        })
    }

    const renderizaResultado = () => {
        const media = (materiaA + materiaB + materiaC) / 3
        
        if (media >= 7) {
            return (
                <p>Olá {nome}, você foi aprovado com média de {Math.floor(media)}. Parabéns!</p>
            )
        } else {
            return (
                <p>
                    Olá {nome}, você se encontra em fase de recuperação por ter atingido {Math.floor(media)}. Boa sorte nessa reta final!
                </p>
            )
        }
    }

    return (
        <form>
            <ul>
                {[1, 2, 3, 4, 5].map(item => (
                    <li key={item}>{item}</li>
            ))}
            </ul>

            <input type="text" placeholder="Digite seu nome" onChange={alteraNome}/>
            <input type="number" placeholder="Nota matéria A" onChange={e => setMateriaA(parseInt(e.target.value))} />
            <input type="number" placeholder="Nota matéria B" onChange={e => setMateriaB(parseInt(e.target.value))} />
            <input type="number" placeholder="Nota matéria C" onChange={e => setMateriaC(parseInt(e.target.value))} />
            {renderizaResultado()}
        </form>
    )
}

export default Formulario;