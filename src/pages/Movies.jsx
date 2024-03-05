import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getMovies, deleteMovies } from "../services/Service";

import MovieCard from "../components/cards/MovieCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Loader from "../components/loader/Loader";
import { FaSearch } from "react-icons/fa";

function Movies() {
  const link = "@._V1_UY1080_CR1,0,670,980_AL_.jpg";
  const [movies, setMovies] = useState({ data: [] });
  const [searchMovie, setSearcMovie] = useState("");
  const [filteredMovies, setFilteredMovies] = useState([]);
  const navigate = useNavigate();

  const isUserLoggedIn = () => {
    const accessToken = sessionStorage.getItem("access_token");
    return accessToken ? true : false;
  };

  const handleDelete = async (movieId) => {
    try {
      await deleteMovies(movieId);

      const updatedMovies = movies.data.filter(
        (movie) => movie._id !== movieId
      );

      setMovies({ data: updatedMovies });

      console.log(`Film id : ${movieId} deleted`);
    } catch (error) {
      console.log("HATATATA", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (isUserLoggedIn()) {
          const result = await getMovies();
          setMovies(result);
        } else {
          navigate("/");
        }
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchData();
  }, [navigate]);

  useEffect(() => {
    console.log("Before Filter:", movies.data);
    const filtered = movies.data.filter((movie) =>
      movie.Series_Title.toLowerCase().includes(searchMovie.toLocaleLowerCase())
    );
    console.log("After Filter:", filtered);
    setFilteredMovies(filtered);
  }, [searchMovie, movies]);

  const handleSearchMovie = (e) => {
    setSearcMovie(e.target.value);
  };
  movies.data.forEach((movie) => {
    const indexOfAtSymbol = movie.Poster_Link.indexOf("@");
    const extractedPart = movie.Poster_Link.slice(0, indexOfAtSymbol);

    const updatedPosterLink = `${extractedPart}${link}`;
    movie.Poster_Link = updatedPosterLink;
  });
  return (
    <>
      <Container className="d-flex flex-column align-items-center justify-content-center">
        <div className="input-container">
          <input
            type="text"
            className="input-text"
            placeholder="Search..."
            value={searchMovie}
            onChange={handleSearchMovie}
          />
          <FaSearch
            className="search-icon"
            style={{ fontSize: "30px", padding: "5px", cursor: "pointer" }}
          />
        </div>

        <Row xs={2} md={3} lg={4} xl={6}>
          {filteredMovies.length > 0 ? (
            filteredMovies.map((movie) => (
              <Col
                key={movie._id}
                className="mb-4"
                style={{ minWidth: "200px", minHeight: "300px" }}>
                <MovieCard
                  id={movie._id}
                  src={movie.Poster_Link}
                  title={movie.Series_Title}
                  rating={movie.IMDB_Rating}
                  onDelete={handleDelete}
                />
              </Col>
            ))
          ) : (
            <Loader />
          )}
        </Row>
      </Container>
    </>
  );
}

export default Movies;
