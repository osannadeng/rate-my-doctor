const router = require('express').Router();
let Doctors = require('../models/doctors.model');

router.route('/').get((req, res) => {
    Doctors.find()
        //.then(() => res.json('Doctor found!'))
      .then(doctors => res.json(doctors))
      .catch(err => res.status(400).json('Error: ' + err));
  });

// router.route('/search-by-procedure').get((req, res) => {
//     const procedure = req.body.procedure;
//     Doctors.find({Procedure_Category: procedure}, (err, docs) => { if (err) {
//         console.error(err);
//             // Handle error
//             res.status(500).json({ error: 'Internal server error' });
//         } else {
//             // Handle found documents
//             res.json(docs);
//     }});

    router.get('/search-by-lastname', async (req, res) => {
        const lastName = req.body.lastName;
    
        try {
            // Find documents based on the specified property using async/await
            const docs = await Doctors.find({"Provider Last Name": lastName });
            res.json(docs);
        } catch (error) {
            console.error(error);
            // Handle error
            res.status(500).json({ error: 'Internal server error' });
        }
});

module.exports = router;