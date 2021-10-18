const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    title:{
        type:String
    },
    content:{
        type:String
    },
    date:{
        type:String,
        default:new Date()
    }
})

postSchema.index({ title: 'text', content: 'text'});

const Post = mongoose.model('Post',postSchema);
Post.createIndexes()
module.exports = Post;