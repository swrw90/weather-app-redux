import React from 'react';


class Weather extends React.Component {
    constructor() {
        super();
        this.state = {
            location: ""
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({
            location: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();

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

export default Weather;
