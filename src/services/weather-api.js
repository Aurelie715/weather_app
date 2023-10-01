import axios from "axios"

const API_url = "https://www.meteosource.com/api/v1/free/point"

const parameters = {
    key: "z3oc886bvv0u8wao4lydiz1gl8736vm2bd80o7qj",
    place_id: "Tokyo",
    sections: "all"
}

const getWeather = async () => {
    return axios.get(API_url, {params: parameters});
}

export {getWeather}