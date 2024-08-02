// src/App.js
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: 'John Doe',
        bio: 'A passionate developer.',
        imgSrc: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=600',
        profession: 'Software Engineer'
      },
      show: false,
      timer: 0
    };

    // Bind methods
    this.toggleShow = this.toggleShow.bind(this);
  }

  componentDidMount() {
    // Set up the interval to update the timer every second
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        timer: prevState.timer + 1
      }));
    }, 1000);
  }

  componentWillUnmount() {
    // Clear the interval when the component unmounts
    clearInterval(this.interval);
  }

  toggleShow() {
    this.setState((prevState) => ({
      show: !prevState.show
    }));
  }

  render() {
    const { person, show, timer } = this.state;
    return (
      <div className="App">
        <button onClick={this.toggleShow}>
          {show ? 'Hide Profile' : 'Show Profile'}
        </button>
        {show && (
          <div className="profile">
            <h1>{person.fullName}</h1>
            <p>{person.bio}</p>
            <img src={person.imgSrc} alt={person.fullName} />
            <p><strong>Profession:</strong> {person.profession}</p>
          </div>
        )}
        <p>Time since last mount: {timer} seconds</p>
      </div>
    );
  }
}

export default App;
