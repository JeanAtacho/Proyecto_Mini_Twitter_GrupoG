function home(props) {
    return (
    
        <div className='contenedor-home'>
                 <div className='contenedor-texto-testimonio'>
                <p className='email-home'>
                   <strong>{props.nombre}</strong> {props.nombre} en {props.pais}
                </p>
                <p className='imagen-home'>
                    {props.cargo} en <strong>{props.empresa}</strong>
                    </p>
                <p className='texto-home'> "{props.texto}" </p>
            </div>
        </div>
    ) 
}