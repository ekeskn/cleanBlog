const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');

const ejs = require('ejs');
const path = require('path');

const Post = require('./models/Posts');

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


app.get('/', async (req, res) => {
    const posts = await Post.find({}).sort('-dateCreated')
    res.render('index',{
        posts
    })
});
app.get('/add_post', (req, res) => {
    res.render('add_post')
});
app.get('/post', (req, res) => {
    res.render('post')
});
app.get('/about', (req, res) => {
    res.render('about')
});

app.get('/post/:id', async (req,res)=>{
    const post = await Post.findById(req.params.id)
    res.render('post',{
        post
    })
})
app.get('/post/edit/:id', async (req,res)=>{
    const post = await Post.findOne({_id:req.params.id});
    res.render('edit',{
        post
    });
});

app.post('/post', async (req,res)=>{
    await Post.create(req.body)
    res.redirect('/')
})

app.put('/post/:id',async (req,res)=>{
    const id = req.params.id
    const post = await Post.findOne({_id:id});
    post.title = req.body.title;
    post.description = req.body.description;
    post.save();

    res.redirect('/')
})

app.delete('/post/:id',async (req,res)=>{
    const post = await Post.findOne({_id:req.params.id})
    await Post.findByIdAndRemove(req.params.id)
    res.redirect('/')
})

// SERVER CONNECTION
const port = 5000;

app.listen(port, () => {
    console.log(`Sunucu ${port} da başlatıldı..`);
});
