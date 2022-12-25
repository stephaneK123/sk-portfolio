import axios from "axios";

const authEndpoint = "https://accounts.spotify.com/authorize?";
const clientId = "5d552214576a4f96ac894869379eaa94";
const redirectUri = "http://localhost:3000";
const scopes = ["user-library-read", "playlist-read-collaborative", "playlist-read-private"];
const userID = "12132658213";

export const tempToken =
    "BQALfiRFvwbxEXRhgNZBCyw3Za8K3U1-I0eor1f34pp2gKcV3tIrblVrADjFeK5qYC8HnwCVlH77Ekg1OFrnjZHA_Ksup3yZlGVij8RhGwr4Qz6TVqsGoWRKTiipNFO7FUuZcpQFnMdaAUN0lZH6QznhWNiyz4ecI1A3HlJeFF2jyICHs_GINy0yzPIVEVjp";

export const loginEndpoint = `${authEndpoint}client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
    "%20"
)}&response_type=token&show_dialog=true`;

export const tokenEndPoint = "";

const apiClient = axios.create({
    baseURL: "https://api.spotify.com/v1/",
});

export const setClientToken = (token) => {
    apiClient.interceptors.request.use(async function (config) {
        config.headers.Authorization = "Bearer " + token;
        return config;
    });
};

export default apiClient;
