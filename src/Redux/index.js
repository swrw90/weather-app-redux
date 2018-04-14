import { createStore } from 'redux';
import axios from 'axios';

const initialState = {}

    // give a location string get coordinates from google api
    //with coordinates get weather from dark sky api

export function getWeatherData(locationStr) {
    let rootUrl = 'https://maps.googleapis.com/maps/api/geocode/json/';
    const apiKey = "AIzaSyAp_gcAL9g64umPJUNU10vjP3Y-MHbmmQo";
    const url = rootUrl + `?address=${locationStr}&key=`;

    axios.get(url).then(response => console.log(response));

    console.log(`Location: + ${locationStr}`);
    return {
        type: 'GET_WEATHER_DATA'
    }
}



function reducer(state = initialState, action) {
    switch (action.type) {
        default:
            return state
    }
}

const store = createStore(reducer)

export default store;