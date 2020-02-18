import React, { Component } from "react";
import Counter from "./counterComponent";
class Counters extends Component {

  render() {
    return (
      <div>
        <button
          // onClick={this.resetHndler}
          onClick={() => this.props.onReset()}
          className="btn btn-primary btn-small m-2"
        >
          Reset
        </button><br></br>
        {this.props.counters.map(counter => (
          <Counter
            key={counter.id}
            value={counter.value}
            selected={true}
            // onDelete={this.handleDelete}
            onDelete={this.props.onDecrement}
            onIncrement={ this.props.onIncrement}
           
            // onIncrement={this.handleIncrement}
            counter={counter}

          > <h4>Titles</h4></Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
