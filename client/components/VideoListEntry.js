var VideoListEntry = (props) => (
  <div className="video-list-entry">
    <div className="media-left media-middle">
      <img className="media-object" src={props.theVideoData.snippet.thumbnails.default.url} alt="" />
    </div>
    <div className="media-body">
      <div className="video-list-entry-title">{props.theVideoData.snippet.title}</div>
      <div className="video-list-entry-detail">{props.theVideoData.snippet.description}</div>
    </div>
  </div>
);

window.VideoListEntry = VideoListEntry;
