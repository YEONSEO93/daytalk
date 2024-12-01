export default class TweetService {
  tweets = [
    {
      id: 1,
      text: 'Welcome to DayTalk!',
      createdAt: '2021-05-09T04:20:57.000Z',
      name: 'Yeonseo',
      username: 'YS',
      url: 'https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-1.png',
    },
  ];

  async getTweets(username) {
    return username
      ? this.tweets.filter((tweet) => tweet.username === username)
      : this.tweets;
  }

  async postTweet(text) {
    const tweet = {
      id: Date.now(),
      createdAt: new Date(),
      name: 'Santa',
      username: 'HoHo',
      text,
    };
    this.tweets.push(tweet);
    return tweet;
  }

  async deleteTweet(tweetId) {
    this.tweets = this.tweets.filter((tweet) => tweet.id !== tweetId);
  }

  async updateTweet(tweetId, text) {
    const tweet = this.tweets.find((tweet) => tweet.id === tweetId);
    if (!tweet) {
      throw new Error('Talks not found!');
    }
    tweet.text = text;
    return tweet;
  }
}
