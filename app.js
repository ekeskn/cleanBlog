const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');

const ejs = require('ejs');
const path = require('path');

const Post = require('./models/Posts');
const pageControllers = require('./controllers/pageControllers');
const postControllers = require('./controllers/postControllers')

const app = express();

mongoose.connect('mongodb://localhost/cleanblog-test-db',{
    useNewUrlParser: true,
    useUnifiedTopology:true,
});


app.set("view engine", "ejs");

app.use(express.static('public'));
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(methodOverride('_method',{
    methods: ['POST','GET']
}));


app.get('/', postControllers.getAllPosts);
app.get('/post/:id', postControllers.getPost)
app.post('/post', postControllers.createPost)
app.put('/post/:id',postControllers.updatePost)
app.delete('/post/:id',postControllers.deletePost)


app.get('/add_post',pageControllers.getAddPage);
app.get('/about', pageControllers.getAboutPage);
app.get('/post/edit/:id', pageControllers.getEditPageWithId);

// SERVER CONNECTION
const port = 5000;

app.listen(port, () => {
    console.log(`Sunucu ${port} da başlatıldı..`);
});
