const fs = require('fs');
const path = require('path');

const product = JSON.parse(fs.readFileSync(path.join(__dirname,'..','data','products.json'),'utf-8'))

const products = require('../data/products.json')


module.exports = {
    index: (req,res) => {
        return res.render('index',{    
            title: 'Pimienta & Sal',
            product : JSON.parse(fs.readFileSync(path.join(__dirname,'..','data','products.json'),'utf-8'))
    } );
}, 
    detail: (req,res) => {
        return res.render('detalleMenu',{
            product : products.find(product => product.id === +req.params.id)

        })
    } 
}