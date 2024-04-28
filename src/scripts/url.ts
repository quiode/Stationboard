export function url() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);

  return urlParams;
}

export function station() {
  return url().get("station");
}

export function constructIframeURL(
  stationName: string,
  stationID: string,
  limit = 5,
) {
  const params = new URLSearchParams(
    "viewType=singleView&layout=1&showClock=true&showPerron=true&station_1_group=1",
  );

  params.set("station_1_quantity", String(limit));
  params.set("stationGroup1Title", stationName);
  params.set("station_1_name", stationName);
  params.set(
    "station_1_id",
    Number(stationID.substring(0, 2)) + ":" + Number(stationID.substring(2)),
  );

  return new URL("https://free.oevplus.ch/monitor/?" + params.toString());
}
