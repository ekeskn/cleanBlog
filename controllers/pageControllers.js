const Post = require('../models/Posts')

exports.getAddPage =  (req, res) => {
    res.render('add_post')
}

exports.getAboutPage = (req, res) => {
    res.render('about')
}

exports.getEditPageWithId = async (req,res)=>{
    const post = await Post.findOne({_id:req.params.id});
    res.render('edit',{
        post
    });
}