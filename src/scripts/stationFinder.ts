import axios from "axios";

export interface Station {
  id: string;
  name: string;
  type: string;
  x: string;
  y: string;
  lon: number;
  lat: number;
  request: any;
  eof: number;
}

export async function getStation(stationName: string) {
  const response = await axios.get<Station>(
    `https://search.ch/timetable/api/station.json`,
    {
      params: {
        stop: stationName,
      },
    },
  );

  return response.data;
}
