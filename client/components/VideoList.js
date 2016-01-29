var VideoList = (props) => (
  <div className="video-list media">
    {props.theVideos.map((videoData, i) => <VideoListEntry key={videoData.etag} idNum={i} theVideoData={videoData} changeVideoFn={props.changeVideoFn}/>)}
  </div>
);

window.VideoList = VideoList;
