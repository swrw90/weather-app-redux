import React from 'react';


class Weather extends React.Component {
    constructor() {
        super();
        this.state = {
            location: ""
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange() {

    }

    render() {
        return (
            <main>
                <form>
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

export default Weather;
