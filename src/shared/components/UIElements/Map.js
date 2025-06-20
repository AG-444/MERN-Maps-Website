import React, { useRef, useEffect } from "react";
import './Map.css';

const loadGoogleMapsScript = (callback) => {
  const existingScript = document.getElementById('googleMaps');

  if (!existingScript) {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&libraries=maps,marker`;
    script.id = 'googleMaps';
    script.async = true;
    script.defer = true;
    script.onload = () => {
      if (callback) callback();
    };
    document.body.appendChild(script);
  } else {
    if (callback) callback();
  }
};

const Map = props => {
  const mapRef = useRef();
  const { center, zoom } = props;

  useEffect(() => {
    loadGoogleMapsScript(() => {
      if (window.google && window.google.maps) {
        const map = new window.google.maps.Map(mapRef.current, {
          center: center,
          zoom: zoom
        });

        new window.google.maps.Marker({ position: center, map: map });
      }
    });
  }, [center, zoom]);

  return (
    <div
      ref={mapRef}
      className={`map ${props.className}`}
      style={props.style}
    ></div>
  );
};

export default Map;
