import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: 'Rico Kamau',
        bio: 'Software Developer',
        imgSrc: 'https://cdn.dribbble.com/users/8309782/screenshots/17980838/media/fd52a566138166ba3d8db20f685aed46.jpg?resize=400x300&vertical=center',
        profession: 'Developer',
      },
      shows: false,
      mountedTime: null,
      interval: 0,
    };
    this.toggleShow = this.toggleShow.bind(this);
  }

  toggleShow() {
    this.setState({ shows: !this.state.shows });
  }

  componentDidMount() {
    const mountedTime = new Date();
    this.setState({ mountedTime });

    this.interval = setInterval(() => {
      const currentTime = new Date();
      const interval = Math.floor((currentTime - mountedTime) / 1000);
      this.setState({ interval });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { person, shows, interval } = this.state;

    return (
      <div className="App">
        <button onClick={this.toggleShow}>
          {shows ? 'Hide Profile' : 'Show Profile'}
        </button>
        {shows && (
          <div className="profile">
            <h1>{person.fullName}</h1>
            <p>{person.bio}</p>
            <img src={person.imgSrc} alt={person.fullName} />
            <p>{person.profession}</p>
          </div>
        )}
        <p>Time since last mounted: {interval} seconds</p>
      </div>
    );
  }
}

export default App;
