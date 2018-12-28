'use strict';
module.exports = function(sequelize, DataTypes) {
  var user = sequelize.define('user', {
    id: {type: DataTypes.INTEGER,
        primaryKey:true},
    email: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        user.hasMany(models.item);
      }
    }
  });
  return user;
};
