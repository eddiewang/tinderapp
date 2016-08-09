const router = require('express').Router(); // eslint-disable-line new-cap
const tinder = require('tinder');
const client = new tinder.TinderClient();
const CONFIG = require('./config.js');

const tinderauth = (req, res, next) => {
  const token = CONFIG.xauth;
  client.setAuthToken(token);
  if (client.isAuthorized()) {
    next();
  } else {
    res.send('not authorized');
  }
};

// Mock Files
const auth = require('./mock/auth.json');
const history = require('./mock/history.json');
const recommendations = require('./mock/recommendations.json');
const personal = require('./mock/self.json');

/*
  Gets Tinder XAuth Token with FB Token and Profile Id
*/
router.get('/tinder/auth', (req, res) => {
  // DEV MODE
  res.json(auth);
  // PROD MODE
  // client.authorize(CONFIG.token, CONFIG.profileid, (err, authed) => {
  //   if (err) res.json(err);
  //   else res.json(authed);
  // });
});

/*
  Gets User Profile Information
*/
router.get('/tinder/self', tinderauth, (req, res) => {
  // DEV MODE
  res.json(personal);
  // PROD MODE
  client.getAccount((err, user) => {
    if (err) res.status(404).json(err);
    res.json(user);
  });
});

/*
  Gets Profile Recommendations for User
*/
router.get('/tinder/recommendations', tinderauth, (req, res) => {
  // DEV MODE
  res.json(recommendations);
  // PROD MODE
  // client.getRecommendations(10, (err, profiles) => {
  //   if (err) res.status(404).json(err);
  //   res.json(profiles);
  // });
});

/*
  Posts User Like to Tinder
*/
router.post('/tinder/like/:id', tinderauth, (req, res) => {
  client.like(req.params.id, (err, liked) => {
    if (err) res.status(404).json(err);
    res.json(liked);
  });
});

/*
  Posts User Pass to Tinder
*/

router.post('/tinder/pass/:id', tinderauth, (req, res) => {
  client.pass(req.params.id, (err, passed) => {
    if (err) res.status(404).json(err);
    res.json(passed);
  });
});

/*
  Get User History (Matches, Messages, Blocks, etc)
*/
router.get('/tinder/history', tinderauth, (req, res) => {
  // DEV MODE
  res.json(history);
  // PROD MODE
  // client.getHistory((err, data) => {
  //   if (err) res.status(404).json(err);
  //   res.json(data);
  // });
});

module.exports = router;
