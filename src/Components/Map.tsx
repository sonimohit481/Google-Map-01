import { useState, useEffect, memo, Key } from "react";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  Polygon,
} from "@react-google-maps/api";

const containerStyle = {
  width: "90%",
  height: "90vh",
};

const options = {
  fillOpacity: 0.2,
  fillColor: "#FF0000",
  strokeColor: "#FF0000",
  strokeWeight: 2,
};
export const generateRandomCoordinates = () => {
  let arr = [];
  arr[0] = {
    name: "home",
    lat: Math.random() * (24 - 21) + 21,
    lng: Math.random() * (84 - 81) + 81,
  };
  for (let i = 0; i < 3; i++) {
    arr[i + 1] = {
      name: (i + 1).toString(),
      lat: Math.random() * (24 - 21) + 21,
      lng: Math.random() * (84 - 81) + 81,
    };
  }
  arr.push(arr[0]);
  return arr;
};

interface PathProp {
  name: string;
  lat: number;
  lng: number;
}
const Map = () => {
  const [paths, setPaths] = useState<PathProp[] | null>([]);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "",
    version: "weekly",
  });

  useEffect(() => {
    const randomPaths = generateRandomCoordinates();
    setPaths(randomPaths);
  }, []);

  return isLoaded ? (
    <div>
      <GoogleMap mapContainerStyle={containerStyle} center={paths![0]} zoom={7}>
        {paths?.map(
          (item: { lat: any; lng: any }, index: Key | null | undefined) => {
            return (
              <Marker position={{ lat: item.lat, lng: item.lng }} key={index} />
            );
          }
        )}

        {paths && <Polygon paths={paths} options={options} />}
      </GoogleMap>
    </div>
  ) : (
    <p>Loading...</p>
  );
};

export default memo(Map);
