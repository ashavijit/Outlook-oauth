passport.use(new OutlookStrategy({
    clientID: OUTLOOK_CLIENT_ID,
    clientSecret: OUTLOOK_CLIENT_SECRET,
    callbackURL: 'http://www.example.com/auth/graph/callback',
    userProfileURL: 'https://graph.microsoft.com/v1.0/me?$select=userPrincipalName',
    name: 'msgraph'
  },
  function(accessToken, refreshToken, profile, done) {
     // Callback logic as per examples
  }
));
