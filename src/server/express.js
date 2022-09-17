const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


const twilio = require('twilio');
const AccessToken = twilio.jwt.AccessToken;
const { VideoGrant } = AccessToken;

const config = {
    twilio: {
      accountSid: "AC7a63e197b7d0248a8640efc14aed3990",
      apiKey : "SKfbbb3b80dd725efb0f7c6f0514c32da6",
      apiSecret : "L8U2NGNlFI60BVPVhPsGwSU0iZiLQUeg"
    }
  };
  
  const generateToken = config => {
    return new AccessToken(
      config.twilio.accountSid,
      config.twilio.apiKey,
      config.twilio.apiSecret
    );
  };

  const videoToken = (identity, room, config) => {
    let videoGrant;
    if (typeof room !== 'undefined') {
      videoGrant = new VideoGrant({ room });
    } else {
      videoGrant = new VideoGrant();
    }
    const token = generateToken(config);
    token.addGrant(videoGrant);
    token.identity = identity;
    return token;
  };

  const sendTokenResponse = (token, res) => {
    res.set('Content-Type', 'application/json');
    res.send(
      JSON.stringify({
        token: token.toJwt()
      })
    );
    console.log(token)
  };

  app.get('/video/token', (req, res) => {

    const identity = req.query.identity;
    const room = req.query.room;
    const token = videoToken(identity, room, config);
    sendTokenResponse(token, res);
  
  });
  app.post('/video/token', (req, res) => {
    const identity = req.body.identity;
    const room = req.body.room;
    const token = videoToken(identity, room, config);
    sendTokenResponse(token, res);
  });

  app.listen(3001, () =>
  console.log('Express server is running on localhost:3001')
);