import React from "react";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }
  componetWillUnMount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({ date: new Date() });
  }

  render() {
    return (
      <>
        <h2>hello</h2>
        <p>{this.state.date.toLocaleTimeString()}</p>
      </>
    );
  }
}

export default Clock;
