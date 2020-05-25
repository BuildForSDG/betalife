const { image } = require('faker');

module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert(
      'users',
      [
        {
          id: '1bb47d48-a93e-4f4d-ac01-6c2de3f3249d',
          first_name: 'John',
          last_name: 'Doe',
          email: 'example@example.com',
          password: '$2y$10$25ubzgnL6xCruAkNDmk5Vu/HDeB.DUTO8m21I50R5wQ.c5edWsutu',
          phone: '00123456789',
          photo: image.avatar(),
          address: 'xyz street, abc city',
          city: 'Abc',
          state: 'Lagos',
          enabled: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: queryInterface => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
