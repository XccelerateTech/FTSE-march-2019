const express = require ('express');

class TagRouter {
    constructor(tagService){
        this.tagService = tagService;
    }

    router(){
        let router = express.Router();
        router.get('/', this.get.bind(this));
        router.post('/', this.post.bind(this));
        return router;
    }

    get(req, res){
        return this.tagService.list(req.query.search)
            .then((tags)=> res.json(tags))
            .catch((err)=> res.status(500).json(err));
    }

    post(req, res){
        return this.tagService.add(req.body)
            .then(()=> this.tagService.list())
            .then((tags)=> res.json(tags))
            .catch((err)=> res.status(500).json(err));
    }
}

module.exports = TagRouter;