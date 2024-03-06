import { Routes, Route } from "react-router-dom";
import EditMovie from "./pages/EditMovie";
import Login from "./pages/Login";
import MovieDetail from "./pages/MovieDetail";
import Movies from "./pages/Movies";
import Signin from "./pages/Signin";
import Home from "./pages/Home";
import AddMovies from "./pages/AddMovies";
import Error from "./pages/Error";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/edit-movie/:id" element={<EditMovie />} />
        <Route path="/login" element={<Login />} />
        <Route path="add-movie" element={<AddMovies />} />
        <Route path="/movie-detail/:id" element={<MovieDetail />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/register" element={<Signin />} />
      </Route>

      
      <Route path="/*" element={<Error />} />
    </Routes>
  );
}

export default App;
