const Todo =  require('../models/tadaModel');

const tadaController = {};

tadaController.index = (req, res) => {
  Todo.findAll()
    .then(todos => {
      res.json({
        confirmation: 'Good to go!',
        data: { todos },
      });
    })
    .catch(err => {
      console.log(err);
      res.status(400).json({confirmation: '400', err});
    });
};

tadaController.show = (req, res) => {
  Todo.findById(req.params.id)
    .then(todo => {
      res.json({
        confirmation: 'Good to go!',
        data: { todo },
      });
    })
    .catch(err => {
      res.status(400).json({confirmation: '400', err});
    });
};

tadaController.create = (req, res) => {
  console.log(req.body)
  Todo.create({
    notes: req.body.todo,
  })
  .then(todo => {
    res.json({confirmation: 'To Do added!', data: { todo }});
  })
  .catch(err => {
    console.log(err);
    res.status(400).json({confirmation: '400', err});
  });
};

tadaController.update = (req, res) => {
  Todo.update({
    notes: req.body.todo,
  }, req.params.id)
    .then(todo => {
      res.json({
        confirmation: 'Update Successful!',
        data: { todo },
      });
    })
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    });
};

tadaController.destroy = (req, res) => {
  Todo.destroy(req.params.id)
    .then(() => {
      res.json({confirmation: 'To Do note deleted'});
    })
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    });
};

module.exports = tadaController;