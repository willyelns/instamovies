import HttpClient from "./HttpClient";
import { ENVIRONMENT } from "../constants/environment";

let images = null;

const MovieConfig = {
  getConfig: async () => {
    if (!images) {
      images = await HttpClient.get(
        `${ENVIRONMENT.API.BASE_URL}/configuration?api_key=${ENVIRONMENT.API.KEY}`
      );
    }
    return images;
  }
};

/// Singleton pattern to prevent the backend request every time
Object.freeze(MovieConfig);
export default MovieConfig;
