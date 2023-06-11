import { Component } from 'react';
import Button from './components/ButtonForHandling.js';

export default class EventHandle extends Component {
  render() {
    return (
      <div className="h-100 d-flex flex-center justify-content-center align-items-center">
        <Button>Try to click me!</Button>
      </div>
    )
  }
}