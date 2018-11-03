const errors = require('restify-errors');
const Customer = require('../models/Customer');

module.exports = server => {
    server.get('/customers', async(req, res, next)=>{
        try {
            const customers = await Customer.find({});
            res.send(customers);
            next();

        } catch (error) {
            return next(new errors.InvalidContentError(error));
        }
    });

    server.get('/customers/:id', async(req, res, next)=>{
        try {
            const customers = await Customer.findById(req.params.id);
            res.send(customers);
            next();

        } catch (error) {
            return next(new errors.ResourceNotFoundError(error));
        }
    });

    server.post('/customers', async (req, res, next)=>{
        if(!req.is('application/json')){
            return next(new errors.InvalidContentError("Expects application/json type of data"));
        }
        const { name, email, balance }  = req.body;
        const customer = new Customer({
            name,
            email,
            balance
        });

        try {
            const newCustomer = await customer.save();
            req.statusCode = 201;
            res.send(newCustomer);
            next();
        } catch (error) {
            return next(new errors.InternalError(error));
        }
    });

    server.put('/customers/:id', async (req, res, next)=>{
        if(!req.is('application/json')){
            return next(new errors.InvalidContentError("Expects application/json type of data"));
        }
        

        try {
            const customer = await Customer.findOneAndUpdate({_id: req.params.id}, req.body);
            res.send(200);
            next();
        } catch (error) {
            return next(new errors.InternalError(error));
        }
    });

    server.del('/customers/:id', async (req, res, next)=>{
        try {
            const customer = await Customer.findByIdAndRemove({_id: req.params.id});
            res.send(204);
            next();
        } catch (error) {
            throw new error;
        }
    });
}