'use strict';

// FilmTranslated-model.js - A sequelize model
//
// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.

const Sequelize = require('sequelize');

module.exports = function(sequelize) {
  const FilmTranslated = sequelize.define('FilmTranslated', {
    id: {type: Sequelize.INTEGER, allowNull: false, primaryKey: true, unique: true, field: 'film_id',},
    status: {type: Sequelize.INTEGER, defaultValue: 1},
    title: {type: Sequelize.TEXT}
  }, {
    freezeTableName: true,
    timestamps: false,
    tableName: 'film_translated'
  });

  FilmTranslated.sync();

  return FilmTranslated;
};

/*
 CREATE TABLE film_translated (
 film_id INTEGER NOT NULL UNIQUE,
 status  INTEGER DEFAULT (1),
 title   TEXT,
 PRIMARY KEY (
 film_id
 )
 );

 */
