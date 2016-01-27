class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentVideoIndex: 0
    };
  }

  render() {
    return (
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
  }
}

ReactDOM.render(<App />, document.getElementById('app'));