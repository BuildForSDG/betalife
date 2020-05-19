module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('People', [{
      name: 'John Doe',
      isBetaMember: false
    }], {});
  },

  down: (queryInterface, Sequelize) => {

  }
};
