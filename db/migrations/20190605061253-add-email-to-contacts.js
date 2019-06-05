'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.addColumn('Contacts', 'Email', {type: Sequelize.STRING, allowNull: true})

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.removeColumn('Contacts', 'Email');
    
  }
};
