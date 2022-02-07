import { useState } from "react";

export const Formulario = ({ tarjetas, setTarjetas }) => {
    
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');

    const generarId = () => {
        const random = Math.random().toString(36).substr(2);
        const fecha = Date.now().toString(36)
        return random + fecha
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const objetoTarjeta = {
            nombre,
            apellido
        }

        console.log('Nombre: ', objetoTarjeta);

        objetoTarjeta.id = generarId();

        setTarjetas([...tarjetas, objetoTarjeta]);

        setNombre('')
        setApellido('')
    }

    return (
        <>
            <h1>Formulario</h1>

            <p>{nombre}</p>

            <form onSubmit={handleSubmit}>

                <label htmlFor="nombre">Nombre</label>
                <input 
                    type="text" 
                    id="nombre"
                    value={nombre}
                    onChange={ (e) => setNombre(e.target.value) }
                />
                
                <label htmlFor="apellido">Apellido</label>
                <input 
                    type="text" 
                    id="apellido"
                    value={apellido}
                    onChange={ (e) => setApellido(e.target.value) }
                />
                
                <input
                    type="submit"
                />
            </form>
        </>
    );
};
