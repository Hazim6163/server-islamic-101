const Category = require('../models/category').category;

const add = async (req, res) => {
    console.log(req.body);
    //check if the request has data you need to check when add new model:
    if (!req.body.name || !req.body.description) {
        res.status(404).json({ error: "need more data." })
    }

    try {
        // create category mongo db model : 
        const category = new Category({
            name: req.body.text,
            description: req.body.name
        });
        if (req.body.parent) category.parent = req.body.parent;
        await category.save();
        res.status(200).json({ category });
    } catch (error) {
        res.status(400).json(error)
    }

}

const edit = async (req, res) => {
    try {
        //check if the request has the data we need : 
        if (!req.body.id) {
            throw ("need category id to update")
        }

        const id = req.body.id;
        const category = await Category.findById(id);

        // here is example of update name of category
        if (req.body.name) {
            category.name = req.body.name;
        }
        if (req.body.description) {
            category.source = req.body.description;
        }
        if (req.body.parent) {
            category.parent = req.body.parent;
        }
        //save updated obj 
        await category.save();
        //send response back 
        res.status(200).json(category);


    } catch (error) {
        //send error 
        res.status(400).json(error)
    }
}

//get all model 
const getAll = async (req, res) => {
    try {
        const categories = await Category.find();
        res.status(200).json(categories);
    } catch (error) {
        //send error 
        res.status(400).json(error)
    }
}

// get one model obj by id : 

const getById = async (req, res) => {
    try {
        //check id in request : 
        if (!req.body.id) {
            throw ("need id to get by id");
        }
        const category = await Category.findById(req.body.id);
        res.status(200).json(category);
    } catch (error) {
        //send error 
        res.status(400).json(error)
    }
}


const deleteById = async (req, res) => {
    try {
        // check id
        if (!req.body.id) { throw ("need id to delete") }
        const category = await Category.findById(req.body.id);
        await category.remove();
        res.status(200).json({ deleted: true, category })
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