import React from 'react';
import NavBar from '../NavBar/NavBar';
import MobileNav from '../MobileNav/MobileNav';
import TrailIndex from '../TrailIndex/TrailIndex';
import TrailDetails from '../TrailDetails/TrailDetails';
import FavoriteTrails from '../FavoriteTrails/FavoriteTrails';
import PageNotFound from '../PageNotFound/PageNotFound';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import { USER_LOGIN }from '../../graphql/queries';
import { useQuery } from '@apollo/client';


const App = () => {
  const {loading, error, data} = useQuery(USER_LOGIN, {
    variables: { id: 4 },
  });

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <main className="app-main">
      <div className="app-header">
        <p className="welcome-user">{`Welcome, ${data.user.name}`}</p>
        <h1 className="truck-on-title">Truck On™</h1>
        <NavBar user={data.user}/>
      </div>
      <MobileNav user={data.user} />
      <Switch>
        <Route exact path="/"
          render={() =>
             <TrailIndex />
          }
        />
        <Route exact path="/favorites/:userID"
          render={({match}) =>
            <FavoriteTrails
            userID={match.params.userID}
            user={data.user}
            favoriteTrails={data.user.favorites}
            />
          }
        />
        <Route exact path="/trail/:id"
          render={({match}) => {
              return <TrailDetails id={match.params.id} />
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
