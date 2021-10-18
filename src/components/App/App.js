import React, { useState, useEffect } from 'react';
import NavBar from '../NavBar/NavBar';
import TrailIndex from '../TrailIndex/TrailIndex';
import TrailDetails from '../TrailDetails/TrailDetails';
import Filter from '../Filter/Filter';
import FavoriteTrails from '../FavoriteTrails/FavoriteTrails';
import PageNotFound from '../PageNotFound/PageNotFound';
import { Route, Switch } from 'react-router-dom';
import trails from '../../sampleTrailData';
import './App.scss';

const userLoggedIn = {id: 23, name: 'Eric'}

const App = () => {
  const [allTrails, setAllTrails] = useState(null);
  const [filteredTrails, setFilteredTrails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);


  // On component mount, App should perform a fetch call to pull all trails data and setAllTrails
  // For now, using sampleTrailData file
  useEffect(() => {
    startApp();
  }, [])

  const startApp = () => {
    setIsLoading(true)
    setAllTrails(trails)
    setFilteredTrails(trails)
    setIsLoading(false)
    // isLoading state will be used to render a react-loader-spinner
  }

  // Filter function passed down as prop to Filter component, will setFilteredTrails
  const applyTrailFilters = (categories) => {
    console.log("App apply Filter test", categories)
  }

  return (
    <main className="app-main">
      <NavBar user={userLoggedIn}/>
      <Switch>
        <Route exact path="/"
          render={() =>
            <>
              <input type="text" placeholder="Search Trails"></input>
              <Filter applyTrailFilters={applyTrailFilters}/>
              <TrailIndex filteredTrails={filteredTrails} />
            </>
          }
        />
        <Route exact path="/favorites/:userID"
          render={({match}) =>
            <FavoriteTrails userID={match.params.userID}/>
          }
        />
        <Route exact path="/trail/:id"
          render={({match}) => {
              return <TrailDetails trailID={match.params.id}/>
          }}
        />
        <Route path="*"
          render={() =>
            <PageNotFound />
          }
        />
      </Switch>
    </main>
  );
}

export default App;
