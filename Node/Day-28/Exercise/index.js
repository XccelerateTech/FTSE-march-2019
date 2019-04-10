const express = require('express');
const app = express();
const hb = require('express-handlebars');

app.engine('handlebars', hb({ defaultLayout: 'otherpages'}));
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.get('/', (req, res)=>{
    res.render('index', {layout: "main"})
});

app.get('/gallery', (req,res)=>{
    res.render('gallery')
});
const pizzas = {
    pizza: [
        {
            "crust": "Thick","name":"Pepperoni", "toppings": ["Cheese", "Pepperoni"], "price": "HKD145"
        },
        {
            "crust": "Thick","name":"Hawaiian", "toppings": ["Cheese", "Ham", "Pineapple"], "price": "HKD 1"
        },
        {
            "crust": "Thick","name":"Four Cheese", "toppings": ["Cheddar", "Mozzarella", "Blue cheese", "Peccorino"], "price": "HKD 160"
        },
        {
            "crust": "Thin", "name":"Margherita", "toppings": ["Cheese", "Fresh Tomato"], "price": "HKD 130"
        }
    ]
};

app.get('/menu', (req, res)=>{
    res.render('menu',pizzas)
});


app.listen(8080, ()=>{
    console.log(`App is listening on port 8080`)
})