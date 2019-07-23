const express = require('express');

class LinkRouter {
    constructor(linkService){
        this.linkService = linkService;
    }

    router(){
        let router = express.Router();

        router.get('/', this.get.bind(this));
        router.post('/', this.post.bind(this));

        return router;
    }

    get(req, res){
        return this.linkService.list(req.query.search)
            .then((links)=> {
                console.log(links)
                res.json(links)})
            .catch((err)=> res.status(500).json(err));
    }

    post(req, res){
        return this.linkService.add(req.body)
            .then(()=> this.linkService.list())
            .then((links)=> res.json(links))
            .catch((err)=> res.status(500).json(err))
    }

}

module.exports = LinkRouter;