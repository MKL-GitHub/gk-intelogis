import { createSlice } from '@reduxjs/toolkit';

import { MapRoutesState } from './types';

const initialState: MapRoutesState = {
  data: [
    {
      id: 1,
      points: [
        [30.29496392, 59.84660399],
        [30.42423701, 59.82934196],
        [30.38064206, 59.83567701],
      ],
    },
    {
      id: 2,
      points: [
        [30.42423701, 59.82934196],
        [30.41705607, 59.82761295],
        [30.29496392, 59.84660399],
      ],
    },
    {
      id: 3,
      points: [
        [30.38064206, 59.83567701],
        [30.29496392, 59.84660399],
        [30.41705607, 59.82761295],
      ],
    },
  ],
};

const reducers = {};

const mapRoutesSlice = createSlice({
  name: 'map-routes',
  initialState,
  reducers
});

export const { } = mapRoutesSlice.actions;

export const mapRoutesReducer = mapRoutesSlice.reducer;
