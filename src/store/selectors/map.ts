import { createSelector } from "reselect";

import { RootState } from "@store";

const mapData = (state: RootState) => ({
  routes: state.mapRoutes.data,
  trafficRouteData: state.trafficRoute.data
});

export const selectMapData = createSelector([mapData], data => data);