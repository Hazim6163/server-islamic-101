const Category = require('../models/category').category;

const add = async (req, res) => {
    try {
        //check if the request has data you need to check when add new model:
        if (!req.body.name) {
            throw ('need more data')
        }

        //init level 
        let level = 0;
        if (req.body.parent) level = await extractCategoryLevel(req.body.parent);

        // create category mongo db model : 
        const category = new Category({
            name: req.body.name,
            description: req.body.description,
            level
        });
        if (req.body.parent) category.parent = req.body.parent;
        await category.save();
        res.status(200).json({ category });
    } catch (error) {
        res.status(400).json(error)
    }

}

async function extractCategoryLevel(pName) {
    //init level:
    let level = 0;
    if (pName && pName.length > 0) {
        //get parent : 
        const parent = await Category.findOne({ name: pName });
        //get parent level : 
        level = parent.level + 1;
    }
    return level;
}

const edit = async (req, res) => {
    console.log('edit category request')
    try {
        //check if the request has the data we need : 
        if (!req.body.id) {
            throw ("need category id to update")
        }

        const id = req.body.id;
        const category = await Category.findById(id);

        //init level 
        let level = 0;
        if (req.body.parent) level = await extractCategoryLevel(req.body.parent);

        //update name of category
        if (req.body.name) {
            category.name = req.body.name;
        }
        if (req.body.description) {
            category.description = req.body.description;
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
    console.log('getById request')
    try {
        //check id in request : 
        if (!req.query.id) {
            throw ("need id to get by id");
        }
        const category = await Category.findById(req.query.id);
        res.status(200).json(category);
    } catch (error) {
        //send error 
        res.status(400).json(error)
    }
}


const deleteById = async (req, res) => {
    try {
        console.log(req.query)
        // check id
        if (!req.query.id) { throw ("need id to delete") }
        const category = await Category.findById(req.query.id);
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