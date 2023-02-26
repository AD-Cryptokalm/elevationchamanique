import React, { useCallback, useState } from "react";
import { GoogleMap, useJsApiLoader} from "@react-google-maps/api";



const containerStyle = {
  width: "360px",
  height: "360px",
};


const center = {
  lat: 43.785021,
  lng: 1.418634,
};

// cle api google map=`${process.env.REACT_APP_API_KEY}`

function Map() {
  
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "",
  });
  
  const [map, setMap] = useState(null);
  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);
  console.log(map)
  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      <></>
    </GoogleMap>
  ) : (
    <></>
  );
}

export default Map;
