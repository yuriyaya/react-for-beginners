import { useState, useEffect } from "react";
import Movie from "../components/Movie";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year"
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div>
      <h1>Movie App</h1>
      <hr />
      {loading ? (
        <h3>loading...</h3>
      ) : (
        movies.map((item) => (
          <Movie
            key={item.id}
            coverImg={item.medium_cover_image}
            title={item.title}
            summary={item.summary}
            genres={item.genres}
          />
        ))
      )}
    </div>
  );
}

export default Home;
