var VideoList = (props) => (
  <div className="video-list media">
    {props.theVideos.map((videoData, i) => <VideoListEntry idNum={i} theVideoData={videoData} changeVideoFn={props.changeVideoFn}/>)}
  </div>
);

window.VideoList = VideoList;
