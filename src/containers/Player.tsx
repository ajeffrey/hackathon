import * as React from 'react';
import { connect } from 'react-redux';

interface DispatchProps {
  setTime: (time: number) => any;
}

export default connect(
  undefined,
  (dispatch): DispatchProps => ({
    setTime: (time: number) => dispatch({ type: 'SET_TIME', time }),
  })
)(class Player extends React.Component<DispatchProps> {
  render() {
    return (
      <div className="player">
        <video id="player" autoPlay controls>
          <source src="/static/video.mp4" type="video/mp4" />
        </video>
      </div>
    );
  }

  componentDidMount() {
    const video = document.getElementById('player') as HTMLVideoElement;
    video.currentTime = 25;

    video.ontimeupdate = (e) => {
      const time = video.currentTime;
      this.props.setTime(time);
    };
  }
});
