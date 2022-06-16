const { validationResult } = require('express-validator');

module.exports = {
    index: function(req, res){
        res.render('index')
    },
    store: function(req, res){
        const data = req.body
        const error = validationResult(req)

        if (error.isEmpty()) {
            res.render('index', { data : data })
        } else {
            res.render('index', { data : data })
        }

    }
}