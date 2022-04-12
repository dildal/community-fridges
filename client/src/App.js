import './App.css';
import { useState, useEffect } from "react"
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import Map from './Map'

function App() {
  const [newFridgeCoords, setNewFridgeCoords] = useState();
  const [fridges, setFridges] = useState();

  // useEffect(() => {
  //   fetch('/fridges')
  //   .then(r => r.json())
  //   .then(fridges => setFridges(fridges))
  // }, [])

  function handleClick(e){
    console.log(e.latLng.toJSON())
  }

  const render = (status) => {
    return <h1>{status}</h1>;
  };
  return(
    <div style={{ display: "flex", height: "100%"}}>
      <Wrapper apiKey={"AIzaSyDhnDPvUSCCA--Oi7dJHW325W23a3BqucI"} render={render}>
        <Map handleClick={handleClick}/>
      </Wrapper>
    </div>
  )
}

export default App;
