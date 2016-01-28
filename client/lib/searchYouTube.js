var searchYouTube = (options, callback) => {
  // console.log('in the function');
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    contentType: 'json',
    data: {
      key: window.YOUTUBE_API_KEY,
      part: 'id,snippet',
      q: options.q
    },
    success: function(data) {
      callback(data.items);
      // console.log('success!');
      // console.log(data);
    },
    error: function(err) {
      // console.error('no good!', err.responseText);
    }
  });
};

window.searchYouTube = searchYouTube;
