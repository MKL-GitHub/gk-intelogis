import { createSelector } from "reselect";

import { RootState } from "@store";
import { MapRoute } from "@store/types";

const mapRoutesData = (state: RootState): MapRoute[] => state.mapRoutes.data;

export const selectMapRoutesData = createSelector([mapRoutesData], data => data);