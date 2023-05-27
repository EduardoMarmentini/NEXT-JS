export default function Title(props) {
    return props.pequeno ? (

            <> // Apos ser passado o valor que queremos via atributo podemos usa-lo acessando pelo nome dele
                <p>{props.principal}</p>
                <p>{props.secundario}</p> 
            </>
        
    ) : ( 
            <> // Apos ser passado o valor que queremos via atributo podemos usa-lo acessando pelo nome dele
                <h1>{props.principal}</h1>
                <h2>{props.secundario}</h2> 
            </>
        
    )
        

}