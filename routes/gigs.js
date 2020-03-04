const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Gig = require('../models/Gigs');


//display gig form 
// router.get('/add', (req, res) => res.render('add'));

// Get gigs /gigs
router.get('/', (req, res) => 
    Gig.findAll()
        .then(gigs => {
            // console.log('gigs :', gigs);
            res.render('gigs', {gigs});
            // res.render('gigs', {layout: 'main', template: 'gigs', datas: gigs});
        })
        .catch(err => console.log('err :', err)));


 //add gig  /gig/add
router.get('/add', (req, res) => {
    const data = {
        title: 'looking for a full stack engineer',
        technologies: 'react, javascript, html, css ',
        budget: '$3000',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis, consectetur a at laudantium unde autem vero odio ipsa similique laborum.  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis, consectetur a at laudantium unde autem vero odio ipsa similique laborum.  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis, consectetur a at laudantium unde autem vero odio ipsa similique laborum.',
        contact_email: 'lorem@example.com'
    }
    console.log('data added? :', data);

    let {title, technologies, budget, description, contact_email} = data;

    Gig.create({title, technologies, description, budget, contact_email})
        .then(gig => res.redirect('/gigs'))
        .catch(err => console.log('err :', err))

});


module.exports = router