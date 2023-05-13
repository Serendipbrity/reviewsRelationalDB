const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Review model
class Review extends Model { 

};
 

Review.init({
    // define columns

    //  sequelize will automatically create id

    // body of review
    body: {
        // text chosen over string for longer length
        type: DataTypes.TEXT,
        allowNull: false
    },
    // foreign key for user so we know who wrote the review
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        // this links the review to the user who wrote it
        references: {
            model: 'user',
            key: 'id'
        }
    }
}, {
    // use sequelize info to add this model to the correct db table
    sequelize,
    // automatically create createdAt/updatedAt timestamp fields
    timestamps: true,
    // don't pluralize name of database table
    freezeTableName: true,
    // use underscores instead of camel-casing (i.e. `comment_text` and not `commentText`)
    underscored: true,
    // name the model so we can reference it later for associations
    modelName: 'review'
});

module.exports = Review;

