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
    {name: 'Hamburger', category: categories[0], price: 5.95},
    {name: 'Turkey Sandwich', category: categories[0], price: 6.95},
    {name: 'Hot Dog', category: categories[0], price: 3.95},
    {name: 'Crab Plate', category: categories[1], price: 14.95},
    {name: 'Fried Shrimp', category: categories[1], price: 13.95},
    {name: 'Whole Lobster', category: categories[1], price: 25.95},
    {name: 'Taco', category: categories[2], price: 1.95},
    {name: 'Burrito', category: categories[2], price: 4.95},
    {name: 'Pizza Slice', category: categories[3], price: 3.95},
    {name: 'Spaghetti', category: categories[3], price: 7.95},
    {name: 'Garlic Bread', category: categories[3], price: 1.95},
    {name: 'French Fries', category: categories[4], price: 2.95},
    {name: 'Green Salad', category: categories[4], price: 3.95},
    {name: 'Ice Cream', category: categories[5], price: 1.95},
    {name: 'Cup Cake', category: categories[5], price: 0.95},
    {name: 'Custard', category: categories[5], price: 2.95},
    {name: 'Strawberry Shortcake', category: categories[5], price: 3.95},
    {name: 'Milk', category: categories[6], price: 0.95},
    {name: 'Coffee', category: categories[6], price: 0.95},
    {name: 'Mai Tai', category: categories[6], price: 8.95},
    {name: 'Beer', category: categories[6], price: 3.95},
    {name: 'Wine', category: categories[6], price: 7.95},
  ]);

  console.log(items)

  process.exit();

})();