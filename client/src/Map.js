import React, {useEffect, useState, useRef} from 'react';

export default function Map({handleClick}) {
    const ref = useRef(null);
    const [map, setMap] = useState();

    useEffect(() => {
        if (map) {
          
            window.google.maps.event.clearListeners(map, "click");
    
          if (handleClick) {
            map.addListener("click", (e) => handleClick(e));
        }
      }}, [map, handleClick]);

    useEffect(() => {
    if (ref.current && !map) {
        setMap(new window.google.maps.Map(ref.current, 
            {
              center: {lat: 40.64026345125337, lng: -73.96340528468818}, 
              zoom: 15,
              options: {
                  styles: [{
                    featureType: "poi.business",
                    stylers: [{ visibility: "off" }],
                  },
                  {
                    featureType: "transit",
                    elementType: "labels.icon",
                    stylers: [{ visibility: "off" }],
                  }]

              }
            }
        ));
    }
    }, [ref, map]);
    
    return (
        <div ref={ref} style={{ flexGrow: "1", height: "100%"}}/>
    )
}
