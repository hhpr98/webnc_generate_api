// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const { DATE } = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const branch = sequelizeClient.define('branch', {
    branch_name: {
      type: DataTypes.STRING,
      field: 'branch_name'
    },
    createdAt: {
      type: DataTypes.DATE,
      field: 'createdat',
      default: DATE.now
    },
    updatedAt: {
      type: DataTypes.DATE,
      field: 'updatedat',
      default: null
    }
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  branch.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return branch;
};
