const bcrypt = require("bcryptjs");

// let bday = new Date('06-28-1972')
// console.log('bday', bday)

module.exports = {
    register: async (req, res) => {
        // let bday = new Date(req.body.birthdate)
        const db = req.app.get("db");
        
        const { name, email, password,birthdate } = req.body;
        const bday = new Date(birthdate)
        bday.setDate( bday.getDate() + (365*21) )
        var today = new Date;
        const { session } = req;
    
        let takenEmail = await db.auth.check_email({ email });
        takenEmail = +takenEmail[0].count;
    
        if (takenEmail) {
          return res.status(409).send("Email already exists");
        }
        console.log('dates',today.getTime(), bday.getTime())
        if ( (today.getTime() - bday.getTime()) < 0) {
          return res.status(400).send(`You're too young to enter this site`)
        }  
    
        let salt = bcrypt.genSaltSync(10);
        let hash = bcrypt.hashSync(password, salt);
    
        let user = await db.auth.add_user({ name, email, password: hash });
    
        user = user[0];
        session.user = user;
        console.log('testing', session.user)
        res.status(200).send(session.user);
      },

      login: async (req, res) => {
        const db = req.app.get("db");
        const { name, password } = req.body;
        const { session } = req;
    
        let user = await db.auth.get_user({ name });
        
        user = user[0];
        console.log('from auth controller', user)
        if (!user) {
          return res.status(409).send("Email does not exist");
        }
    
        let authenticated = bcrypt.compareSync(password, user.password);
    
        if (authenticated) {
          delete user.password;
          session.user = user;
          
          res.status(200).send(session.user);
        } else {
          res.status(401).send("Failed Authentication");
        }
      }, 

      current: (req, res) => {
        const { user } = req.session;
        // console.log(user);
        if (user) {
          return res.status(200).send(user);
        } else {
          res.status(400).send("User not found");
        }
      },

      logout: (req, res) => {
        console.log('session before destroy', req.session)
        req.session.destroy();
        console.log('session after destroy', req.session)
        res.status(200).send("Logged Out");
      }
}