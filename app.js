const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const userRoute = require('./routes/user');
const mainRoute = require('./routes/router');
const categoryRoutes = require('./routes/category');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
let sessionStore;

const mongoUserName = 'mustafa';
const mongoPass = 'BeIp42TaLo3Ydkxv';
const db = 'Islamic101';

const app = express();

//connect to the database: 
const uri = 'mongodb+srv://' + mongoUserName + ':' + mongoPass + '@cluster0.t3yci.mongodb.net/' + db + '?retryWrites=true&w=majority';
try {
    mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('connected to the database');
    //link mongo store with mongo db: 
    sessionStore = new MongoStore({
        mongooseConnection: mongoose.connection,
        collection: 'sessions'
    })
} catch (error) {
    console.log(error);
}
const port = process.env.PORT || 3000
app.listen(port);
console.log('server start at port ' + port);

//user express session: 
app.use(session({
    secret: 'random session secret',
    resave: false,
    saveUninitialized: true,
    store: sessionStore,
    cookie: {
        maxAge: 1 * (24 * 3600 * 1000), // 1day 24hours 3600sec 1000millSec
    }
}));

//allow origin from other sites : 
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

//use body-parser:
app.use(bodyParser.json());
//set view engine:
app.set('view engine', 'ejs');
//set public folder:
app.use(express.static('public'));

app.use('/user', userRoute);
//use category routes : 
app.use('/category', categoryRoutes);

app.use('/', mainRoute);
