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

    update: (req, res) => {
        const db = req.app.get("db");
        console.log('comment controller req.params', req.params, req.body)
        const { comment} = req.body;
        const { id } = req.params;
    
        db.comments.updateComment({
          id,
          comment
        })
        .then(() => res.status(200).send(comment))
        .catch(err => {
            res.status(500).send({ errorMessage: "Something went wrong on update." });
            console.log(err)
          });
      },

    delete: (req, res) => {
    const db = req.app.get('db');
    const { id } = req.params;
    const {drink_id} = req.body;
    console.log('req.param from delete', req.params, req.body)
    db.comments.deleteComment({id, drink_id})
        .then(messages => {
        res.status(200).send(messages);
        })
        .catch(err => {
        res.status(500).send(err);
        });
    },

    create: (req, res, next) => {
        console.log('create state from comments controller', req.body)
        const db = req.app.get('db');
        const { user_id, drink_id, comment } = req.body;
    
        db.comments.createComment(req.body)
          .then(() => res.sendStatus(200))
          .catch(err => {
            res.status(500).send({ errorMessage: "Something went wrong." });
            console.log(err)
          });
      }
    }