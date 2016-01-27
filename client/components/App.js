var App = () => (
  <div>
    <Nav />
    <div className="col-md-7">
      <VideoPlayer mainVideo={exampleVideoData}/>
    </div>
    <div className="col-md-5">
      <VideoList theVideos={exampleVideoData}/>
    </div>
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));