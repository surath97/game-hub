import useGenres from "../hooks/useGenres";


function GenreList() {

  const { genre } = useGenres();
    
  return (
    <ul>
      {genre.map(g => <li key={g.id}>{g.name}</li>)}
    </ul>
  )
}

export default GenreList;