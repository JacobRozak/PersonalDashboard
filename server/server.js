const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const session = require('express-session')
const dbConnection = require('./database') 
const MongoStore = require('connect-mongo')(session)
const passport = require('./passport');
const app = express()
const path = require('path')
//const PORT = 8080
// Route requires
const user = require('./routes/user')
const image = require('./routes/image')

app.use(express.static(__dirname));

// MIDDLEWARE
app.use(morgan('dev'))
app.use(
	bodyParser.urlencoded({
		extended: false
	})
)
app.use(bodyParser.json())

// Sessions
app.use(
	session({
		secret: 'fraggle-rock', //pick a random string to make the hash that is generated secure
		store: new MongoStore({ mongooseConnection: dbConnection }),
		resave: false, //required
		saveUninitialized: false //required
	})
)

// Passport
app.use(passport.initialize())
app.use(passport.session()) // calls the deserializeUser


// Routes
app.use('/user', user)
app.use('/image',image)

if (process.env.NODE_ENV === "production") {
	// Express will serve up production assets
	app.use(express.static("build"));
	app.get("*", (req, res) => res.sendFile(path.resolve("build", "index.html")));
  }
  
  if (process.env.NODE_ENV === "dev") {
	// Express will serve up production assets
	app.use(express.static("public"));
	app.get("*", (req, res) =>
	  res.sendFile(path.resolve("public", "index.html"))
	);
  }

// Starting Server 
app.listen(process.env.PORT || 5000)