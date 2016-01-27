var VideoPlayer = (props) => {
  console.log(props);
  var videoLink = `https://www.youtube.com/embed/${props.mainVideo[0].id.videoId}?autoplay=1`;
  return (
    <div className="video-player">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={videoLink} allowFullScreen></iframe>
      </div>
      <div className="video-player-details">
        <h3>{props.mainVideo[0].snippet.title}</h3>
        <div>{props.mainVideo[0].snippet.description}</div>
      </div>
    </div>
  )
};

window.VideoPlayer = VideoPlayer;
