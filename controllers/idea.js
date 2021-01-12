const Idea = require('../models/idea').idea;

const add = async (req, res) => {

    try {
        if (!req.body.name) {
            throw ('need idea name')
        }
        // create idea mongo db model : 
        const idea = new Idea({
            name: req.body.name
        });
        if (req.body.description) idea.description = req.body.description
        if (req.body.source) idea.source = req.body.source
        if (req.body.parent) idea.parent = req.body.parent

        await idea.save();
        res.status(200).json(idea);
    } catch (error) {
        res.status(400).json(error)
    }

}

const edit = async (req, res) => {
    try {
        //check if the request has the data we need : 
        if (!req.body.id) {
            throw ("need idea id to update")
        }
        const id = req.body.id;
        const idea = await Idea.findById(id);
        // update name of idea
        if (req.body.name) {
            idea.name = req.body.name;
        }
        //edit source of idea
        if (req.body.source) {
            idea.source = req.body.source;
        }
        //edit description of idea
        if (req.body.description) {
            idea.description = req.body.description;
        }
        //edit parent of idea
        if (req.body.parent) {
            idea.parent = req.body.parent;
        }
        await idea.save();
        //send response back 
        res.status(200).json(idea);
    } catch (error) {
        //send error 
        res.status(400).json(error)
    }
}

//get all model 
const getAll = async (req, res) => {
    try {
        const ideas = await Idea.find();
        res.status(200).json(ideas);
    } catch (error) {
        //send error 
        res.status(400).json(error)
    }
}

// get one model obj by id : 

const getById = async (req, res) => {
    try {
        //check id in request : 
        if (!req.query.id) {
            throw ("need id to get by id");
        }
        const idea = await Idea.findById(req.query.id);
        res.status(200).json(idea);
    } catch (error) {
        //send error 
        res.status(400).json(error)
    }
}


const deleteById = async (req, res) => {
    try {
        // check id
        if (!req.query.id) { throw ("need id to delete") }
        const idea = await Idea.findById(req.query.id);
        await idea.remove();
        res.status(200).json({ deleted: true, idea })
    } catch (error) {
        res.status(400).json(error)
    }
}


module.exports = {
    add,
    edit,
    getAll,
    getById,
    deleteById
}