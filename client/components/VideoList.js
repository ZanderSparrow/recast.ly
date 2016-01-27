var VideoList = (props) => (
  <div className="video-list media">
    {props.theVideos.map(videoData => <VideoListEntry theVideoData={videoData} />)}
  </div>
);

window.VideoList = VideoList;
