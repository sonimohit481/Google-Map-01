import {
  AdvancedMarker,
  APIProvider,
  Map,
  Marker,
  Pin,
} from "@vis.gl/react-google-maps";
// import React from "react";

const NewMap = () => {
  return (
    <APIProvider apiKey={import.meta.env.VITE_APP_GOOGLE_KEY}>
      {/* <Map
        style={{ width: "100vw", height: "100vh" }}
        defaultCenter={{ lat: 28.7041, lng: 77.1025 }}
        defaultZoom={3}
        gestureHandling={"greedy"}
        disableDefaultUI={true}
      /> */}
      <Map
        // zoom={12}
        center={{ lat: 28.7041, lng: 77.1025 }}
        mapId={import.meta.env.VITE_APP_GOOGLE_MAP_KEY}
        renderingType="RASTER"
        style={{ width: "100vw", height: "100vh" }}
        // defaultCenter={{ lat: 28.7041, lng: 77.1025 }}
        defaultZoom={15}
        gestureHandling={"greedy"}
        disableDefaultUI={true}
      >
        {/* <Marker position={{ lat: 28.7041, lng: 77.1025 }} /> */}
        <AdvancedMarker position={{ lat: 28.7041, lng: 77.1025 }}>
          <Pin
            background={"#0f9d58"}
            borderColor={"#006425"}
            glyphColor={"#60d98f"}
          />
        </AdvancedMarker>
      </Map>
    </APIProvider>
  );
};

export default NewMap;
