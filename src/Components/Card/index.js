import './styles.css'

export function Card({artist}) {
    const musicalGenres = (favoriteGenres) => {
        return favoriteGenres.map((genre, index) => (
          <span key={index} className='musical-genre'>{genre}</span>
        ));
      };    

      return (
        <div className="information-card" key={artist._id}>
            <div>
                <h1 className="information-title">{artist.nomeCompleto}</h1>
                <p className="information-description">{artist.descricao}</p>
            </div>

            <div className="musical-genres-container">
                {musicalGenres(artist.generos)}
            </div>

            <div className='rating-and-button-container'>
                <div className='rating-score'>
                    <span>NOTA</span>
                    <span>/5&nbsp;</span>
                    <span>&nbsp;⭐</span>
                </div>

                <button>Contratar</button>
            </div>
        </div>
    )
}