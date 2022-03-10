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

// view engine setup
mongoose.connect('mongodb+srv://emrahsusam:eS197644@heroku-app.tqour.mongodb.net/heroku-app?retryWrites=true&w=majority');
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

app.use('/', indexRouter);
app.use('/users', usersRouter);

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
