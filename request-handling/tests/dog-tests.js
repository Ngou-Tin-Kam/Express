// Dependencies
const { describe, it, beforeEach } = require("mocha");
const chai = require("chai");
const chaiHTTP = require("chai-http");

chai.use(chaiHTTP);
const { expect } = chai;

// Imports
const Dog = require("../db");
const server = require("../index");

// Setup
describe("CRUD Testing", () => {
  let id;

  beforeEach(async () => {
    try {
      await Dog.deleteMany({});
      const testDog = await Dog.create({
        name: "Smiley",
        breed: "Shiba Inu",
        age: 10,
      });
      id = testDog._id;
    } catch (err) {
      console.error(err);
    }
  });

  it("should create a dog", (done) => {
    const newDog = {
      name: "Fake Dog",
      breed: "Test",
      age: 3,
    };

    chai.request(server).post(`/createDog`).send(newDog).end((err, res) => {
        expect(err).to.be.null;
        expect(res.status).to.equal(201);
        expect(res.body).to.include(newDog);
        expect(res.body._id).to.not.be.null;

        return done();
      });
  });

  it("should get all dogs", (done) => {
    chai.request(server).get("/getAllDogs").end((err, res) => {
        expect(err).to.be.null;
        expect(res.status).to.equal(200);
        expect(res.body._id).to.not.be.null;

        return done();
      });
  });

  it("should get dog by id", (done) => {
    chai.request(server).get(`/getDog/${id}`).end((err, res) => {
        expect(err).to.be.null;
        expect(res.status).to.equal(200);
        expect(res.body).to.include({
          _id: id.toString(),
        });

        return done();
      });
  });

  it("should update a dog", (done) => {
    chai.request(server).patch(`/updateDog/${id}`).query({ name: "Saber" }).end((err, res) => {
        expect(err).to.be.null;
        expect(res.status).to.equal(200);
        expect(res.body).to.include({
          _id: id.toString(),
          name: "Smiley",
          breed: "Shiba Inu",
          age: 10,
        });

        return done();
      });
  });

  it("should delete a dog", (done) => {
    chai.request(server).delete(`/removeDog/${id}`).query({ name: "Test Dog" }).end((err, res) => {
        expect(err).to.be.null;
        expect(res.status).to.equal(204);
        expect(res.body).to.be.empty;
        return done();
      });
  });
});
