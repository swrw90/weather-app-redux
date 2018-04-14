import { createStore } from 'redux';

const initialState = {}

export function getWeatherData(locationStr) {
    // give a location string get coordinates from google api
    //with coordinates get weather from dark sky api

    console.log("test");
}



function reducer(state = initialState, action) {
    switch (action.type) {
        default:
            return state
    }
}

const store = createStore(reducer)

export default store;