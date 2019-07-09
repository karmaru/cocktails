require('dotenv/config')
const express = require('express')
const massive = require('massive')
const session = require('express-session')

const app = express()
app.use( express.static( `${__dirname}/../build` ) );

const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env

const authCtrl = require("./controllers/auth_controller");
const commentCtrl = require("./controllers/comment_controller")

massive(CONNECTION_STRING).then(db => {
  app.set('db', db)
  app.listen(SERVER_PORT, () => console.log('Connected to LiquorDB on port ', SERVER_PORT))
})

app.use(express.json())
app.use(session({
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 365
  }
}))


app.post("/auth/register", authCtrl.register);
app.post("/auth/login", authCtrl.login);
app.get("/auth/current", authCtrl.current);
app.post("/auth/logout", authCtrl.logout);

app.get("/comments/read/:id", commentCtrl.read);
app.post("/comments/create", commentCtrl.create);
app.put("/comments/update/:id", commentCtrl.update);
app.delete("/comments/delete/:id", commentCtrl.delete);
