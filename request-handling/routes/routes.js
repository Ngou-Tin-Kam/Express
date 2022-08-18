const router = require('express').Router();

let dogs = ['Pom', 'Husky', 'Pomsky', 'Chihuhua', 'French Bulldog']

router.post("/createDog", (req, res) => {
  console.log("BODY:", req.body);

  res.status(201).send();
});

router.get("/getAllDogs", (req, res) => {
  res.send(dogs);
});

router.get("/getDog/:id", (req, res) => {
  console.log("PARAMS:", req.params);

  res.send(dogs.splice(req.params.id, 1));
});

router.put("/updateDog/:index", (req, res) => {
  const newDog = req.query.newDog;
  const index = req.params.index;
  const oldDog = dogs[index];
  dogs[index] = newDog;
  res.status(202).send(`${oldDog} has been successfully updated with ${newDog}`);
});

router.delete("/removeDog/:id", (req, res) => {
  console.log("PARAMS:", req.params);

  res.send(dogs.splice(req.params.id, 1));
});

module.exports = router;