// const { Sequelize } = require('../db/models');
// const { sequelize } = require('../models');

const { Sequelize } = require('sequelize');
const config = require('./config');

const env = process.env.NODE_ENV || 'development';

const sequelize = new Sequelize(config[env]);

module.exports = sequelize;