import React from "react";
import { Card, CloseButton } from "react-bootstrap";
import Loader from "../loader/Loader";
import { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

function MovieDetailCard({ movieData }) {
  console.log(movieData);

  const link = "@._V1_UY1080_CR1,0,670,980_AL_.jpg";

  if (movieData) {
    const posterLink = movieData.Poster_Link;
    const partBeforeAtSymbol = posterLink.split("@")[0];
    const updatedLink = `${partBeforeAtSymbol}${link}`;

    movieData.Poster_Link = updatedLink;
    console.log(partBeforeAtSymbol);
    const updateedLink = `${partBeforeAtSymbol}${link}`;
    movieData.Poster_Link = updateedLink;
  }
  const [showLoader, setShowLoader] = useState(true);
  useEffect(() => {
    const time = setTimeout(() => {
      setShowLoader(false);
    }, 1000);
    return () => clearTimeout(time);
  }, []);
  const starElements =
    movieData &&
    Object.keys(movieData)
      .filter((key) => key.startsWith("Star"))
      .map((key, index) => (
        <span key={index}>
          {index > 0 && ", "}
          {movieData[key]}
        </span>
      ));

  return (
    <>
      {showLoader ? (
        <Loader />
      ) : (
        <Card
          style={{
            width: "50%",
            backgroundColor: "rgb(26,26,26)",
            color: "white",
            position: "relative",
            marginBottom: "10px",
          }}>
          <div
            style={{
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
            }}>
            <Card.Img
              variant="top"
              src={movieData.Poster_Link}
              style={{ width: "40%" }}
            />
            <Card.Title className="p-4">{movieData.Series_Title}</Card.Title>
          </div>

          <Card.Body>
            <Card.Text>
              <FaStar style={{ color: "#FFC107" }} /> {movieData.IMDB_Rating}
            </Card.Text>
            <Card.Text>
              <span style={{ fontWeight: "bold" }}>Genre : </span>
              {movieData.Genre.join(", ")}
            </Card.Text>
            <Card.Text>
              <span style={{ fontWeight: "bold" }}>Stars : </span>
              {starElements}
            </Card.Text>
            <Card.Text>
              <span style={{ fontWeight: "bold" }}>Overview : </span>
              {movieData.Overview}
            </Card.Text>
            <Card.Text>
              <span style={{ fontWeight: "bold" }}>Director : </span>
              {movieData.Director}
            </Card.Text>
            <Card.Text>
              <span style={{ fontWeight: "bold" }}>Certificate : </span>
              {movieData.Certificate}
            </Card.Text>
            <Card.Text>
              <span style={{ fontWeight: "bold" }}>Gross : </span>
              {movieData.Gross}
            </Card.Text>
            <Card.Text>
              <span style={{ fontWeight: "bold" }}>Score : </span>
              {movieData.Meta_score}
            </Card.Text>
            <Card.Text>
              <span style={{ fontWeight: "bold" }}>Year : </span>
              {movieData.Released_Year}
            </Card.Text>
            <Card.Text>
              <span style={{ fontWeight: "bold" }}>Runtime : </span>
              {movieData.Runtime}
            </Card.Text>
            <Card.Text>
              <span style={{ fontWeight: "bold" }}>Votes : </span>
              {movieData.No_of_Votes}
            </Card.Text>
          </Card.Body>
          <Link to="/movies">
            <CloseButton className="close-btn" />
          </Link>
        </Card>
      )}
    </>
  );
}

export default MovieDetailCard;
