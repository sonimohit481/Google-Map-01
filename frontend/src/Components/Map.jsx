import { useState, useEffect, memo } from "react";
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

const Map = () => {
  const [paths, setPaths] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://googlemapbackend.onrender.com/`);
        const data = await response.json();
        setPaths(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
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
      {loading ? (
        <p>Loading...</p>
      ) : (
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
      )}
    </Box>
  ) : null;
};

export default memo(Map);
