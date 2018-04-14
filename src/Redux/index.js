import { createStore } from 'redux';
import axios from 'axios';
import thunk from 'thunk';


// give a location string get coordinates from google api
//with coordinates get weather from dark sky api

export function getWeatherData(locationStr) {
    return dispatch => {
        const corsUrl = "https://vschool-cors.herokuapp.com?url="
        let googleUrl = 'https://maps.googleapis.com/maps/api/geocode/json/';
        const googleApiKey = "AIzaSyAp_gcAL9g64umPJUNU10vjP3Y-MHbmmQo";
        const geocodeUrl = `${corsUrl}${googleUrl}?address=${locationStr}&key=${googleApiKey}`;

        axios.get(geocodeUrl).then(response => {
            const darkSkyBaseUrl = 'https://api.darksky.net/forecast/22d6c6ed8f022dbccbc67b09daa4ad5';
            const long = response.data.results[0].geometry.location.lng;
            const lat = response.data.results[0].geometry.location.lat;
            const darkSkyUrl = `${corsUrl}${darkSkyBaseUrl}/${lat},${long}`;
            return axios.get(darkSkyUrl);
        }).then(response => {
            dispatch( {
                type: 'GET_WEATHER_DATA'
            })
        })
    }
}

const initialState = {}

function reducer(state = initialState, action) {
    switch (action.type) {
        default:
            return state
    }
}

const store = createStore(reducer, applyMiddleware(thunk))

export default store;