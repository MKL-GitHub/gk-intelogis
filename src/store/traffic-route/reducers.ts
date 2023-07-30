import { createSlice, ActionReducerMapBuilder, PayloadAction } from '@reduxjs/toolkit';

import { TrafficRouteData, TrafficRouteState } from './types';
import { loadTrafficRoute } from './actions';

const initialState: TrafficRouteState = {
  data: {
    coordinates: [],
    waypoints: [],
  },
  loading: false,
  error: null,
};

const reducers = {};

const extraReducers = (builder: ActionReducerMapBuilder<TrafficRouteState>) => {
  builder
    .addCase(loadTrafficRoute.pending, state => {
      state.loading = true;
      state.error = null;
    })
    .addCase(loadTrafficRoute.fulfilled, (state, action: PayloadAction<TrafficRouteData>) => {
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    })
    .addCase(loadTrafficRoute.rejected, (state, action: any) => {
      state.loading = false;
      state.error = action.error.message;
    })
}

const trafficRouteSlice = createSlice({
  name: 'traffic-route',
  initialState,
  reducers,
  extraReducers,
});

export const { } = trafficRouteSlice.actions;

export const trafficRouteReducer = trafficRouteSlice.reducer;
