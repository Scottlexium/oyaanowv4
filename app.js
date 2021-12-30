const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const cookieParser = require('cookie-parser');
const {requireAuth, checkUser} = require('./middleware/authMiddleware');
dotenv.config();

app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.json());
app.use(cookieParser());

mongodb = process.env.MONGODB_URI;
port = process.env.PORT || 3000;
mongoose.connect(mongodb, { useUnifiedTopology: true})
.then((result)=>{
    app.listen(port);
    console.log(`Db connected, now listening on port ${port}`);
})
.catch(err => console.log(err));
app.use(authRoutes);

// routes

app.get('*', checkUser);
app.get('/', (req, res) =>{
    res.redirect('admin')
});
app.get('/admin', requireAuth, (req, res) =>{
    res.render('admin', {title: 'Admin Dashboard'})
});
app.get('/logout', (req, res)=>{
    res.render('login');
})