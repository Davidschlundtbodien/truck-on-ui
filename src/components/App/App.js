import React, { useState, useEffect } from 'react';
import NavBar from '../NavBar/NavBar';
import TrailIndex from '../TrailIndex/TrailIndex';
import TrailDetails from '../TrailDetails/TrailDetails';

import FavoriteTrails from '../FavoriteTrails/FavoriteTrails';
import PageNotFound from '../PageNotFound/PageNotFound';
import { Route, Switch } from 'react-router-dom';

import './App.scss';

const userLoggedIn = {id: 23, name: 'Eric'}

const App = () => {
  const [allTrails, setAllTrails] = useState(null);
  const [filteredTrails, setFilteredTrails] = useState([]);

  return (
    <main className="app-main">
      <NavBar user={userLoggedIn}/>
      <Switch>
        <Route exact path="/"
          render={() =>
            <>
              <TrailIndex 
                filteredTrails={filteredTrails} 
                allTrails={allTrails}
                setAllTrails={setAllTrails}
                setFilteredTrails={setFilteredTrails}
              />
            </>
          }
        />
        <Route exact path="/favorites/:userID"
          render={({match}) =>
            <FavoriteTrails userID={match.params.userID}
            trails={filteredTrails}/>
          }
        />
        <Route exact path="/trail/:id"
          render={({match}) => {
              return <TrailDetails trailID={match.params.id} trails={filteredTrails}/>
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
