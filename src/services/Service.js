const url = "http://imdbproject.lumnion.com";

let loginUser = async (loginData) => {
  try {
    let response = await fetch(`${url}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    });

    let data = await response.json();

    console.log("Login successful", data);

    if (data.access_token) {
      let accessToken = data.access_token;
      console.log("Token: " + accessToken);
      sessionStorage.setItem("access_token", accessToken);
      return accessToken;
    } else {
      throw new Error("Authentication failed");
    }
  } catch (error) {
    console.error("Login error", error.message);
    throw error;
  }
};

let registerUser = async (registerData) => {
  try {
    let response = await fetch(`${url}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(registerData),
    });

    let data = await response.json();

    console.log("Login successful", data);
    if (data.access_token) {
      let accessToken = data.access_token;
      sessionStorage.setItem("access_token", accessToken);
      return accessToken;
    } else {
      throw new Error("Register failed !");
    }
  } catch (error) {
    console.error("Register error", error.message);
    throw error;
  }
};

let getMovies = async () => {
  try {
    let accessToken = sessionStorage.getItem("access_token");
    if (!accessToken) {
      console.error("Access token not found");
      return;
    }
    let response = await fetch(`${url}/get-movies`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });
    let data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching movies:", error);
  }
};
let getMovieById = async (movieId) => {
  try {
    let accessToken = sessionStorage.getItem("access_token");
    if (!accessToken) {
      console.log("token not found");
      return;
    }
    let response = await fetch(`${url}/get-movie/${movieId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });
    let data = await response.json();
    return data;
  } catch (error) {
    console.log("Error fetching");
  }
};

let deleteMovies = async (movieId) => {
  try {
    let accessToken = sessionStorage.getItem("access_token");
    if (!accessToken) {
      console.log("token not found");
      return;
    }
    let response = await fetch(`${url}/delete-movie/${movieId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });
    let data = await response.json();
    return data;
  } catch (error) {
    console.log("Error deleting");
  }
};

let getCertificates = async () => {
  try {
    let accessToken = sessionStorage.getItem("access_token");
    if (!accessToken) {
      console.log("Token not found");
      return;
    }
    let response = await fetch(`${url}/get-certificates`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });
    let data = await response.json();
    return data;
  } catch (error) {
    console.log("Error fetching certifcats");
  }
};
let getDirectors = async () => {
  try {
    let accessToken = sessionStorage.getItem("access_token");
    if (!accessToken) {
      console.log("Token not found");
      return;
    }
    let response = await fetch(`${url}/get-directors`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });
    let data = await response.json();
    return data;
  } catch (error) {
    console.log("Error fetching directors");
  }
};
let getGenres = async () => {
  try {
    let accessToken = sessionStorage.getItem("access_token");
    if (!accessToken) {
      console.log("Token not found");
      return;
    }
    let response = await fetch(`${url}/get-genres`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });
    let data = await response.json();
    return data;
  } catch (error) {
    console.log("Error fetching genres");
  }
};
let getStars = async () => {
  try {
    let accessToken = sessionStorage.getItem("access_token");
    if (!accessToken) {
      console.log("Token not found");
      return;
    }
    let response = await fetch(`${url}/get-stars`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });
    let data = await response.json();
    return data;
  } catch (error) {
    console.log("Error fetching stars");
  }
};

let addMovie = async (movieData) => {
  try {
    let accessToken = sessionStorage.getItem("access_token");
    if (!accessToken) {
      console.log("Token not found");
      return;
    }

    let response = await fetch(`${url}/add-movie`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(movieData),
    });

    if (response.ok) {
      const responseData = await response.json();
      console.log("Movie added successfully", responseData);
    } else {
      console.error(
        "Failed to add movie:",
        response.status,
        response.statusText
      );
    }
  } catch (error) {
    console.error("Error while adding movie", error.message);
    throw error;
  }
};
let editMovies = async (movieData) => {
  try {
    let accessToken = sessionStorage.getItem("access_token");
    if (!accessToken) {
      console.log("Token not found");
      return;
    }

    let response = await fetch(`${url}/edit-movie/${movieData._id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(movieData),
    });

    if (response.ok) {
      const responseData = await response.json();
      console.log("Movie edited successfully", responseData);
    } else {
      console.error(
        "Failed to edit movie:",
        response.status,
        response.statusText
      );
    }
  } catch (error) {
    console.error("Error while edit movie", error.message);
    throw error;
  }
};

export {
  loginUser,
  registerUser,
  getMovies,
  deleteMovies,
  getMovieById,
  getCertificates,
  getDirectors,
  getGenres,
  getStars,
  addMovie,
  editMovies,
};
