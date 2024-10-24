import { describe, it, expect } from "vitest";
//import { getAllTask } from "./task.service";

const supertest = require('supertest');
const app = require('../../app');

//Probando el vitest
const request = supertest(app);

//API Test
describe('Task API ', () => {
  // GET ALL
  describe('getAllTask', async () => {
    it('Should return the all task ', async () => {

      //Arrange

      //Act

      //el request va solo
      const response = await request.get('/api/tasks');
      //Assert
      expect(response.statusCode).toBe(200);
      expect(response.body).toBeInstanceOf(Array);
    });
  })
})
