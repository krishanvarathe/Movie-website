import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Header from './component/header/Header';
import Home from './pages/home/home';
import Movie from './pages/moviedetail/movie';
import MovieList from './component/header/movie/movie';
function App() {
  return (
    <div className="App">
  <Router>
  <Header/>
    <Routes>
      <Route index element={<Home/>}></Route>
      <Route path="movie/:id"element={<Movie/>}></Route>
    <Route path="movies/:type"element={<MovieList/>}></Route>
    <Route path="/*"element={<h1>Error page</h1>}></Route>
    </Routes>
  </Router>
    </div>
  );
}

export default App;
