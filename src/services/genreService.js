import http from "./httpService";

export function getGenres() {
  return http.get("https://vidly-app-001.firebaseio.com/api/genres");
}
