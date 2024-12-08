import { useState } from "react";
import "./App.css";
import MovieList from "./movieList/MovieList";
import Navbar from "./navbar/Navbar";
import data from "./data";

function App() {
  const [search, setSearch] = useState("");
  const [rate, setRate] = useState("")
  const [movies,setMovies]= useState(data)

  return (
    <div>
      <Navbar setSearch={setSearch} setRate={setRate} />
      <MovieList
        setMovies={setMovies}
        search={search}
        rate={rate}
        movies={movies}
      />
    </div>
  );
}

export default App;
