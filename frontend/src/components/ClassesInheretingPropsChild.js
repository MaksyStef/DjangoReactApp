import { Component } from "react";

export default class Child extends Component {
  render () {
    return (
      <p>{this.props.greetings}! Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti nulla voluptatibus corrupti excepturi, molestias quisquam at neque numquam fugit iure tempore, dolores cum. Culpa explicabo ratione, aspernatur nisi in rem.</p>
    )
  }
}