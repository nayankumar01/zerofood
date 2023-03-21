const foodList = document.getElementById('food-list');
const donateForm = document.querySelector('form:nth-of-type(1)');
const findForm = document.querySelector('form:nth-of-type(2)');

donateForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = donateForm.elements['food-name'].value;
  const quantity = donateForm.elements['food-quantity'].value;
  const expiry = donateForm.elements['food-expiry'].value;
  const location = donateForm.elements['food-location'].value;
  const foodItem = { name, quantity, expiry, location }})


const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Set up express app
const app = express();
const port = process.env.PORT || 3000;

// Set up mongoose connection
mongoose.connect('mongodb://localhost/available-food-list', { useNewUrlParser: true });
mongoose.Promise = global.Promise;

// Define food item schema and model
const foodItemSchema = new mongoose.Schema({})



document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.querySelector('#name').value;
    const food = document.querySelector('#food').value;
    const quantity = document.querySelector('#quantity').value;
    const expiry = document.querySelector('#expiry').value;
    const data = { name, food, quantity, expiry };
    fetch('/donate-food', {
        method: 'POST',
        headers: {
            'Content-Type': 'application '
        }
    })
    })

   
