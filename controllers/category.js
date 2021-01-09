const Category = require('../models/category').category;

const add = async (req, res) => {
    console.log(req.body);
    //check if the request has data you need to check when add new model  ; 
    //TODO complete the if statement 
    if (!req.body.text || !req.body.source) {
        // TODO Set Error Msg
        res.status(404).json({ error: "error msg" })
    }

    try {
        // create category mongo db model : 
        const category = new Category({ 
            // TODO Create category Model // add schema fields values
            /****
                text: req.body.text,
                name: req.body.name
            ***/
         });
        await category.save();
        res.status(200).json({ category });
    } catch (error) {
        // TODO set error msg 
        res.status(400).json({ error: "category cannot be created" })
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

        // here is example of update text of quote
        if (req.body.text) {
            quote.text = req.body.text;
        }
        //here is another example of edit source of quote
        if (req.body.source) {
            quote.source = req.body.source;
        }
        //TODO and so on add if statement for all fields 
        //save updated obj 
        await category.save();
        //send response back 
        res.status(200).json(quote);


    } catch (error) {
        //send error 
        res.status(400).json(error)
    }
}

//get all model 
const getAll = async (req, res) => {
    try {
        const categorys = await Category.find();
        res.status(200).json( categorys );
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