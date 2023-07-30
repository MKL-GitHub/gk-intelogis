import { Point } from "@types";

export interface MapRoute {
  id: number;
  points: Point[];
}

export interface MapRoutesState {
  data: MapRoute[];
}