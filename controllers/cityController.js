const City = require('../models/cityModel');

const cityController = {};

cityController.index = (req, res) => {
  City.findAll()
    .then(cities => {
      res.json({
        confirmation: 'Good to go',
        data: {cities},
      });
    })
    .catch(err => {
      console.log(err);res.status(400).json({confirmation:
       '400', err});
    });
};

cityController.show = (req, res) => {
  City.findById(req.params.id)
    .then(city => {
      res.json({
        confirmation: 'Good to go!',
        data: { city },
      });
    })
    .catch(err => {
      res.status(400).json({confirmation: '400', err});
    });
};


module.exports = cityController;