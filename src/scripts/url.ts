export function url() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);

  return urlParams;
}

export function title() {
  return url().get("title");
}

export function stations() {
  const stations = [] as string[];

  let count = 0;
  while (count == 0 || url().get("station" + count)) {
    const station = url().get("station" + count);

    if (station) {
      stations.push(station);
    }

    count++;
  }

  return stations;
}

export function constructIframeURL(
  stations: { name: string; id: string }[],
  title: string | null,
  limit = 5,
) {
  const params = new URLSearchParams(
    "viewType=singleView&layout=1&showClock=true&showPerron=true",
  );

  params.set("stationGroup1Title", title ? title : stations[0].name);

  for (let i = 0; i < stations.length; i++) {
    const station = stations[i];

    params.set(`station_${i + 1}_quantity`, String(limit));
    params.set(`station_${i + 1}_name`, station.name);
    params.set(`station_${i + 1}_group`, String(1));
    params.set(
      `station_${i + 1}_id`,
      Number(station.id.substring(0, 2)) +
        ":" +
        Number(station.id.substring(2)),
    );
  }

  return new URL("https://free.oevplus.ch/monitor/?" + params.toString());
}
