/**
 * User.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝
    id:{
      type: 'number',
      columnName: 'id',
      autoIncrement: true
    },
    name: {
      type: 'string',
      required: true,
      allowNull: false,
      columnName: 'name'
    },
    email: {
      type: 'string',
      columnName: 'email',
      allowNull: false,
      required: true,
      unique: true,
    },
    password:{
      type: 'string',
      columnName: 'password',
      allowNull: false,
      required: true
    },
    
  },
};

