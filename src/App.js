import React from "react";
import "./App.css";

class App extends React.Component {

    state = { advice: '' }

    componentDidMount() {
        this.fetchAdvice();
    }

    fetchAdvice = () => {
        fetch("https://api.adviceslip.com/advice")
          .then(response => response.json())
          .then(data => {
            const advice = data.slip.advice;
            console.log("Data fetched:", advice);
            this.setState({ advice });
          })
          .catch(error => {
            console.error("Error fetching data:", error);
          });
    }

    handleButtonClick = () => {
        this.fetchAdvice();
    }

    render() {
        return (
            <div className="app">
                <div className="card">
                    <h1 className="heading">{this.state.advice}</h1>
                    <button className="glow-on-hover" onClick={this.handleButtonClick}>
                        <span>Give Advice!</span>
                    </button>
                </div>
            </div>
        );
    }
}

export default App;
