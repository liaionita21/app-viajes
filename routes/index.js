var express = require('express');
var router = express.Router();
const users = require('../models/users');
/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express', layout: 'layout'});
});

router.get('/inicio', (req, res, next) => {
    res.render('vista.hbs',
        {
            title: '1ª Vista',
            page: 'Mi primera página',
            layout: 'layout.hbs'
        })
});

router.get('/prueba', (req, res, next) => {
    res.render('prueba.hbs',
        {
            usuarios: [
                {id: 1, name: ' Pablo'},
                {id: 2, name: ' Eugenio'},
                {id: 3, name: ' Lia'}],
            administrador:
                {
                    nombre: 'Pablo',
                    apellidos: 'Adriaensens'
                },
            appName: 'App Viajes',
            layout: 'layout'
        })
});

router.get('/usuarios', (req, res, next) => {
    let userController = new USERCONTROLLER(req, res, next);
    userController.getUsuarios();
});


module.exports = router;
