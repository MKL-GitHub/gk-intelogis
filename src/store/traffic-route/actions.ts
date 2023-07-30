import { createAsyncThunk } from '@reduxjs/toolkit';
import { Point } from '@types';
import axios from 'axios';
import { TrafficRouteData } from './types';

const OSRM_API_URL = "http://router.project-osrm.org/route/v1/driving/";

export const loadTrafficRoute = createAsyncThunk<TrafficRouteData, Point[]>(
  'traffic-route/load',
  async (points: Point[]) => {
    const coordinates = points.join(';');
    const params = new URLSearchParams();

    params.append("geometries", "geojson");
    params.append("overview", "full");

    const url = `${OSRM_API_URL}${coordinates}?${params}`;

    const response = await axios.get(url);

    const data: TrafficRouteData = {
      coordinates: response.data.routes[0].geometry.coordinates,
      waypoints: response.data.waypoints.map((way: any) => way.location),
    }

    return data
  }
);