const db = require('../db/config');

const City = {};

City.findAll = () => {
  return db.query(
    'SELECT * FROM cities'
  );
};

Todo.findById = (id) => {
  return db.oneOrNone(
    `
    SELECT * FROM cities
    WHERE id = $1`, 
    [id]
  );
};

module.exports = City;