module.exports = {
    read: (req,res) => {
        // this grabs data from the "db" established in index.js file
        let db = req.app.get('db')
        console.log('read part of comment controller', req.params)
        // this works because inside the db folder we have the nationalParks.db file
        db.comments.getComments(req.params).then((response) => {
            res.send(response)
        })
    },

    // getMessage: (req, res) => {
    //     const db = req.app.get('db');
    //     const { id } = req.params;
    
    //     db.get_message([id])
    //       .then(messages => {
    //         res.status(200).send(messages[0]);
    //       })
    //       .catch(err => {
    //         res.status(500).send(err);
    //       });
    //   },

    // current: (req, res) => {
    //     const { user } = req.session;
    //     // console.log(user);
    //     if (user) {
    //       return res.status(200).send(user);
    //     } else {
    //       res.status(400).send("User not found");
    //     }
    //   },


    // create: (req, res, next) => {
    //     console.log(req.body)
    //     const dbInstance = req.app.get('db');
    //     const { user_id, drink_id, comment_id, comment } = req.body;
    
    //     dbInstance.createComment(req.body)
    //       .then(() => res.sendStatus(200))
    //       .catch(err => {
    //         res.status(500).send({ errorMessage: "Something went wrong." });
    //         console.log(err)
    //       });
    //   }

    }