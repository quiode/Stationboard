export function urlParams() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  
  return urlParams;
}

export function station() {
  return urlParams().get("station")
}