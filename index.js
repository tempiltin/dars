const express = require('express') // express ni chaqirib olamiz
const app = express() // expressni app o'zgaruvchisiga olamiz 
const exhbs = require('express-handlebars') // npm paket orqali handlebarsni yuklaymiz va chaqirib olamiz
const path = require('path') // node jsni global path modulini chaqirib olamiz 


// export qilingan routersni index js failiga emport qilib olamiz
const homeRouter = require('./routers/home')
const portfolioRouter = require('./routers/portfolio')
const aboutRouter = require('./routers/about')
const contactRouter = require('./routers/contact')


// Using exhbs = hbs dan foydalanish 
const hbs = exhbs.create({
    defaultLayout: 'main', // asosiy index fail 
    extname: 'hbs' // fail formati
})



app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')

// Watching public folder
app.use(express.static(path.join(__dirname, 'public'))) // public papkasini kuzatish

app.use(express.urlencoded({ extended: true })) // post zaproslarni ro'yhatdan o'tlazish

// Using routers foydalanish
app.use('/', homeRouter)
app.use('/portfolio', portfolioRouter)
app.use('/about', aboutRouter)
app.use('/contact', contactRouter)


// Listening port
const port = 3000
const host = 'localhost'

app.listen(port, host, () => {
    console.log(`Server > > > ishga tushdi > > > ${host} > > > ${port}...`);
})