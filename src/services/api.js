import axios from "axios";

const BASE_URL = "http://jsonplaceholder.typicode.com";

export default {
  async fetchImages(pagination) {
    const { limit, page } = pagination;
    let endpoint = BASE_URL + "/photos";

    if (pagination.page && pagination.limit) {
      endpoint = `${endpoint}?_page=${page}&_limit=${limit}`;
    }

    const response = await axios.get(endpoint);

    if (response)
      return {
        data: response.data,
        totalCount: response.headers["x-total-count"]
      };
    return null;
  },
  async fetchImage(id) {
    let endpoint = BASE_URL + `/photos/${id}`;

    const response = await axios.get(endpoint);

    if (response) return response.data;
    return null;
  }
};
