import { useState } from 'react';
import { Formulario } from "../components/Formulario";
import { ListadoCards } from '../components/ListadoCards';

export const Inicio = () => {

    const [tarjetas, setTarjetas] = useState([]);
    const [persona, setPersona] = useState({});

    return (
        <main className="container">
            <h1>Inicio Dashboard</h1>
            <Formulario 
                setTarjetas={ setTarjetas }
                tarjetas={tarjetas}
            />

            <ListadoCards 
                tarjetas={tarjetas}
            />

            {/* 
                setPersona={setPersona}
                persona={persona}
                setPersona={setPersona}
                persona={persona} 
            */}

        </main>
    );
};
