import { Form, Container, Row, Col, Button } from "react-bootstrap";
import Select from "react-select";
import {
  getGenres,
  getCertificates,
  getStars,
  getDirectors,
  addMovie,
} from "../services/Service";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function AddMovies() {
  const [postMovie, setPostMovie] = useState({});
  const [directors, setDirectors] = useState([]);
  const [certificates, setCertificates] = useState([]);
  const [stars, setStars] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedStars, setSelectedStars] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const navigate = useNavigate();
  const handlePostMovie = async (e) => {
    e.preventDefault();
    try {
      await addMovie(postMovie);
      navigate("/movies");
    } catch (error) {
      console.log("Error while post movie", error);
    }
  };
  const options = stars.map((star, index) => ({
    value: star,
    label: star,
  }));
  const genresOptions = genres.map((genre) => ({
    value: genre,
    label: genre,
  }));
  useEffect(() => {
    const fetchData = async (
      getDataFunction,
      setDataFunction,
      errorMessage
    ) => {
      try {
        const result = await getDataFunction();
        const data = result.data;
        setDataFunction(data);
      } catch (error) {
        console.log(`Error fetching data: ${errorMessage}`, error);
      }
    };

    const handleCertificates = () => {
      fetchData(getCertificates, setCertificates, "certificates");
    };

    const handleStars = () => {
      fetchData(getStars, setStars, "stars");
    };

    const handleGenres = () => {
      fetchData(getGenres, setGenres, "genres");
    };

    const handleDirectors = () => {
      fetchData(getDirectors, setDirectors, "directors");
    };

    handleCertificates();
    handleDirectors();
    handleStars();
    handleGenres();
  }, []);
  const handleGenresChange = (selectedOptions) => {
    const selectedGenres = selectedOptions.map((option) => option.value);
    setSelectedGenres(selectedGenres);

    setPostMovie((prevMovie) => ({
      ...prevMovie,
      Genre: selectedGenres,
    }));
  };
  const handleStarsChange = (selectedOptions) => {
    const selectedStars = selectedOptions.map((option) => option.value);
    setSelectedStars(selectedStars);

    setPostMovie((prevMovie) => ({
      ...prevMovie,
      Stars: selectedStars,
    }));
  };
  return (
    <Container className="mt-5">
      <Row className="justify-content-center ">
        <Col md={6}>
          <Form
            className="mx-auto mt-5  border-black p-3 rounded  custom-form"
            onSubmit={handlePostMovie}>
            <Row>
              <Col md={4}>
                <Form.Group className="mb-3" controlId="formGenre">
                  <Form.Label className="fs-4 text-white">Title</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Title"
                    onChange={(e) => {
                      setPostMovie((prevMovie) => ({
                        ...prevMovie,
                        Series_Title: e.target.value,
                      }));
                    }}
                  />
                </Form.Group>
              </Col>

              <Col md={4}>
                <Form.Group className="mb-3" controlId="formDirector">
                  <Form.Label className="fs-4 text-white">Directors</Form.Label>
                  <Form.Select
                    aria-label="Default select example"
                    placeholder="Select Director"
                    onChange={(e) => {
                      setPostMovie((prevMovie) => ({
                        ...prevMovie,
                        Director: e.target.value,
                      }));
                    }}>
                    <option value="" disabled>
                      Select Director
                    </option>
                    {directors.map((director, index) => (
                      <option key={index} value={director}>
                        {director}
                      </option>
                    ))}
                  </Form.Select>
                </Form.Group>
              </Col>

              <Col md={4}>
                <Form.Group className="mb-3" controlId="formCertificate">
                  <Form.Label className="fs-4 text-white">
                    Certificates
                  </Form.Label>
                  <Form.Select
                    aria-label="Default select example"
                    placeholder="Select Certificates"
                    onChange={(e) => {
                      setPostMovie((prevMovie) => ({
                        ...prevMovie,
                        Certificate: e.target.value,
                      }));
                    }}>
                    {certificates.map((certificate, index) => (
                      <option key={index} value={certificate}>
                        {certificate}
                      </option>
                    ))}
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={4}>
                <Form.Group className="mb-3" controlId="formGross">
                  <Form.Label className="fs-4 text-white">Gross</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter Gross"
                    step="0.1"
                    onChange={(e) => {
                      setPostMovie((prevMovie) => ({
                        ...prevMovie,
                        Gross: parseFloat(e.target.value),
                      }));
                    }}
                  />
                </Form.Group>
              </Col>

              <Col md={4}>
                <Form.Group className="mb-3" controlId="formDirector">
                  <Form.Label className="fs-4 text-white">Score</Form.Label>
                  <Form.Control
                    type="number"
                    step="0.1"
                    placeholder="Enter Meta Score"
                    onChange={(e) => {
                      setPostMovie((prevMovie) => ({
                        ...prevMovie,
                        Meta_score: parseFloat(e.target.value),
                      }));
                    }}
                  />
                </Form.Group>
              </Col>

              <Col md={4}>
                <Form.Group className="mb-3" controlId="formTime">
                  <Form.Label className="fs-4 text-white">Run Time</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Run Time"
                    onChange={(e) => {
                      setPostMovie((prevMovie) => ({
                        ...prevMovie,
                        Runtime: e.target.value,
                      }));
                    }}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={4}>
                <Form.Group className="mb-3" controlId="formRating">
                  <Form.Label className="fs-4 text-white">Rate</Form.Label>
                  <Form.Control
                    type="number"
                    step="0.1"
                    placeholder="Enter Rate"
                    onChange={(e) => {
                      setPostMovie((prevMovie) => ({
                        ...prevMovie,
                        IMDB_Rating: parseFloat(e.target.value),
                      }));
                    }}
                  />
                </Form.Group>
              </Col>

              <Col md={4}>
                <Form.Group className="mb-3" controlId="formVotes">
                  <Form.Label className="fs-4 text-white">Votes</Form.Label>
                  <Form.Control
                    type="number"
                    step="0.1"
                    placeholder="Enter Votes"
                    onChange={(e) => {
                      setPostMovie((prevMovie) => ({
                        ...prevMovie,
                        No_of_Votes: parseFloat(e.target.value),
                      }));
                    }}
                  />
                </Form.Group>
              </Col>

              <Col md={4}>
                <Form.Group className="mb-3" controlId="formYear">
                  <Form.Label className="fs-4 text-white">Year</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Year"
                    onChange={(e) => {
                      setPostMovie((prevMovie) => ({
                        ...prevMovie,
                        Released_Year: e.target.value,
                      }));
                    }}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <Form.Group className="mb-3" controlId="formLink">
                  <Form.Label className="fs-4 text-white">Poster</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Poster Link"
                    onChange={(e) => {
                      setPostMovie((prevMovie) => ({
                        ...prevMovie,
                        Poster_Link: e.target.value,
                      }));
                    }}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="formGenres">
                  <Form.Label className="fs-4 text-white">Genres</Form.Label>
                  <Select
                    placeholder="Select Genre"
                    value={genresOptions.filter((option) =>
                      selectedGenres.includes(option.value)
                    )}
                    onChange={handleGenresChange}
                    options={genresOptions}
                    isMulti
                  />
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group className="mb-3" controlId="formLink">
                  <Form.Label className="fs-4 text-white">Stars</Form.Label>
                  <Select
                    placeholder="Select Star"
                    value={options.filter((option) =>
                      selectedStars.includes(option.value)
                    )}
                    onChange={handleStarsChange}
                    options={options}
                    isMulti
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <Form.Group className="mb-3" controlId="formOverview">
                  <Form.Label className="fs-4 text-white">Overview</Form.Label>
                  <Form.Control
                    type="text"
                    as="textarea"
                    rows={4}
                    placeholder="Enter Overview"
                    onChange={(e) => {
                      setPostMovie((prevMovie) => ({
                        ...prevMovie,
                        Overview: e.target.value,
                      }));
                    }}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Button variant="warning" type="submit">
              Add Movie
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default AddMovies;
