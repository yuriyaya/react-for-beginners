import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [movieDetail, setMovieDetail] = useState([]);
  const { id } = useParams();
  const getMovieDetail = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovieDetail(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovieDetail();
  }, []);
  return (
    <div>
      <h1>{movieDetail.title}</h1>
      <div>{movieDetail.rating}</div>
      <img src={movieDetail.medium_cover_image} alt={movieDetail.title} />
      <ul>
        {movieDetail.genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
      <p>{movieDetail.description_full}</p>
    </div>
  );
}

export default Detail;
