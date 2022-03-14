const router = require('express').Router();
const { Review, Customer } = require('../models');

// route to homepage view
router.get('/', (req, res) => {
    Review.findAll({
        attributes: [
            'id',
            'review_text',
            'created_at'
        ],
        include: [
            {
                model: Customer,
                attributes: ['first_name']
            }
        ]
    })
    .then(reviewData => {
        const reviews = reviewData.map(review => review.get({ plain: true }));

        res.render('homepage', {
            reviews,
            loggedIn: req.session.loggedIn
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// route to login view
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('login');
});

// route to register view
router.get('/register', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    res.render('register');
});

// route to menu view
router.get('/menu', (req, res) => {
    res.render('menu', {
        loggedIn: req.session.loggedIn
    });
});

module.exports = router;