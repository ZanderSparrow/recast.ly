var VideoDetails = (props) => (
  <div>
    <p>Views: {props.currentVideoDetails.views} | Number of Likes: {props.currentVideoDetails.likes} | Number of Dislikes: {props.currentVideoDetails.dislikes}</p>
  </div>
);

window.VideoDetails = VideoDetails;
