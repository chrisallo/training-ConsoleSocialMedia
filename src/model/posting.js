
let _seed = 0;

export default class Posting {
  constructor({
    userId = null,
    content = null
  }) {
    this.postingId = `pst_${++_seed}`;
    this.userId = userId;
    this.content = content;
    this.createdAt = new Date().getTime();
  }
}