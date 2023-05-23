import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '700px',
  height: '500px'
};

const center = {
  lat: 32.779167,
  lng: -96.808891
};

function NonprofitMap() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! 
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={40}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        <Marker position={{ lat: 32.779167, lng: -96.808891 }} /> 
        <Marker position={{ lat: 33.01499915796156, lng: -96.75539581982746 }} /> 
        <Marker position={{ lat: 32.78970736402719, lng: -96.85953286271642 }} />
        <Marker position={{ lat: 32.82928181904301, lng: -96.91672093582397 }} /> 
        <Marker position={{ lat: 33.00207356008015, lng: -96.7561908358147}} />
        <Marker position={{ lat: 32.822721045711994, lng: -96.83555466651492}} />
        <Marker position={{ lat: 32.60610789107235, lng: -96.91698496428445}} />
        <></>
      </GoogleMap>
  ) : <></>
}

export default React.memo(NonprofitMap)
