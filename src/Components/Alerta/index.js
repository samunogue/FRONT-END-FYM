export const Alerta = ({imagem, texto, funcao, textoBotao}) =>{
    return(
        <div>
            <img src={imagem} />
            <h1>{texto}</h1>
            <button onClick={funcao}>
                {textoBotao}
            </button>
        </div>
    )
}