const { image } = require('faker');

module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert(
      'users',
      [
        {
          id: '97e5902e-05d4-4662-9de6-6328b6c20aca',
          first_name: 'John',
          last_name: 'Doe',
          email: 'example@example.com',
          password: '$2y$10$YcPt1RcEWwTn0H3wJQvQb.cSB9ORufmVh1qTBwCJH6pxZPDP2510W',
          phone: '00123456789',
          photo: image.avatar(),
          address: 'xyz street, abc city',
          city: 'Abc',
          state: 'Lagos',
          enabled: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: '290c50ae-9c2f-44e6-8963-21958c433a2a',
          first_name: 'Aaron',
          last_name: 'Pierce',
          email: 'test@example.com',
          password: '$2y$10$XnpUpKoBUsVQl4xDaF5KyOCebOhG8/2hzL9fcoqi4AZW5pVuOc3YC',
          phone: '00123456734',
          photo: image.avatar(),
          address: 'xyz street, abc city',
          city: 'xyz',
          state: 'Kogi',
          enabled: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: '84408d63-8d39-49a9-af7f-592b400ec50e',
          first_name: 'Enrichetta',
          last_name: 'Shailer',
          email: 'eshailer0@hud.gov',
          password: '$2y$10$J4NVYtCzAp3uofgaiLC8meA/6pnjrp9tuKdcwjXtAgi3gl34LVkSW',
          phone: '4756243635',
          photo: 'https://robohash.org/pariaturmagniqui.jpg?size=50x50&set=set1',
          address: '09155 Surrey Trail',
          city: 'Wangzuizi',
          state: 'Kentucky',
          enabled: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: '16352ad4-6a21-405d-a1d0-821a80c085eb',
          first_name: 'Flossie',
          last_name: 'McKibbin',
          email: 'mackie@example.com',
          password: '$2y$10$TiJGyRF5CWs.b17m66RciOO1Um4CY8xlBEOM57BdmjaMzahffa4bC',
          phone: '931 871 9245',
          photo: 'https://robohash.org/quaequiasint.png?size=50x50&set=set1',
          address: '6 Kipling Park',
          city: 'Chepes',
          state: 'Florida',
          enabled: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 'b26d0bdf-7511-4fac-ad9f-f86716ff5841',
          first_name: 'Darrel',
          last_name: 'Galego',
          email: 'dgalego2@yahoo.edu',
          password: '$2y$10$TiJGyRF5CWs.b17m66RciOO1Um4CY8xlBEOM57BdmjaMzahffa4bC',
          phone: '353 104 9874',
          photo: 'https://robohash.org/cumsuntquaerat.bmp?size=50x50&set=set1',
          address: '9381 Oneill Pass',
          city: 'Babakankiray',
          state: 'Texas',
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
