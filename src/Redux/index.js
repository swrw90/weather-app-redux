import { createStore, applyMiddleware } from "redux";
import axios from "axios";
import thunk from "redux-thunk";

export function getWeatherData(locationStr) {
    return dispatch => {
        dispatch({
            type: "LOADING_START"
        });
        const corsUrl = "https://vschool-cors.herokuapp.com?url=";
        const googleUrl = "https://maps.googleapis.com/maps/api/geocode/json";
        const googleApiKey = "AIzaSyBvC3Fj8Tox0gKeVgUyZBuClcmJPWKZHBw";
        const geocodeUrl = `${corsUrl}${googleUrl}?address=${locationStr}&key=${googleApiKey}`;

        axios.get(geocodeUrl)
            .then(response => {
                const darkSkyBaseUrl = "https://api.darksky.net/forecast/22d6c6ed8f022dbccbc67b09daa4a6d5"
                const lat = response.data.results[0].geometry.location.lat;
                const long = response.data.results[0].geometry.location.lng;
                const darkSkyUrl = `${corsUrl}${darkSkyBaseUrl}/${lat},${long}`
                return axios.get(darkSkyUrl)
            })
            .then(response => {
                dispatch({
                    type: "GET_WEATHER_DATA",
                    data: response.data
                });
            });
    }
}

const initialState = {
    currentWeather: {},
    loading: false
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case "GET_WEATHER_DATA":
            return {
                ...state,
                currentWeather: action.data.currently,
                loading: false
            }
        case "LOADING_START":
            return {
                ...state,
                loading: true
            }
        default:
            return state;
    }
}

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
);

export default store;