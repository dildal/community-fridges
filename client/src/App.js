import './App.css';
import { useState, useEffect, useRef } from "react";
import Map, {Marker, Source, Layer} from 'react-map-gl';
import fridgeIcon from './fridge-svgrepo-com.svg'

import 'mapbox-gl/dist/mapbox-gl.css';


function App() {
  // const [newFridgeCoords, setNewFridgeCoords] = useState();
  const [fridges, setFridges] = useState();
  const [geoJson, setGeoJson] = useState();


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
            }
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

  // const layerStyle = {
  //   id: 'point',
  //   type: 'circle',
  //   paint: {
  //     'circle-radius': 10,
  //     'circle-color': '#007cbf'
  //   }
  // };

  // useEffect(() => {
  //   if (!map.current) return;
  //   map.current.on('click', (e) => {
  //     console.log(e)
  //     console.log("e.lngLat:", e.lngLat)
  //     console.log("e.Yo:", (e.Yo))
  //     console.log("e.Yo.lngLat:", e.Yo.lngLat)
  //   })
  // })

  return(
    <div className="map-container">
      <Map
        initialViewState={{
          latitude: 40.654,
          longitude: -73.9625,
          zoom: 12.5
        }}
        mapStyle="mapbox://styles/mddally/ck91ip5tc0s2f1iqipugocf9q"
        mapboxAccessToken={process.env.REACT_APP_API_KEY}
      >
        <Source id="fridge-data" type="geojson" data={{type: 'FeatureCollection', features: geoJson}}>
          <Layer {...layerStyle} />
        </Source>
      </Map>
    </div>
  )
}


export default App;
