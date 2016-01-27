var VideoList = () => (
  <div className="video-list media">
    {exampleVideoData.map(videoData => <VideoListEntry theVideoData={videoData} />)}
  </div>
);

window.VideoList = VideoList;
