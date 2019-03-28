const express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    mongoose = require('mongoose'),
    config = require('./DB');
    const app = express();
    const projectsRoute = require('./routes/project.route');
    const mongoDB = process.env.MONGODB_URI || config.DB;
    mongoose.Promise = global.Promise;
    mongoose.connect(mongoDB, { useNewUrlParser: true }).then(
      () => {console.log('Database is connected') },
      err => { console.log('Can not connect to the database'+ err)}
    );


    app.use(bodyParser.json());
    app.use(cors());
    app.use(bodyParser.urlencoded({extended: true}));
    app.use('/projects', projectsRoute);
    const port = process.env.PORT || 4000;

    const server = app.listen(port, function(){
     console.log('Listening on port ' + port);
    });
