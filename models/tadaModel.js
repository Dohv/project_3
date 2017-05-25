const db = require('../db/config');

const Todo = {};

Todo.findAll = () => {
  return db.query(
    'SELECT * FROM todos'
  );
};

Todo.findById = (id) => {
  return db.oneOrNone(
    `
    SELECT * FROM todos
    WHERE id = $1`, 
    [id]
  );
};

Todo.create = (todo) => {
  console.log(todo)
  return db.one(
    `
    INSERT INTO todos (notes)
    VALUES ($1)
    RETURNING *`,
    [todo.notes]
  );
};

Todo.update = (todo, id) => {
  return db.one(
    `
      UPDATE todos SET
      notes = $1
      WHERE id = $2
      RETURNING *
    `, [todo.notes, id]
  );
};

Todo.destroy = id => {
  return db.none(
    `
      DELETE FROM todos
      WHERE id = $1
    `, [id]
  );
};

module.exports = Todo;