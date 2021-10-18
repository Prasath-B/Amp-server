const Post = require('../modal/postmodal')


const savePost = (req,res)=>{
  

    const post = new Post({
        title:req.body.title,
        content:req.body.content
    })
    try {
        post.save()
        res.status(200).send({result:'Success',post})
    } catch (error) {
        console.log(error)
        res.status(401).send({message:error})
    }
   
}

const getPosts = (req,res)=>{
  
    Post.find({},(err,docs)=>{
        if(err){
            res.status(501).send(err)
        }
        if(docs){
            res.status(200).send(docs)
        }
    }).limit(req.body.limit)
}

const searchPost =(req,res) => {

 Post.find({ $text: { $search: req.body.searchtext } }, (err,result)=>{
            if(err){
                res.status(501).send(err)
            }
            if(result){
                
                res.send(result)
            }
        })
}

const deletePost = (req,res)=>{
    Post.deleteOne({title:req.body.title},(err,result)=>{
        if(err){
            res.status(501).send()
        }
        if(result){
            res.status(200).send(result)
        }
    })
}

const updatePost = (req,res)=>{
    Post.updateOne({_id:req.body.id},{
        title:req.body.title,
        content:req.body.content
    },(err,docs)=>{
        if(err){
            console.log(error)
            res.status(501).send(error)
        }
        if(docs){
            res.status(200).send(docs)
        }
    })
}

module.exports ={updatePost,getPosts,deletePost,savePost,searchPost}