import { combineReducers } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useSelector } from 'react-redux';

import { mapRoutesReducer } from './map-routes';
import { trafficRouteReducer } from './traffic-route';

export const rootReducer = combineReducers({
  mapRoutes: mapRoutesReducer,
  trafficRoute: trafficRouteReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;