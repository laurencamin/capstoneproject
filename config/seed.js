require('dotenv').config();
require('./database');

const Category = require('../models/Category');
const Item = require('../models/Item');

(async function() {

  await Category.deleteMany({});
  const categories = await Category.create([
    {name: 'Family', sortOrder: 10},
    {name: 'Babies', sortOrder: 20},
    {name: 'Children', sortOrder: 30},
    {name: 'Womens Health', sortOrder: 40},
    {name: 'Food', sortOrder: 50},
    {name: 'Water', sortOrder: 60},
    {name: 'Pets', sortOrder: 70},
  ]);

  await Item.deleteMany({});
  const items = await Item.create([
    {name: 'First Aid Kit', category: categories[0], price: 5.95},
    {name: 'Blanket', category: categories[0], price: 6.95},
    {name: 'Toiletry Items', category: categories[0], price: 3.95},
    {name: 'Bottle', category: categories[1], price: 14.95},
    {name: 'Pack of Pacifiers', category: categories[1], price: 13.95},
    {name: 'Pack of Diapers', category: categories[1], price: 25.95},
    {name: 'Box of Toys', category: categories[2], price: 1.95},
    {name: 'Plush Animal', category: categories[2], price: 4.95},
    {name: 'Pack of Pads', category: categories[3], price: 3.95},
    {name: 'Box of Tampons', category: categories[3], price: 7.95},
    {name: 'Tupperware', category: categories[4], price: 2.95},
    {name: 'Box of Nonperishable Snacks', category: categories[4], price: 2.95},
    {name: 'Gluten-Free Snacks', category: categories[4], price: 3.95},
    {name: 'Large Water Bottle', category: categories[5], price: 1.95},
    {name: 'Large Pack of 16.9 fl oz Bottled Spring Water', category: categories[5], price: 0.95},
    {name: 'Small Pack of 8 fl oz Bottled Spring Water ', category: categories[5], price: 2.95},
    {name: 'Medium Water Bottle', category: categories[5], price: 3.95},
    {name: 'Dog Food', category: categories[6], price: 0.95},
    {name: 'Cat Food', category: categories[6], price: 0.95},
    {name: 'Dog Collar', category: categories[6], price: 8.95},
    {name: 'Cat Collar', category: categories[6], price: 3.95},
    {name: 'Pet Leash', category: categories[6], price: 7.95},
  ]);

  console.log(items)

  process.exit();

})();