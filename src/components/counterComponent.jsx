import React, { Component } from "react";
import { thisExpression } from "@babel/types";

class Counter extends Component {
  state = {
    count: this.props.counter.value,
    tags: []
  };

  displayData = {};

  styles = {
    fontSize: 15,
    fontWeight: "bold"
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p></p>;
    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  handleIncrement = () => {
    this.state.count++;
    this.setState({ value: this.state.count + 1 });
  };

  render() {

    let classes = this.getBadgeMethode();
    //this.componentDidMount();

    return (
      <React.Fragment>
        <span style={this.styles} className={classes}>
          {this.formatCount()}
        </span>
        <button
          onClick={() =>this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-small"
        >
          Increment
        </button>

        <div className="btn btn-danger btn-small" onClick={() => this.props.onDelete(this.props.counter.id)}>Delete</div>

        {this.renderTags()}
      </React.Fragment>

    );
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(data => {
        this.setState({ displayData: data });
      })
      .catch(console.log);
  }

  getBadgeMethode() {
   

    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {

    //const { count } = this.state;
    return this.props.counter.value === 0 ? "Zero" : this.props.counter.value;
    
  }
}

export default Counter;
