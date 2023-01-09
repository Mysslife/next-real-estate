import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    baseURL: baseUrl,
    headers: {
        'X-RapidAPI-Key': '3449231dcfmsh92fe04d582215f9p1eb8bbjsn7e6bb31ca646',
        'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
    },
  });

  return data;
};
