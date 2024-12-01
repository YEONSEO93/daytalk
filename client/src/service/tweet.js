export default class TweetService {
  
  constructor(baseURL = 'http://localhost:8080') {
  this.baseURL = baseURL;
}

  async getTweets(username) {
    let query = username ? `?username=${username}` : '';
    const response = await fetch(`${this.baseURL}/talks${query}`, {
      method: 'GET',
      headers: {'Content-Type': 'application/json' },
    });
    const data = await response.json();
    if(response.status !==200) {
      throw new Error(data.message);
    }
    return data;
  }

  async postTweet(text) {
    const response = await fetch(`${this.baseURL}/talks`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json' },
      body: JSON.stringify({ text, username: 'yeonseo', name: 'YEONSEO'})
    });
    const data = await response.json();
    if(response.status !==201) {
      throw new Error(data.message);
    }
    return data;
  }

  async deleteTweet(talkId) {
    const response = await fetch(`${this.baseURL}/talks/${talkId}`, {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json' },
    });
    if (response.status !== 204) {
      const data = await response.json(); // Parse response body in case of error
      throw new Error(data.message);
    }
  }

  async updateTweet(talkId, text) {
    const response = await fetch(`${this.baseURL}/talks/${talkId}`, {
      method: 'PUT',
      headers: {'Content-Type': 'application/json' },
      body: JSON.stringify({ text})
    });
    const data = await response.json();
    if(response.status !==200) {
      throw new Error(data.message);
    }
    return data;
  }
}