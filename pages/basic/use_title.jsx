import Title from "../../components/title" 
//Por meio do import podemos importar componentes de outros arquivos e usarmos no desejado

export default function useTitle() {
    return (
        <div>
            <Title principal="Pagina de Cadastro" 
            secundario="Incluir, alterar e excluir coisas" 
            pequeno={false}/> //para poder passar valores parar o componente usamos como se fossem atributos html

            <Title principal="Pagina de login" 
            secundario="Informe seu email e senha" 
            pequeno={true}/>
        </div>
    )
}