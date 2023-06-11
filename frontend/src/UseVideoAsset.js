import { Component } from 'react';
import ReactPlayer from 'react-player';

export default class UseVideoAsset extends Component {
  render() {
    return (
      <div className="w-100 h-100 d-flex justify-content-center align-items-center">
        <ReactPlayer 
          url={require('./assets/videos/aquarium.mp4')}
          playing={true}
          controls={true}
          loop={true}
        />
      </div>
    )
  }
}