
export const Card = ({persona}) => {
    const { nombre, apellido, id } = persona;
    return (
        <>
            <h1>Persona</h1>
            <h3>ID: {id}</h3>
            <h3>Nombre: { nombre }</h3>
            <h3>Apellido: { apellido }</h3>
        </>
    );
};
