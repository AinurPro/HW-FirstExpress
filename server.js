const express = require('express')
const app = express()


const PORT = 3001

// app.set('view engine', 'ejs')
// app.set('views', './views')


app.get('/greeting', (req, res)=> {
    res.send("Hello, stranger")
})

// Make a route '/greeting' that sends a generic greeting to the screen like "Hello, stranger".

// Give the greeting route a param /:name

// When hitting the route, the page should display a message such as "Hello, ", or "What's up, <name>",
// or "<name>! It's so great to see you!" (ex. hitting '/greeting/Jimmy-boy' should display Wow! 
//Hello there, Jimmy-boy on the page).


app.get('/greeting/:name', (req, res) => {
    res.send(`hello, ${req.params.name}`)
  });

  // Tip calculator
// app.get('/tip', (req, res)=> {
//     res.render('tip', {
//         pageTitle: "total",
//             pageHeader: "tipPercentage",
//             data: "tip"
//     })
// })
// Your app should have a route of '/tip' and it should expect 2 params. One should be total and one should be tipPercentage.

// When hitting the route, the page should display
// how much your tip will be based on the total amount of the bill and the tip percentage. (ex. hitting '/tip/100/20' should display 20 on the page).



app.listen(PORT, ()=> {
    console.log(`Server is running on ${PORT}`)
})