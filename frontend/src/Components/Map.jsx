import React from "react";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  Polygon,
} from "@react-google-maps/api";
import Box from "@mui/material/Box";

const containerStyle = {
  width: "90%",
  height: "90vh",
};
const options = {
  fillOpacity: 0,
  strokeColor: "red",
  strokeWeight: 2,
};

function Map() {
  const [paths, setPaths] = React.useState([]);
  React.useEffect(() => {
    fetch(`https://googlemapbackend.onrender.com/`)
      .then((res) => res.json())
      .then((data) => setPaths(data))
      .catch((Err) => console.log(Err));
  }, []);
  const center = paths[0];
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyBHULU2zApDcYnnj3Mrg4mEaq5q3mdsO68",
  });
  return isLoaded ? (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: "10px",
        borderRadius: "10px",
      }}
    >
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={7}>
        {paths.map((item) => {
          return (
            <Marker
              position={{ lat: item.lat, lng: item.lng }}
              key={item.lat}
              style={{ with: 1 }}
            />
          );
        })}
        <Polygon paths={paths} options={options} />
      </GoogleMap>
    </Box>
  ) : (
    <></>
  );
}

export default React.memo(Map);
