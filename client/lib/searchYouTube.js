var searchYouTube = (options, callback) => {
  // console.log('in the function');
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    contentType: 'json',
    data: {
      part: 'id,snippet',
      q: options.q,
      maxResults: options.max,
      key: options.key,
      type: 'video',
      videoEmbeddable: 'true'
    },
    success: function(data) {
      if(data) {
        callback(data.items);
      }
    },
    error: function(err) {
      console.log("You got the " + JSON.stringify(err) + " error. Oh no.");
    }
  });
};

window.searchYouTube = searchYouTube;
