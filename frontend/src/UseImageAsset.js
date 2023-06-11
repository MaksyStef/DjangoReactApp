import Tree from './assets/images/tree.jpg';
import { Component } from 'react';

export default class UseImageAsset extends Component {
  render() {
    return (
      <div className="w-100 h-100 d-flex p-4 justify-content-between align-items-center flex-wrap flex-gap-2">
        <img
          className='w-25 m-auto'
          src={Tree}
          alt="Image of a tree imported via import statement" 
        />
        <img
          className='w-25 m-auto'
          src={require('./assets/images/tree.jpg')}
          alt="Image of a tree imported via require statement" 
        />
      </div>
    )
  }
}