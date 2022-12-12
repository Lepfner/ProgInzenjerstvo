const sequelize_fixtures = require('sequelize-fixtures');

const Admins = require('../models/admin');
const Events = require('../models/event');
const Organizers = require('../models/organizer');
const Purchases = require('../models/purchase');
const PurchaseItems = require('../models/purchaseItem');
const Tickets = require('../models/ticket');
const Users = require('../models/user');
const Venues = require('../models/venue');

var fixtures = sequelize_fixtures.loadFile('./venue.json', Venues);

module.exports = {
    loadFixtures: () => {
        sequelize_fixtures.loadFixtures(fixtures, Venues).then(function(){
            console.log("Fixtures have been loaded, check your database tables !");
        });
    }
};