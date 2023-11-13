const GOOGLE_API_KEY = "AIzaSyAzBPllbD6PcGsZa7KE-nSUwmG3QT8fzDs";

export const YOUTUBE_VIDEO_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const YOUTUBE_SEARCH_PAGE_API =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&key=" +
  GOOGLE_API_KEY +
  "&q=";

export const commentsData = [
  {
    name: "Ambuj Kumar",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    replies: [
      {
        name: "Ambuj Kumar",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing",
        replies: [
          {
            name: "Ambuj Kumar",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing",
            replies: [
              {
                name: "Ambuj Kumar",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing",
                replies: [
                  {
                    name: "Ambuj Kumar",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing",
                    replies: [
                      {
                        name: "Ambuj Kumar",
                        text: "Lorem ipsum dolor sit amet, consectetur adipiscing",
                        replies: [],
                      },
                      {
                        name: "Ambuj Kumar",
                        text: "Lorem ipsum dolor sit amet, consectetur adipiscing",
                        replies: [
                          {
                            name: "Ambuj Kumar",
                            text: "Lorem ipsum dolor sit amet, consectetur adipiscing",
                            replies: [
                              {
                                name: "Ambuj Kumar",
                                text: "Lorem ipsum dolor sit amet, consectetur adipiscing",
                                replies: [],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            name: "Ambuj Kumar",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing",
            replies: [],
          },
          {
            name: "Ambuj Kumar",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing",
            replies: [],
          },
          {
            name: "Ambuj Kumar",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing",
            replies: [
              {
                name: "Ambuj Kumar",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing",
                replies: [],
              },
              {
                name: "Ambuj Kumar",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing",
                replies: [],
              },
              {
                name: "Ambuj Kumar",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing",
                replies: [],
              },
              {
                name: "Ambuj Kumar",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing",
                replies: [],
              },
            ],
          },
        ],
      },
      {
        name: "Ambuj Kumar",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing",
        replies: [],
      },
      {
        name: "Ambuj Kumar",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing",
        replies: [],
      },
      {
        name: "Ambuj Kumar",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing",
        replies: [],
      },
    ],
  },
  {
    name: "Ambuj Kumar",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    replies: [],
  },
  {
    name: "Ambuj Kumar",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    replies: [],
  },
  {
    name: "Ambuj Kumar",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    replies: [],
  },
  {
    name: "Ambuj Kumar",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    replies: [],
  },
];
