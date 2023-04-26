let apiUrl;
const apiUrls = {
    production: "https://duck-pics.herokuapp.com",
    development: "http://localhost:8080",
};

if (window.location.hostname === "localhost") {
    apiUrl = apiUrls.development;
} else {
    apiUrl = apiUrls.production;
}

export default apiUrl;
