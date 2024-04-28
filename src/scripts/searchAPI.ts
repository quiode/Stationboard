import axios from 'axios'

const BASE_API_URL = 'https://search.ch/timetable/api/'
const RESULT_LIMIT = 10

export interface StationboardResponse {
  stop: Stop
  connections: Connection[]
  request: any
  eof: number
}

export interface Stop {
  id: string
  name: string
  type: string
  x: string
  y: string
  lon: number
  lat: number
}

export interface Connection {
  time: string
  "*G"?: string
  "*L"?: string
  "*Z"?: string
  type: string
  line: string
  operator: string
  color: string
  type_name: string
  terminal: Terminal
  arr_delay?: string
  dep_delay?: string
}

export interface Terminal {
  id: string
  name: string
  x: number
  y: number
  lon: number
  lat: number
}

export async function getTimetable(station: string, limit = RESULT_LIMIT) {
  const response = await axios.get<StationboardResponse>(BASE_API_URL + 'stationboard.json', {
    params: {
      stop: station,
      show_delays: 1,
      show_tracks: 1,
      show_subsequent_stops: 0,
      mode: 'depart',
      limit: limit
    }
  })

  return response.data;
}

