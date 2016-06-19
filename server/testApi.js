const router = require('express').Router(); // eslint-disable-line new-cap
const tinder = require('tinder');
const client = new tinder.TinderClient();
const CONFIG = {
  xauth: '35caa751-219c-4b5d-b8dd-3337d5ac2fb5',
  token: 'EAAGm0PX4ZCpsBAFEHZBqhJGBvPC11C9AtVAUCtJk9gBsQiUkFVKLvkjSZAnAWpZAZChyBe5hSl1kKrq5N5SJc0sz0maNEHragZA463ZC0SAt6ZAxPYRyqHDhSvrKGNxcwKgPVB3zeF7Imi1ZAsS9FaBA9WyvwKhnLRKkiLKuE4o8aHQZDZD',
  profileid: '1042457287',
};

const tinderauth = (req, res, next) => {
  const token = CONFIG.xauth;
  client.setAuthToken(token);
  if (client.isAuthorized()) {
    next();
  } else {
    res.send('not authorized');
  }
};

/*
  Gets Tinder XAuth Token with FB Token and Profile Id
*/
router.get('/tinder/auth', (req, res) => {
  client.authorize(CONFIG.token, CONFIG.profileid, () => {
    const tinderxauthtoken = client.getAuthToken();
    res.json(tinderxauthtoken);
  });
});

/*
  Gets User Profile Information
*/
router.get('/tinder/self', tinderauth, (req, res) => {
  client.getAccount((err, user) => {
    if (err) res.status(404).json(err);
    res.json(user);
  });
});

/*
  Gets Profile Recommendations for User
*/
router.get('/tinder/recommendations', tinderauth, (req, res) => {
  client.getRecommendations(10, (err, profiles) => {
    if (err) res.status(404).json(err);
    res.json(profiles);
  });
});

module.exports = router;
