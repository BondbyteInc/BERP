'use strict';
module.exports = function(sequelize, DataTypes) {
  var item = sequelize.define('item', {
    id:{type: DataTypes.INTEGER,
        primaryKey:true},
    title: DataTypes.STRING,
    complete: {type: DataTypes.BOOLEAN,
                defaultValue: false},
    userid: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        item.belongsTo(models.user);
      }
    }
  });
  return item;
};
