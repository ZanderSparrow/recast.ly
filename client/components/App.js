class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentVideoIndex: 0,
      listOfVideos: exampleVideoData
    };
  }

  changeVideo(e) {
    console.log(e.target.id);
    this.setState({
      currentVideoIndex: e.target.id
    });
  } 

  render() {
    return (
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer currentVideo={this.state.currentVideoIndex} mainVideo={this.state.listOfVideos}/>
        </div>
        <div className="col-md-5">
          <VideoList theVideos={this.state.listOfVideos} changeVideoFn={this.changeVideo.bind(this)}/>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));