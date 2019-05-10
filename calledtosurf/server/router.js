const auth = require('./controllers/auth');

module.exports = function(app){
    // const db = app.get('db');

    app.get('/login', auth.login);

    app.post('/signup',auth.signup);
}