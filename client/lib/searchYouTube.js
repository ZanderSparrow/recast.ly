var searchYouTube = (options, callback) => {
  console.log('in the function');
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/videos',
    type: 'GET',
    contentType: 'application/json',
    data: {
      key: YOUTUBE_API_KEY
    },
    success: function(data) {
      // callback(data);
      console.log('success!');
    },
    error: function(err) {
      console.error('no good!', err.responseText);
    }
  });
};

searchYouTube();

window.searchYouTube = searchYouTube;
