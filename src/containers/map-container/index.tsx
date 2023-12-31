import { FC, useCallback } from "react";

import { MapContainer as MapLeafletContainer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import { MapContent, MapRoutes } from "@components";
import { useAppDispatch, useAppSelector } from "@store";
import { loadTrafficRoute } from "@store/actions";
import { selectMapData } from "@store/selectors";
import { Point } from "@types";
import "./index.scss";

const zoom = 13;

export const MapContainer: FC = () => {
  const appDispatch = useAppDispatch();

  const select = useAppSelector(selectMapData);

  const callbacks = {
    onRouteClick: useCallback((points: Point[]) => {
      appDispatch(loadTrafficRoute(points));
    }, []),
  };

  return (
    <div className="MapContainer">
      <MapRoutes data={select.routes} onRouteClick={callbacks.onRouteClick} />
      <MapLeafletContainer
        className="MapContainer-map"
        center={[59, 30]}
        zoom={zoom}
      >
        <MapContent data={select.trafficRouteData} />
      </MapLeafletContainer>
    </div>
  );
};
