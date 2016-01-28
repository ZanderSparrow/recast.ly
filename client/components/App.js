class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentVideo: {},
      listOfVideos: []
    };

  }

  componentDidMount() {
    var self = this;
    searchYouTube({q: 'cats', max: 5, key: YOUTUBE_API_KEY}, function(theData) {
      self.setState({
        currentVideo: theData[0],
        listOfVideos: theData
      });
    });
  }

  changeVideo(e) {
    this.setState({
      currentVideo: this.state.listOfVideos[e.target.id]
    });
  }

  debouncedSearchVideo(query) {
    var timeout;
    var wait = 400;
    var func = this.searchVideo;
    var self = this;
    var later = function() {
      timeout = null;
      func.call(self, query);
    }
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  }

  searchVideo(query) {
    var self = this;
    searchYouTube({q: query.target.value, max: 5, key: YOUTUBE_API_KEY}, function(theData) {
      self.setState({
        currentVideo: theData[0],
        listOfVideos: theData
      });
    });
  }

  render() {
    return (
      <div>
        <Nav searchFn={this.debouncedSearchVideo.bind(this)} />
        <div className="col-md-7">
          <VideoPlayer currentVideo={this.state.currentVideo} />
        </div>
        <div className="col-md-5">
          <VideoList theVideos={this.state.listOfVideos} changeVideoFn={this.changeVideo.bind(this)}/>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
