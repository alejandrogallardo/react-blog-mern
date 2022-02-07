import { Card } from './Card';

export const ListadoCards = ({tarjetas, setPersona}) => {

    console.log(tarjetas.length);
    return (
        <>
            <h2>Listado de Nombre</h2>
            { tarjetas && tarjetas.length ? (
                <>
                    { tarjetas.map( algo => (
                        <Card
                            key={algo.id} 
                            persona={algo}
                        />
                    ))}
                </>
            ) : (
                <h2>No hay personas por el momento</h2>
            )}    
            
        </>
    );
};
