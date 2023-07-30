import { createSelector } from "reselect";

import { RootState } from "@store";
import { TrafficRouteState } from "./types";

const trafficRouteState = (state: RootState): TrafficRouteState => state.trafficRoute;

export const selectTrafficRouteState = createSelector([trafficRouteState], state => state);