var VideoPlayer = (props) => {
  if (!props.currentVideo.id) {
    return (<div><h1>Loading...<img src="http://media.irishcentral.com/images/MI+Grumpy+sad+annoying+annoyed+Santa+Claus+Christmas+Getty.jpg"/></h1></div>)
  } else {
    var videoLink = `https://www.youtube.com/embed/${props.currentVideo.id.videoId}?autoplay=1`;
    return (
      <div className="video-player">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe className="embed-responsive-item" src={videoLink} allowFullScreen></iframe>
        </div>
        <div className="video-player-details">
          <h3>{props.currentVideo.snippet.title}</h3>
          <div className="main-video-description" onClick={props.theDeetsFn}>{props.currentVideo.snippet.description}</div>
          <VideoDetails currentVideoDetails={props.currentVideoDetails} />
        </div>
      </div>
    )
  }
};

window.VideoPlayer = VideoPlayer;
