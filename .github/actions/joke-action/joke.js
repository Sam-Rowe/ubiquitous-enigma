const request = require("request-promise");

const options = {
    method: "GET",
    uri: "https://icanhazdadjoke.com/",
    headers: {
        Accept: "application/json",
        "User-Agent":
          "Writing JavaScript action GitHub Skills course."
    },
    json: true
};

async function getJoke() {
    try {
        const response = await request(options);
        return response.joke;
    } catch (error) {
        return error;
    }
}

module.exports = getJoke;