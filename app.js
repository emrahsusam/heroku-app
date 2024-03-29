const createError       =require('http-errors'),
      mongoose          =require('mongoose'),
      express           =require('express'),
      passport          =require('passport'),
      LocalStrategy     =require('passport-local'),
      bodyParser        =require('body-parser'),
      path              = require('path'),
      cookieParser      = require('cookie-parser'),
      logger            = require('morgan'),
      indexRouter       = require('./routes/index'),
      usersRouter       = require('./routes/users'),
      User              =require('./models/userModel'),
      app = express();

//MongoDB

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/heroku-app', {
  useNewUrlParser:true,
  useUnifiedTopology:true
});
mongoose.connection.on('connected', ()=>{
  console.log('Mongoose is connected!!!');
});


// view engine setup
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));

//Passport Config
app.use(require('express-session')({
  secret:'badescarf',
  resave:false,
  saveUninitialized:false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

if (process.env.NODE_ENV === 'production'){
  app.use(express.static('client/build'));
}

//Share current user info within all routes
app.use((req,res,next)=>{
  res.locals.currentUser=req.user;
  next();
});


//Routes Using
app.use(indexRouter);
app.use(usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
