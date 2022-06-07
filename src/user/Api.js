import axios from "axios";

const baseUrl = process.env.REACT_APP_GITHUB_BASE_API_URL;
const token = process.env.REACT_APP_GITHUB_PERSONAL_TOKEN;

export function getRepos(payload) {
  const { username } = payload;
  return axios({
    method: "GET",
    url: `${baseUrl}/users/` + username + `/repos`,
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
}
