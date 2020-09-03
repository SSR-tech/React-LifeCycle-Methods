import React from "react";

class LifeCycles extends React.Component {
  // 1
  constructor() {
    super();
    console.log("Constructor!");
  }

  // 3
  componentDidMount() {
    console.log("ComponentDidMount!");
  }

  // 4
  componentDidUpdate() {
    console.log("ComponentDidUpdate!");
  }

  // 6
  componentWillUnmount() {
    console.log("ComponentWillUnmount!");
  }

  // 5 -> Super Important
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate!", nextProps);
    return nextProps.text !== this.props.test;
  }

  // 2
  render() {
    console.log("render!");
    return (
      <div className="lifecycles">
        <h3>LIFECYCLES COMPONENT</h3>
        {this.props.text}
      </div>
    );
  }
}

export default LifeCycles;

// ComponentDidMount() -> usually for API calls. We don't want our site drag due to the poor connection. Instead we display the basic components like the constructor and the render first and then update the API.

// ComponentDidUpdate() -> To update the further components of the DOM. It can be som NewProp, setState() or some forceUpdate().
