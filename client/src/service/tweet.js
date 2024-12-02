export default class TweetService {
  constructor(http) {
    this.http = http;
  }

  async getTweets(username) {
    const query = username ? `?username=${username}` : '';
    return this.http.fetch(`/talks${query}`, {
      method: 'GET',
    });
  }

  async postTweet(text) {
    return this.http.fetch(`/talks`, {
      method: 'POST',
      body: JSON.stringify({ text, username: 'YEONSEO', name: 'YEONSEO' }),
    });
  }

  async deleteTweet(talkId) {
    return this.http.fetch(`/talks/${talkId}`, {
      method: 'DELETE',
    });
  }

  async updateTweet(talkId, text) {
    return this.http.fetch(`/talks/${talkId}`, {
      method: 'PUT',
      body: JSON.stringify({ text }),
    });
  }
}
