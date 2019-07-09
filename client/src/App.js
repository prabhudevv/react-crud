import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TopNavBar from "./components/TopNavBar";
import MovieList from "./components/assets/MovieList";
import UpcomingMovieList from "./components/assets/UpcomingMovieList";
import KannadaMovieList from "./components/assets/KannadaMovieList";
import EnglishMovieList from "./components/assets/EnglishMovieList";
import HindiMovieList from "./components/assets/HindiMovieList";
import MovieDetails from "./components/assets/MovieDetails";
import Admin from "./components/assets/Admin";
import UpdateMovie from "./components/assets/UpdateMovie";
import './components/css/style.css';

function App() {
  return (
    <div className="App">
      <Router>
          <TopNavBar/>
          <Switch>
            <Route exact path="/movies" component={MovieList}></Route>
            <Route exact path="/upcomingmovies" component={UpcomingMovieList}></Route>
            <Route exact path="/kannadamovies" component={KannadaMovieList}></Route>
            <Route exact path="/englishmovies" component={EnglishMovieList}></Route>
            <Route exact path="/hindimovies" component={HindiMovieList}></Route>
            <Route exact path="/movies/details" component={MovieDetails}></Route>
            <Route exact path="/admin" component={Admin}></Route>
            <Route exact path="/admin/edit" component={UpdateMovie}></Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
