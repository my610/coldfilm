'use strict';

// SeasonInfo-model.js - A sequelize model
//
// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.

const Sequelize = require('sequelize');

module.exports = function(sequelize) {
  const SeasonInfo = sequelize.define('SeasonInfo', {
    id: {type: Sequelize.INTEGER, allowNull: false, primaryKey: true},
    season: {type: Sequelize.INTEGER, defaultValue: 0},
    last_series: {type: Sequelize.INTEGER, defaultValue: 0},
    title: {type: Sequelize.TEXT, allowNull: false},
    img: {type: Sequelize.TEXT},
    status: {type: Sequelize.INTEGER, defaultValue: 1}
  }, {
    freezeTableName: true,
    // don't add the timestamp attributes (updatedAt, createdAt)
    timestamps: false,
    // define the table's name
    tableName: 'season_info',
    // privateColumns: ['status'],
    instanceMethods: {
      // toJSON() {
      //   const values = Object.assign({}, this.get());
      //   delete values.status
      //   return values
      // }
    }
  });

  SeasonInfo.sync();

  return SeasonInfo;
};
