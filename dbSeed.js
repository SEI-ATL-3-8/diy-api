const models = require('./models')
models.wine.create({
    name:'CHATEAU DE SAINT COSME',
    year: 2009, 
    grapes: 'Grenache / Syrah', 
    country: 'France',
    region: 'Southern Rhone',
    description: 'The aromas of fruit and spice give one a hint of the light drinkability of this lovely wine, which makes an excellent complement to fish dishes.',
    picture: 'http://s3-us-west-2.amazonaws.com/sandboxapi/saint_cosme.jpg',
    price: 13
})
models.wine.create({
    name:'LAN RIOJA CRIANZA',
    year: 2006, 
    grapes: 'Tempranillo', 
    country: 'Spain',
    region: 'Southern Rhone',
    description: 'A resurgence of interest in boutique vineyards has opened the door for this excellent foray into the dessert wine market. Light and bouncy, with a hint of black truffle, this wine will not fail to tickle the taste buds.',
    picture: 'http://s3-us-west-2.amazonaws.com/sandboxapi/lan_rioja.jpg',
    price: 21
})