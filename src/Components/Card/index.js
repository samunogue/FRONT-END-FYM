import './styles.css'

const infoArtistas = [
    {
        id: 1,
        name: "Ricardo",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        favoriteGenres: ['Rock', 'Pop', 'Metal'],
        rating: 4.5,
    },
    {
        id: 2,
        name: "Samuel",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        favoriteGenres: ['Rock', 'Pop', 'Metal'],
        rating: 4.5,
    },
    {
        id: 3,
        name: "Matheus",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        favoriteGenres: ['Rock', 'Pop', 'Metal'],
        rating: 4.5,
    },
    {
        id: 4,
        name: "Breno",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        favoriteGenres: ['Rock', 'Pop', 'Metal'],
        rating: 4.5,
    }
]

export function Card() {
    const musicalGenres = (favoriteGenres) => {
        return favoriteGenres.map((genre, index) => (
          <span key={index} className='musical-genre'>{genre}</span>
        ));
      };    

    const info = infoArtistas.map((artist) => {
        return (
            <div className="information-card" key={artist.id}>
                <div>
                    <h1 className="information-title">{artist.name}</h1>
                    <p className="information-description">{artist.description}</p>
                </div>

                <div className="musical-genres-container">
                    {musicalGenres(artist.favoriteGenres)}
                </div>

                <div className='rating-and-button-container'>
                    <div className='rating-score'>
                        <span>{artist.rating}</span>
                        <span>/5&nbsp;</span>
                        <span>&nbsp;⭐</span>
                    </div>

                    <button>Contratar</button>
                </div>
            </div>
        )
    })

    return (
        <div className="cards-container">
            {info}
        </div>
    )
}