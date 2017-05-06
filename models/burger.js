// var orm = require("../config/orm.js");

// var burger = {
//   all: function(cb) {
//     orm.all("burger", function(res) {
//       cb(res);
//     });
//   },
//   // The variables cols and vals are arrays.
//   create: function(cols, vals, cb) {
//     orm.create("burger", cols, vals, function(res) {
//       cb(res);
//     });
//   },
//   update: function(objColVals, condition, cb) {
//     orm.update("burger", objColVals, condition, function(res) {
//       cb(res);
//     });	
//   }

// };

// module.exports = burger;
//============================================================
// var sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
  var Burgers = sequelize.define("Burgers", {
    burger_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1,25]
      }
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      len: [1],
      defaultValue: false
    },

  });
  return Burgers;
};
