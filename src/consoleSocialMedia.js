import User from './model/user';
import Posting from './model/posting';

const test = () => {
  console.log('## console social media launched.');

  /// create simulation data
  const users = [
    new User({ nickname: 'Andy' }),
    new User({ nickname: 'Becky' }),
    new User({ nickname: 'Charlotte' }),
    new User({ nickname: 'Dave' }),
    new User({ nickname: 'Ellen' }),
    new User({ nickname: 'Freedman' })
  ];
  const me = users[0];
  console.log('# all users:', users);

  /// my friendship
  [1, 2, 4, 5].forEach(idx => me.addFriend(users[idx]));
  me.removeFriend(users[2]);
  console.log('# my friends:', me.friends); // it should contain Becky, Ellen and Freedman only

  /// other's friendship
  [0, 3].forEach(idx => users[1].addFriend(users[idx]));
  [0, 1, 3, 4].forEach(idx => users[2].addFriend(users[idx]));
  [2, 4].forEach(idx => users[3].addFriend(users[idx]));
  [1, 2, 5].forEach(idx => users[4].addFriend(users[idx]));
  [3].forEach(idx => users[5].addFriend(users[idx]));

  /// mutual friends
  console.log('# mutual friends with Charlotte, Dave, Freedman:');
  console.log(me.getMutualFriends(users[2])); // Becky, Ellen
  console.log(me.getMutualFriends(users[3])); // Ellen
  console.log(me.getMutualFriends(users[5])); // (empty)

  /// all postings
  const postings = [
    users[2].createPosting('charlotte-1'),
    users[4].createPosting('ellen-1'),
    users[2].createPosting('charlotte-2'),
    me.createPosting('andy-1'),
    users[1].createPosting('becky-1'),
    users[5].createPosting('freedman-1'),
    users[3].createPosting('dave-1'),
    users[4].createPosting('ellen-2'),
    me.createPosting('andy-2'),
    users[3].createPosting('dave-2'),
    me.createPosting('andy-3'),
    users[4].createPosting('ellen-3'),
    users[2].createPosting('charlotte-3'),
    users[1].createPosting('becky-2'),
    users[2].createPosting('charlotte-4'),
    users[5].createPosting('freedman-2'),
    me.createPosting('andy-4'),
    users[3].createPosting('dave-3'),
    users[1].createPosting('becky-3'),
    users[2].createPosting('charlotte-5'),
    users[4].createPosting('ellen-4')
  ];
  console.log('# all postings:', postings); // should not be a null list

  me.deletePosting(postings[8]);
  console.log('my postings after delete andy-2:', me.postings); // should not contain andy-2

  console.log('delete other\'s posting:');
  try {
    me.deletePosting(postings[2]);
    console.error('- it should be an error.');
  } catch (e) {
    console.log('- delete failed which is right result.');
  }

  // should be postings from my friends order by createdAt
  console.log('my timeline postings:', me.getTimelinePostings());
}

export {
  test,
  User,
  Posting
};