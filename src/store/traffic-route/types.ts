import { Point } from "@types";

export interface TrafficRouteData {
  coordinates: Point[],
  waypoints: Point[],
}

export interface TrafficRouteState {
  data: TrafficRouteData;
  loading: boolean;
  error: string | null;
}