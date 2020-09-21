module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Cars', [{
      brand: 'BMW',
      modelCode: '530i',
      numberOfDoors: '4',
      numberOfSeats: '5',
      price: 51750,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      brand: 'Audi',
      modelCode: 'A4',
      numberOfDoors: '4',
      numberOfSeats: '5',
      price: 45000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      brand: 'Ferrari',
      modelCode: 'F50',
      numberOfDoors: '2',
      numberOfSeats: '2',
      price: 157500,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      brand: 'Suzuki',
      modelCode: 'Swift',
      numberOfDoors: '3',
      numberOfSeats: '4',
      price: 36000,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      brand: 'Fiat',
      modelCode: '500',
      numberOfDoors: '3',
      numberOfSeats: '4',
      price: 36000,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Cars', null, {});
  }
};




