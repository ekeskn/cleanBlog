const Post = require('../models/Posts');

exports.getAllPosts = async (req, res) => {
    const posts = await Post.find({}).sort('-dateCreated')
    res.render('index',{
        posts
    })
}

exports.getPost = async (req,res)=>{
    const post = await Post.findById(req.params.id)
    res.render('post',{
        post
    })
}

exports.createPost = async (req,res)=>{
    await Post.create(req.body)
    res.redirect('/')
}

exports.updatePost =async (req,res)=>{
    const id = req.params.id
    const post = await Post.findOne({_id:id});
    post.title = req.body.title;
    post.description = req.body.description;
    post.save();

    res.redirect('/')
}

exports.deletePost = async (req,res)=>{
    const post = await Post.findOne({_id:req.params.id})
    await Post.findByIdAndRemove(req.params.id)
    res.redirect('/')
}