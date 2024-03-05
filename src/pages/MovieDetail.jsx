import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import MovieDetailCard from "../components/cards/MovieDetailCard";
import { getMovieById } from "../services/Service";
import { useParams } from "react-router-dom";
import { useState } from "react";

function MovieDetail() {
  const [movieData, setMovieData] = useState(null);
  const { id } = useParams();
  const getMovieInfos = async () => {
    const result = await getMovieById(id);
    setMovieData(result.data);
  };
  useEffect(() => {
    getMovieInfos();
  }, [id]);
  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col
          xs={8}
          className="d-flex justify-content-center align-items-center">
          <MovieDetailCard movieData={movieData} />
        </Col>
      </Row>
    </Container>
  );
}

export default MovieDetail;
