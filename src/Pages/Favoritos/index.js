import './style.css';
export const FavoritosSection = ({user}) =>{
    const favoritos = user.favoritos
    return(
        <main className="page-favoritos">
                <h1 className="titulo-page-favoritos">Meus Favoritos</h1>
                {favoritos.map(item =>
                <div className='card-musico-favoritos'>
                    <div className='box-titulo-card-favoritos'>
                        <h1 className='nome-card-favoritos'>{item.nomeCompleto}</h1>
                        <h2 className='nota-card-favoritos'>{item.nota} ⭐</h2>
                    </div>
                    <h3 className='descricao-card-favoritos'>{item.descricao}</h3>
                    <div className='box-generos-button-card-favoritos'>
                        <div className='box-generos-card-favoritos'>
                        {item.generos.map(genero =>
                            <p className='genero-card-favoritos'>{genero}</p>
                        )}
                        </div>
                        <button className='button-card-favoritos'>
                            Contratar
                        </button>
                    </div>
                </div>    
                )}
        </main> 
    )
}