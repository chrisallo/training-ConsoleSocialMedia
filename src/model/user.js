
let _seed = 0;

export default class User {
  constructor({ nickname = 'Unknown' }) {
    this.userId = `usr_${++_seed}`;;
    this.nickname = nickname;
    this.friends = [];
    this.postings = [];
  }
  addFriend(user) {
    // TODO:
  }
  removeFriend(user) {
    // TODO:
  }
  getMutualFriends(user) {
    // TODO:
    return [];
  }
  createPosting(content) {
    // TODO:
    return null;
  }
  deletePosting(postingId) {
    // TODO:
  }
  getTimelinePostings() {
    // TODO:
    return [];
  }
}