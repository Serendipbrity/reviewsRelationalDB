const User = require('./User');
const Review = require('./Review');

// create associations
User.hasMany(Review, {
    // when we delete a user, make sure to delete any associated reviews as well. Gotten from Review model
    foreignKey: 'userId'
});

// make sure that a review can only belong to one user, but not many users. Gotten from Review model
Review.belongsTo(User, {
    foreignKey: 'userId'
});

module.exports = { User, Review };