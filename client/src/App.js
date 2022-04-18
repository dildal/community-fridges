import './App.css';
import { useState, useEffect, useRef } from "react";
import Map, {Marker, Source, Layer} from 'react-map-gl';
import { Route, Switch, useParams, Link, useHistory } from "react-router-dom";
import fridgeIcon from './fridge-svgrepo-com.svg'
import FridgeDetail from './components/FridgeDetail'
import HomePage from './components/HomePage';

import 'mapbox-gl/dist/mapbox-gl.css';


function App() {
  // const [newFridgeCoords, setNewFridgeCoords] = useState();
  const [fridges, setFridges] = useState();
  const [geoJson, setGeoJson] = useState();
  const history = useHistory();


  useEffect(() => {
    fetch('/fridges')
      .then(res => res.json())
      .then(fridges => {
        setGeoJson(fridges.map(fridge => {
          return {
            type: "Feature",
            geometry: {
              type: 'Point', 
              coordinates: [fridge.lng, fridge.lat]
            },
            id: fridge.id
          }
        }))
      })
  }, [])

  const layerStyle = {
    id: 'fridge-icon',
    type: 'symbol',
    layout: {
      'icon-image': 'fridge-icon'
    }
  }

  // useEffect(() => {
  //   if (!map.current) return;
  //   map.current.on('click', (e) => {
  //     console.log(e)
  //     console.log("e.lngLat:", e.lngLat)
  //     console.log("e.Yo:", (e.Yo))
  //     console.log("e.Yo.lngLat:", e.Yo.lngLat)
  //   })
  // })

  function handleClick(e){
    history.push(`/fridges/${e.features[0].id}`)
  }

  return(
    <div className="main">
    <div className="map-container">
      <Map
        initialViewState={{
          latitude: 40.654,
          longitude: -73.9625,
          zoom: 12.5
        }}
        mapStyle="mapbox://styles/mddally/ck91ip5tc0s2f1iqipugocf9q"
        mapboxAccessToken={process.env.REACT_APP_API_KEY}
        interactiveLayerIds={["fridge-icon"]}
        onClick={(e) => handleClick(e)}
      >
        <Source id="fridge-data" type="geojson" data={{type: 'FeatureCollection', features: geoJson}}>
          <Layer {...layerStyle} />
        </Source>
      </Map>
      </div>
      <div className="view-container">
        <Switch>
          <Route exact path="/fridges/:id">
              <FridgeDetail />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </div>
  )
}


export default App;
