import axios from "axios"

const API_URL = "https://www.meteosource.com/api/v1/free/point"

const API_KEY = "z3oc886bvv0u8wao4lydiz1gl8736vm2bd80o7qj";

const getWeather = async (placeId) => {
    return axios.get(API_URL, {
        params: {
            key: API_KEY,
            place_id: placeId,
            sections: "all",
        }
    });
}

export {getWeather}