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
  const [filteredTrails, setFilteredTrails] = useState([]);
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
  }

  const cleanFilters = (filterObj) => {
    const categories = Object.keys(filterObj)
    const cleanedFilters = categories.reduce((acc, category) => {
      acc[category] = Object.entries(filterObj[category]).filter(obj => obj[1] === true).map(obj => obj[0])
      return acc
    }, {difficulty: [], type: [], traffic: [], activities: []})
    applyTrailFilters(cleanedFilters)
  }

  const applyTrailFilters = (filterObj) => {
    setFilteredTrails(allTrails.filter(trail => {
      if (filterObj.difficulty.length) {
        return filterObj.difficulty.includes(trail.difficulty)
      } else {
        return trail;
      }
    })
    .filter(trail => {
      if (filterObj.traffic.length) {
        return filterObj.traffic.includes(trail.traffic)
      } else {
        return trail;
      }
    })
    .filter(trail => {
      if (filterObj.type.length) {
        return filterObj.type.includes(trail.type)
      } else {
        return trail
      }
    })
    .filter(trail => {
      if (filterObj.activities.length) {
        return filterObj.activities.every(activity => trail.activities.includes(activity))
      } else {
        return trail
      }
    }))
  }

  return (
    <main className="app-main">
      <NavBar user={userLoggedIn}/>
      <Switch>
        <Route exact path="/"
          render={() =>
            <>
              <input type="text" placeholder="Search Trails"></input>
              <Filter cleanFilters={cleanFilters}/>
              <TrailIndex filteredTrails={filteredTrails} />
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
