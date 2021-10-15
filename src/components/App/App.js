import React from 'react';
import NavBar from '../NavBar/NavBar';
import TrailIndex from '../TrailIndex/TrailIndex';
import TrailDetails from '../TrailDetails/TrailDetails';
import { Route, Switch } from 'react-router-dom';
import './App.scss';

const App = () => {
  return (
    <main className="app-main">
      <NavBar />
      <Switch>
        <Route exact path="/"
          render={() =>
            <TrailIndex />
          }
        />
        <Route exact path="/favorites"
          render={() =>
            <>
              <h1>Favorites Test</h1>
            </>
          }
        />
        <Route exact path="/trail/:id"
          render={({match}) => {
              return <TrailDetails trailID={match.params.id}/>
          }}
        />
      </Switch>
    </main>
  );
}

export default App;
