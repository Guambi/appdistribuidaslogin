/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    
    getUser: async function(req, res){
        let user = await User.findOne({
            where: {email: req.body.email}
        });
        return res.status(200).json({
            user: user
        });
    },

    login: async function(req, res){
        let email = req.body.email;
        let password = req.body.password;
        let user = await User.findOne({
            where: {email: email}
        });
        sails.log(user);
        if(user){
            if(user.password == password){
                return res.status(200).json({
                    user: user
                });
            }else{
                return res.status(401).json({
                    status: 401,
                    error: 'Contraseña Incorrecta'
                });
            }
        }
    
        return res.status(404).json({
            status: 404,
            message: 'Usuario no encontrado'
        });
    },
    
    create: async function(req, res){
        let newUser = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        }
    
        let userCreated = await User.create(newUser).fetch()
    
        return res.status(201).json(userCreated)
    },
    
    update: async function(req, res){
        let idUser = req.params.id
        let update = {
            name: req.body.name,
            lastName: req.body.lastName,
            user: req.body.user,
            password: req.body.password
        } 
        let userUpdated = await User.updateOne({id: idUser}).set(update)
    
        return res.status(200).json(userUpdated)
    },
    
    delete: async function(req, res){
        let idUser = req.params.id
    
        let userDeleted = await User.destroyOne({id: idUser})
    
        return res.json(userDeleted)
    }
};

