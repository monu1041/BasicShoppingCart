import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });

    this.setState({ counters });
  };

  handleIncrement = counter => {
    //console.log(this.state.counters);
    const counters = [...this.state.counters];

    const index = counters.indexOf(counter);
    console.log(this.state.counters[0],index);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDelete = counterId => {
    // console.log("Event handler called",counterId);
    const counters = this.state.counters.filter(count => count.id != counterId);
    this.setState({ counters });
  };
  render() {
    return (
      <React.Fragment>
        <button className="btn btn-primary btn-sm m-2" onClick={this.handleReset}>Reset</button>
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            value={counter.value}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            counter = {counter}
            id={counter.id}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Counters;
