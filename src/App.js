import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { MovieProvider } from './components/contexts/MovieContext';
import Main from './components/Main';
import Navbar from './components/Navbar';
import DetailMovie from './components/DetailMovie';
import './styles/index.scss';

function App() {
  return (
    <>
      <MovieProvider>
        <Navbar />
        <div className='container'>
          <Router>
            <Switch>
              <Route exact path='/' component={Main} />
              <Route path='/detail/movieId=:movieId' component={DetailMovie} />
            </Switch>
          </Router>
        </div>
      </MovieProvider>
    </>
  );
}

export default App;
