import { Component } from "react";
import Child from "./components/ClassesInheretingPropsChild.js";

export default class Parent extends Component {
  render () {
    return (
      <div className="d-flex flex-column flex-justify-center p-4 gap-4">
        <h1 className="text-center text-white bg-success p-1">{this.props.greetings}</h1>
        <Child {...this.props} />
      </div>
    )
  }
}