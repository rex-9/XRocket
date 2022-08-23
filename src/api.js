class API {
    baseUrl = 'https://api.spacexdata.com/v3';

    rocketEndPoint = `${this.baseUrl}/rockets`;

    missionEndPoint = `${this.baseUrl}/missions`;
}

const api = new API();
export default api;
