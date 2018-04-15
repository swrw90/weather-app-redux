import React, { Component } from "react";
import { connect } from "react-redux";

import { getWeatherData } from "../Redux";

class Weather extends Component {
    constructor() {
        super();
        this.state = {
            location: ""
        }
    }

    handleChange = (e) => {
        this.setState({
            location: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.getWeatherData(this.state.location);
    }

    render() {
        let display;
        if (this.props.loading) {
            display = <h2>Loading ...</h2>
        } else if (this.props.currentWeather.temperature) {
            display = <h2>{Math.round(this.props.currentWeather.temperature)} degrees</h2>
        } else {
            display = null;
        }

        return (
            <main>
                <form onSubmit={this.handleSubmit}>
                    <input
                        onChange={this.handleChange}
                        name="location"
                        value={this.state.location}
                        type="text"
                    />
                    <button>Get Weather</button>
                </form>

                {display}

            </main>
        )
    }
}

export default connect(state => state, { getWeatherData })(Weather);