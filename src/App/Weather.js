import React from 'react';
import { getWeatherData } from '../Redux';
import { connect } from 'react-redux';

class Weather extends React.Component {
    constructor() {
        super();
        this.state = {
            location: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }

    handleChange(e) {
        this.setState({
            location: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.getWeatherData(this.state.location);
    }

    render() {
        return (
            <main>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange}
                        type="text"
                        name="location"
                        value={this.state.location}
                    />
                    <button>Get Weather</button>
                </form>
            </main>
        );
    }
}

export default connect(state => state, { getWeatherData })(Weather);
