/* eslint-disable consistent-return */
const Dog = require('../db');

const router = require('express').Router();

router.post('/createDog', (req, res, next) => {
  console.log('BODY:', req.body);
  if (!req.body || Object.keys(req.body).length < 1) return next({ status: 400, message: 'No body' });

  Dog.create(req.body)
  .then((result) => res.status(201).json(result))
  .catch((err) => next(err));
});

router.get('/getAllDogs', (req, res, next) => {
  Dog.find()
  .then((results) => res.json(results))
  .catch((err) => next(err));
});

router.get('/getDog/:id', (req, res, next) => {
  console.log('PARAMS:', req.params);
  const { id } = req.params;
  if (id === null || id === undefined) return next({ status: 400, message: 'Missing id' });

  Dog.findById(id)
  .then((result) => res.json(result))
  .catch((err) => next(err));
});

router.patch('/updateDog/:id', (req, res, next) => {
  console.log('PARAMS', req.params);
  console.log('QUERY', req.query);
  const { id } = req.params;

  Dog.findByIdAndUpdate(id, req.query)
    .then((result) => res.json(result))
    .catch((e) => next(e));
});

// Use async to be able to use await for demo purposes
router.delete('/removeDog/:id', async (req, res, next) => {
console.log('PARAMS', req.params);

// Use Try/Catch and await instead of .then and .catch
try{
  const result = await Dog.findByIdAndDelete(req.params.id);
  return res.status(204).send(result);
} catch (err) {
  return next(err);
}
});

module.exports = router;
