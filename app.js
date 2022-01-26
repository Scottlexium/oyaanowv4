const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const cookieParser = require('cookie-parser');
const {requireAuth, checkUser} = require('./middleware/authMiddleware');
dotenv.config();
const cors = require('cors');
const pdf = require('express-pdf');
// const expressLayouts = require('express-ejs-layouts');

app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(pdf); 

// app.use(expressLayouts);

mongodb = process.env.MONGODB_URI;
port = process.env.PORT || 3000;
mongoose.connect(mongodb, { useUnifiedTopology: true})
.then((result)=>{
    app.listen(port);
    console.log(`Db connected, now listening on http://localhost:${port}`);
})
.catch(err => console.log(err));
app.use(authRoutes);

// routes

app.get('*', checkUser);
app.get('/logmein', (req, res) =>{
    res.redirect('admin')
});
app.get('/admin', requireAuth, (req, res) =>{
    res.render('admin', {title: 'Admin Dashboard'})
});
app.get('/logout', (req, res)=>{
    res.render('login');
})
app.get('/bookings', (req, res)=>{
    res.render('bookings');
})
app.get('/home', (req, res)=>{
    res.render('home');
});













// Route variables
let one = "/benin-lagos";
let two = "/lagos-benin";
let three = "/Benin-warri";
let four = "/Warri-benin";
let five = "/Benin-port-harcourt";
let six = "/Port-harcourt-Benin";
let seven = "/Benin-Abuja";
let eight = "/Abuja-benin";
let nine = "/Benin-Kaduna";
let ten = "/Kaduna-Benin";
let eleven = "/Benin-Asaba";
let twelve = "/Asaba-Benin";
let thirteen = "/Warri-Lagos";

// routes based on selections

app.post(one, (req, res)=>{
    res.send(`destination = ${one}`);
});
app.post(two, (req, res)=>{
    res.send(`destination = ${two}`);
});
app.post(three, (req, res)=>{
    res.send(`destination = ${three}`);
});
app.post(four, (req, res)=>{
    res.send(`destination = ${four}`);
});
app.post(five, (req, res)=>{
    res.send(`destination = ${five}`);
});
app.post(six, (req, res)=>{
    res.send(`destination = ${six}`);
});
app.post(seven, (req, res)=>{
    res.send(`destination = ${seven}`);
});
app.post(eight, (req, res)=>{
    res.send(`destination = ${eight}`);
});
app.post(nine, (req, res)=>{
    res.send(`destination = ${nine}`);
});
app.post(ten, (req, res)=>{
    res.send(`destination = ${ten}`);
});
app.post(eleven, (req, res)=>{
    res.send(`destination = ${eleven}`);
});
app.post(twelve, (req, res)=>{
    res.send(`destination = ${twelve}`);
});
app.post(thirteen, (req, res)=>{
    res.send(`destination = ${thirteen}`);
});
app.use((req, res, next) => {
    res.status(404).send(
        "<h1>Page not found on the server</h1>")
})
