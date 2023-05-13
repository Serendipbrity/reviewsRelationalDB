const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

// create our User model
class User extends Model { 

}
 
User.init({
    // define columns
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            // password must be at least 8 characters long
            len: [8]
        }
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
            // make sure email is in correct format
            isEmail: true
        },
    }
}, {
    // use sequelize info to add this model to the correct db table
    sequelize,
    timestamps: false,
    // don't pluralize name of database table
    freezeTableName: true,
    // use underscores instead of camel-casing (i.e. `comment_text` and not `commentText`)
    underscored: true,
    // name the model so we can reference it later for associations
    modelName: 'user'
});

module.exports = User;