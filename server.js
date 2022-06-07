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
app.get('/tip/:total/:tipPercentage', (req, res)=> {
    res.send(req.params.tipPercentage)
    })

// Magic 8 ball
// app.get('/magic', (req, res)=> {
//     res.send(`<h1>["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]</h1>`)
// })


app.listen(PORT, ()=> {
    console.log(`Server is running on ${PORT}`)
})