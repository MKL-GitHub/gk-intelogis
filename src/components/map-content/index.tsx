import { FC, memo, useState, useEffect } from "react";

import { TileLayer, Marker, Popup, useMap, Polyline } from "react-leaflet";
import L from "leaflet";

import { Point } from "@types";
import { TrafficRouteData } from "@store/types";
import "./index.scss";

export interface MapContentProps {
  data: TrafficRouteData;
}

const MapContent: FC<MapContentProps> = ({ data }) => {
  const [currentPosition, setCurrentPosition] = useState<Point | null>(null);

  const map = useMap();

  useEffect(() => {
    const customControl = L.control.attribution({ position: "bottomright" });

    customControl.onAdd = () => {
      const div = L.DomUtil.create("button");
      div.innerHTML = "<img src='location.svg' />";
      div.onclick = handleCurrentLocation;
      div.className = "LeafletMap-locationButton";
      return div;
    };

    customControl.addTo(map);
    map.on("locationfound", handleLocationFound);
    map.on("locationerror", handleLocationError);

    return () => {
      customControl.remove();
      map.off("locationfound", handleLocationFound);
      map.off("locationerror", handleLocationError);
    };

    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (data.coordinates.length) {
      const bounds = L.latLngBounds(data.coordinates);
      map.flyToBounds(bounds, { duration: 2 });
    }

    // eslint-disable-next-line
  }, [data.coordinates]);

  const handleLocationFound = (e: any) => {
    setCurrentPosition(e.latlng);
    map.flyTo(e.latlng, map.getZoom(), { duration: 2 });
  };

  const handleLocationError = (e: any) => {
    console.error("Ошибка при получении локации", e);
  };

  const handleCurrentLocation = () => {
    map.locate();
  };

  return (
    <>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {currentPosition && (
        <Marker position={currentPosition}>
          <Popup>Вы сейчас находитесь здесь!</Popup>
        </Marker>
      )}

      {data.waypoints.map((point, index) => (
        <Marker key={index} position={point}></Marker>
      ))}
      <Polyline positions={data.coordinates} color="red" weight={1.2} />
    </>
  );
};

const MemoizedMapContent = memo(MapContent);

export { MemoizedMapContent as MapContent };
